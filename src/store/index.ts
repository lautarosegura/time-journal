import { create } from 'zustand'

export interface Log {
    date: Date
    hours: number
    note: string
}

interface LogStore {
    log: Log
    logs: Record<string, Log> // Use Record<string, Log> for better type safety
    setLog: (logUpdate: Partial<Log>) => void
    setDate: (date: Date) => void
    setLogs: (log: Log, key: string) => void
}

const initialLog: Log = {
    date: new Date(),
    hours: 0,
    note: ''
}

export const useLogStore = create<LogStore>((set) => ({
    log: initialLog,
    logs: {},
    setDate: (date: Date) => set((state) => ({ log: { ...state.log, date } })),
    setLog: (logUpdate: Partial<Log>) =>
        set((state) => ({
            log: { ...state.log, ...logUpdate }
        })),
    setLogs: (log: Log, key: string) =>
        set((state) => ({ logs: { ...state.logs, [key]: log } }))
}))
