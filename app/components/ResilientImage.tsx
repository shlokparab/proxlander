"use client";

import Image, { type ImageProps } from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";

type ResilientImageProps = Omit<ImageProps, "onError"> & {
  fallback: ReactNode;
};

function imageSourceKey(src: ImageProps["src"]) {
  if (typeof src === "string") return src;
  return "src" in src ? src.src : src.default.src;
}

export default function ResilientImage({ alt, fallback, src, ...props }: ResilientImageProps) {
  const sourceKey = imageSourceKey(src);
  const [failedSource, setFailedSource] = useState<string | null>(null);

  if (failedSource === sourceKey) return <>{fallback}</>;

  return <Image {...props} src={src} alt={alt} onError={() => setFailedSource(sourceKey)} />;
}
