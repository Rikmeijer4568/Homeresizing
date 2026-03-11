import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'cream' | 'primary';
}

export function Card({
  children,
  className = '',
  hover = false,
  variant = 'default',
}: CardProps) {
  const variantClasses = {
    default: 'bg-white border border-[#E2DDD8]',
    cream: 'bg-[#FAF8F5] border border-[#E2DDD8]',
    primary: 'bg-[#1B3A5C] text-white border border-[#1B3A5C]',
  };

  return (
    <div
      className={[
        'rounded-xl p-6',
        variantClasses[variant],
        hover
          ? 'transition-shadow duration-200 hover:shadow-[0_6px_24px_0_rgba(27,58,92,0.14)] cursor-pointer'
          : 'shadow-[0_2px_16px_0_rgba(27,58,92,0.08)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}

// Badge component
interface BadgeProps {
  children: ReactNode;
  variant?: 'accent' | 'primary' | 'muted';
  className?: string;
}

export function Badge({
  children,
  variant = 'accent',
  className = '',
}: BadgeProps) {
  const variantClasses = {
    accent: 'bg-[#C8965A]/10 text-[#C8965A] border border-[#C8965A]/20',
    primary: 'bg-[#1B3A5C]/10 text-[#1B3A5C] border border-[#1B3A5C]/20',
    muted: 'bg-[#64748B]/10 text-[#64748B] border border-[#64748B]/20',
  };

  return (
    <span
      className={[
        'inline-block text-sm font-semibold px-3 py-1 rounded-full',
        variantClasses[variant],
        className,
      ].join(' ')}
    >
      {children}
    </span>
  );
}

// SectionHeader component
interface SectionHeaderProps {
  id?: string;
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  id,
  label,
  title,
  subtitle,
  centered = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={[centered ? 'text-center' : '', 'mb-12', className].join(' ')}>
      {label && (
        <p className="text-[#C8965A] font-semibold text-sm uppercase tracking-widest mb-3">
          {label}
        </p>
      )}
      <h2 id={id} className="text-[#1B3A5C]">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-[#64748B] text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
