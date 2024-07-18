import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';

export type DividerProps = ComponentProps<'div'>;

export const Divider = ({ className, children, ...props }: DividerProps) => {
  return (
    <span className={cn('relative flex justify-center', className)} {...props}>
      <div className="top-1/2 absolute inset-x-0 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75 h-px -translate-y-1/2"></div>

      <span className="relative z-10 bg-card px-6">{children}</span>
    </span>
  );
};
