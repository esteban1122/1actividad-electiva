// src/preload/index.ts
import { contextBridge, ipcRenderer } from 'electron'
import { CreateNote, DeleteNote, GetNotes, ReadNote, WriteNote } from '../shared/types'

// Definición de la API personalizada (context)
const api = {
  locale: navigator.language,
  getNotes: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('getNotes', ...args),
  readNote: (...args: Parameters<ReadNote>) => ipcRenderer.invoke('readNote', ...args),
  writeNote: (...args: Parameters<WriteNote>) => ipcRenderer.invoke('writeNote', ...args),
  createNote: (...args: Parameters<CreateNote>) => ipcRenderer.invoke('createNote', ...args),
  deleteNote: (...args: Parameters<DeleteNote>) => ipcRenderer.invoke('deleteNote', ...args)
} as const // Usamos 'as const' para un mejor tipado en React

// Expone las APIs al contexto de renderizado (Estructura de Electron-Vite)
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('context', api) // Nuestra API personalizada
  } catch (error) {
    console.error(error)
  }
}
