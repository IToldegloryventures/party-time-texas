'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Button = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) => {
  // Base styles
  const baseStyles =
    'font-bold rounded-md transition-all duration-300 hover:shadow-[0_2px_8px_0] hover:shadow-purple-400/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black';

  // Size variants
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Color variants
  const variantStyles = {
    default: 'text-white bg-transparent hover:text-white/90',
    primary: 'bg-fuchsia-600 hover:bg-fuchsia-500 text-white',
    secondary: 'bg-purple-600 hover:bg-purple-700 text-white',
    ghost: 'text-white/70 hover:text-white bg-transparent',
    destructive: 'bg-red-600 hover:bg-red-700 text-white',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
