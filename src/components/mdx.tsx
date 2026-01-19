import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: ReactNode
}

function Anchor({ href = '', children, ...props }: AnchorProps) {
  if (href.startsWith('/')) {
    return (
      <Link to={href} {...props}>
        {children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  )
}

export const mdxComponents = {
  a: Anchor,
}
