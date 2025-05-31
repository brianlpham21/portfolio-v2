'use client'

import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  fullWidth?: boolean
  disabled?: boolean
  icon?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  variant = 'primary',
  fullWidth = false,
  disabled = false,
  icon,
  className = '',
  ...props
}: ButtonProps) => {
  let variantClasses = ''

  if (variant === 'primary') {
    variantClasses = 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500'
  } else if (variant === 'secondary') {
    variantClasses = 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200 focus:ring-indigo-300'
  } else if (variant === 'outline') {
    variantClasses = 'border border-indigo-500 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500'
  }

  const fullWidthClass = fullWidth ? 'w-full' : ''
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : ''

  const baseClasses =
    'inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition'

  const combinedClasses = [
    baseClasses,
    variantClasses,
    fullWidthClass,
    disabledClass,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type="button"
      className={combinedClasses}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  )
}

export default Button
