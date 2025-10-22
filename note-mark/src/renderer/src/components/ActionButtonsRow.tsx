import { DeleteNoteButton, NewNoteButton } from '@/components'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const ActionButtonsRow = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={twMerge('flex justify-between gap-2', className)} {...props}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}
