'use client';

import { forwardRef } from 'react';
import Link from 'next/link';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[#C8965A] text-white hover:bg-[#a87840] focus-visible:ring-[#C8965A] shadow-sm',
  secondary:
    'bg-[#1B3A5C] text-white hover:bg-[#122840] focus-visible:ring-[#1B3A5C] shadow-sm',
  outline:
    'border-2 border-[#1B3A5C] text-[#1B3A5C] hover:bg-[#1B3A5C] hover:text-white focus-visible:ring-[#1B3A5C]',
  ghost:
    'text-[#1B3A5C] hover:bg-[#FAF8F5] focus-visible:ring-[#1B3A5C]',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm min-h-[40px]',
  md: 'px-6 py-3 text-base min-h-[48px]',
  lg: 'px-8 py-4 text-lg min-h-[56px]',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      external,
      fullWidth,
      icon,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const base =
      'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer select-none';
    const classes = [
      base,
      variantClasses[variant],
      sizeClasses[size],
      fullWidth ? 'w-full' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {icon && <span aria-hidden="true">{icon}</span>}
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {icon && <span aria-hidden="true">{icon}</span>}
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {icon && <span aria-hidden="true">{icon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
