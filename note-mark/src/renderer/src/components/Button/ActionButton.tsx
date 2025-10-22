import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type ActionButtonProps = ComponentProps<'button'>

export const ActionButton = ({ className, children, ...props }: ActionButtonProps) => {
  return (
    <button
      className={twMerge(
        'px-3 py-2 rounded-md bg-zinc-800 hover:bg-zinc-700',
        'border border-zinc-700 transition-colors duration-200',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
