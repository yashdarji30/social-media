import { github, lucia } from "@/auth";
import kyInstance from "@/lib/ky";
import prisma from "@/lib/prisma";
import streamServerClient from "@/lib/stream";
import { slugify } from "@/lib/utils";
import { OAuth2RequestError } from "arctic";
import { generateIdFromEntropySize } from "lucia";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const code = req.nextUrl.searchParams.get("code");
    const state = req.nextUrl.searchParams.get("state");
  
    const storedState = cookies().get("state")?.value;
    const storedCodeVerifier = cookies().get("code_verifier")?.value;
  
    if (
      !code ||
      !state ||
      !storedState ||
      !storedCodeVerifier ||
      state !== storedState
    ) {
      return new Response(null, { status: 400 });
    }
  
    try {
      const tokens = await github.validateAuthorizationCode(
        code,
      );
  
      const githubUser = await kyInstance
        .get("https://api.github.com/user", {
          headers: {
            Authorization: `Bearer ${tokens.accessToken}`,
          },
        })
        .json<{ id: number; login: string; name: string | null }>();
  
      const existingUser = await prisma.user.findUnique({
        where: {
          githubId: githubUser.id.toString(),
        },
      });
  
      if (existingUser) {
        const session = await lucia.createSession(existingUser.id, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        );
        return new Response(null, {
          status: 302,
          headers: {
            Location: "/",
          },
        });
      }
  
      const userId = generateIdFromEntropySize(10);
  
      const username = slugify(githubUser.login) + "-" + userId.slice(0, 4);
  
      await prisma.$transaction(async (tx) => {
        await tx.user.create({
          data: {
            id: userId,
            username,
            displayName: githubUser.name || githubUser.login,
            githubId: githubUser.id.toString(),
          },
        });
        await streamServerClient.upsertUser({
          id: userId,
          username,
          name: username,
        });
      });
  
      const session = await lucia.createSession(userId, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
  
      return new Response(null, {
        status: 302,
        headers: {
          Location: "/",
        },
      });
    } catch (error) {
      console.error(error);
      if (error instanceof OAuth2RequestError) {
        return new Response(null, {
          status: 400,
        });
      }
      return new Response(null, {
        status: 500,
      });
    }
  }