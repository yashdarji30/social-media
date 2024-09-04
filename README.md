This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Dependencies

```bash
npm i lucia @lucia-auth/adapter-prisma prisma @prisma/client @tanstack/react-query @tanstack/react-query-devtools @tiptap/react @tiptap/starter-kit @tiptap/extension-placeholder @tiptap/pm uploadthing @uploadthing/react arctic date-fns ky next-themes react-cropper react-image-file-resizer react-intersection-observer react-linkify-it stream-chat stream-chat-react --legacy-peer-deps

```
** Shadcn components **
```bash
npx --legacy-peer-deps shadcn-ui@latest add button dialog dropdown-menu form input label skeleton tabs textarea toast tooltip
```

** Prettier lagecy-peer-deps **

```bash
npm i -D prettier eslint-config-prettier prettier-plugin-tailwindcss --legacy-peer-deps
```

# .env
```
#vercel postgres database configure

POSTGRES_URL=""
POSTGRES_PRISMA_URL=""
POSTGRES_URL_NO_SSL=""
POSTGRES_URL_NON_POOLING=""
POSTGRES_USER=""
POSTGRES_HOST=""
POSTGRES_PASSWORD=""
POSTGRES_DATABASE=""

#googleOAuth
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

#githubOAuth

# GITHUB_CLIENT_ID=""
# GITHUB_CLIENT_SECRET=""

#uploadthing
UPLOADTHING_SECRET=""
NEXT_PUBLIC_UPLOADTHING_APP_ID=""

#Stream

NEXT_PUBLIC_STREAM_KEY=""
STREAM_SECRET=""

#other
CRON_SECRET=""
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

## <a name="features">🔋 Features and Technology</a>

- Next.js 15
- Server actions and server components
- TanStack React Query
- Optimistic updates
- Infinite scrolling feeds
- File uploads with drag & drop and copy-paste support (UploadThing)
- Like system
- Follow system
- Comment system
- Notification system
- DM system (powered by Stream)
- Bookmarks
- Lucia authentication (username/password & Google OAuth2)
- Postgres DB with Prisma ORM
- Hashtags & mentions
- Full-text search
- Advanced caching & revalidation
- Mobile-responsive layout with Tailwind CSS & Shadcn UI components
- Dark theme, light theme, and system theme
- Real-time form validation with React Hook Form & Zod
- TipTap editor
- Deploy on Vercel & set up cron job
- IDE setup with Prettier & plugins

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.