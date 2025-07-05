import React from 'react'
import { cn } from '../../utils'

type Variant =
  | 'default'
  | 'blue'
  | 'purple'
  | 'purple-outline'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'

type Size = 'default' | 'sm' | 'lg' | 'icon'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const variantClasses: Record<Variant, string> = {
  default: 'bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90',
  purple: 'bg-[#915EFF] text-neutral-50 hover:bg-[#915EFF]/90',
  'purple-outline':
    'border border-[#915EFF] bg-tranparent hover:bg-[#915EFF]/10 text-[#915EFF]',
  blue: 'bg-[#00cfd5] text-white hover:bg-[#00b7be]',
  destructive: 'bg-red-500 text-neutral-50 hover:bg-red-500/90',
  outline:
    'border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900',
  secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80',
  ghost: 'hover:bg-neutral-100 hover:text-neutral-900',
  link: 'text-neutral-900 underline-offset-4 hover:underline',
}

const sizeClasses: Record<Size, string> = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-11 rounded-md px-8',
  icon: 'h-10 w-10',
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
