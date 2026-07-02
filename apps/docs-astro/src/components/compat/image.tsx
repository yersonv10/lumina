import type { ImgHTMLAttributes } from "react";

interface CompatImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string | { src: string };
  fill?: boolean;
  unoptimized?: boolean;
}

/** Drop-in for next/image in ported preview/registry code — plain <img>, no optimization pipeline. */
export default function Image({ src, fill, unoptimized, style, className, alt, ...rest }: CompatImageProps) {
  const resolvedSrc = typeof src === "string" ? src : src.src;
  return (
    <img
      src={resolvedSrc}
      alt={alt}
      className={className}
      style={fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style } : style}
      {...rest}
    />
  );
}
