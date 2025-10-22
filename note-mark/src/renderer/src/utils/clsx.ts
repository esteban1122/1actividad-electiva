// src/renderer/src/utils/clsx.ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Función de utilidad para combinar clases de Tailwind CSS.
 * Combina condicionalmente clases, maneja conflictos de Tailwind
 * (ej. 'p-4' y 'p-8' -> usa 'p-8'), y asegura la precedencia correcta.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
