'use client'

import Link from 'next/link'
import React from 'react'

type ButtonLinkProps = {
  children: React.ReactNode
  href: string
  variant?: 'primary' | 'secondary' | 'outline'
  fullWidth?: boolean
  icon?: React.ReactNode
  className?: string
  target?: '_blank' | '_self'
  rel?: string
}

const ButtonLink = ({
  children,
  href,
  variant = 'primary',
  fullWidth = false,
  icon,
  className = '',
  target = '_self',
  rel,
  ...props
}: ButtonLinkProps) => {
  let variantClasses = ''

  if (variant === 'primary') {
    variantClasses = 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500'
  } else if (variant === 'secondary') {
    variantClasses = 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200 focus:ring-indigo-300'
  } else if (variant === 'outline') {
    variantClasses = 'border border-indigo-500 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500'
  }

  const fullWidthClass = fullWidth ? 'w-full' : ''

  const baseClasses =
    'inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition'

  const combinedClasses = [
    baseClasses,
    variantClasses,
    fullWidthClass,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={combinedClasses}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Link>
  )
}

export default ButtonLink
