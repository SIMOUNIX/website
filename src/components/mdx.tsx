import type { AnchorHTMLAttributes, ImgHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  readonly children?: ReactNode;
};

function Anchor({ href = "", children, ...props }: AnchorProps) {
  if (href.startsWith("/")) {
    return (
      <Link to={href} {...props}>
        {children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  );
}

type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

function Image({ src, alt, ...props }: ImageProps) {
  return (
    <figure className="prose-figure">
      <img
        src={src}
        alt={alt || ""}
        loading="lazy"
        decoding="async"
        {...props}
      />
      {alt && <figcaption>{alt}</figcaption>}
    </figure>
  );
}

export const mdxComponents = {
  a: Anchor,
  img: Image,
};
