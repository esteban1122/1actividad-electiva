import { formatDateFromMs } from '@renderer/utils'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type NotePreviewProps = {
  title: string
  content?: string
  lastEditTime: number
  isActive?: boolean
} & ComponentProps<'div'>

export const NotePreview = ({
  title,
  content,
  lastEditTime,
  isActive = false,
  className,
  ...props
}: NotePreviewProps) => {
  const date = formatDateFromMs(lastEditTime)

  return (
    <div
      className={twMerge(
        'cursor-pointer px-4 py-3 rounded-lg transition-all duration-200',
        'bg-zinc-800 hover:bg-zinc-700',
        'border border-zinc-700',
        isActive && 'bg-zinc-700 border-blue-500 border-2',
        className
      )}
      {...props}
    >
      <h3
        className={twMerge('mb-1 font-semibold truncate text-white', isActive && 'text-blue-400')}
      >
        {title}
      </h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-zinc-400">{date}</span>
    </div>
  )
}
