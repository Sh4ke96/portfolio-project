"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";

const SIZE_MAP = {
  sm: 40,
  md: 80,
  lg: 120,
  xl: 180,
} as const;

type PixelAvatarProps = {
  size?: number | keyof typeof SIZE_MAP;
  animated?: boolean;
  showGlow?: boolean;
  className?: string;
};

export function PixelAvatar({
  size = 120,
  animated = false,
  showGlow = false,
  className,
}: PixelAvatarProps) {
  const pixelSize = typeof size === "number" ? size : SIZE_MAP[size];

  return (
    <div
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{ width: pixelSize, height: pixelSize }}
    >
      <div
        className={cn(
          "relative overflow-hidden border-2 border-teal bg-card",
          animated && "animate-avatar-bob",
          showGlow && "animate-avatar-ring pixel-glow"
        )}
        style={{ width: pixelSize, height: pixelSize }}
      >
        <Image
          src="/avatar.png"
          alt="Artur Michałek pixel avatar"
          width={pixelSize}
          height={pixelSize}
          className="h-full w-full object-cover"
          style={{ imageRendering: "pixelated" }}
          priority
        />
      </div>
    </div>
  );
}
