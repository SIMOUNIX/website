import type { ReactNode } from "react";

type FooterItemProps = {
  href: string;
  label: string;
  icon?: ReactNode;
  target?: string;
  rel?: string;
};

export default function FooterItem({
  href,
  label,
  icon,
  target,
  rel,
}: FooterItemProps) {
  return (
    <a className="footer-link" href={href} target={target} rel={rel}>
      <span className="footer-icon" aria-hidden="true">
        {icon}
      </span>
      <span>{label}</span>
    </a>
  );
}
