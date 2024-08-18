"use client";

import useFollowerInfo from "@/hooks/useFollowerInfo";
import { FollowerInfo } from "@/lib/types";
import { formatNumber } from "@/lib/utils";

interface FollowerCountProps {
    userId: string;
    initailState: FollowerInfo;
}

export default function FollowerCount({
    userId,
    initailState,
}: FollowerCountProps) {
    const {data} = useFollowerInfo(userId, initailState);

    return(
        <span>
            Followers:{" "}
            <span className="font-semibold">{formatNumber(data.followers)}</span>
        </span>
    )
}