'use client'

import { Log, useLogStore } from '@/store'
import { useRef } from 'react'

interface InitLogsProps {
    logs: Log[]
}

export const InitLogs = ({ logs }: InitLogsProps) => {
    const initRef = useRef<boolean>()

    const prepareLogs = () => {
        type ResultType = {
            [key: string]: Log
        }
        const result: ResultType = {}

        logs.forEach((log) => {
            // @ts-ignore
            result[log.date as string] = { ...log, date: new Date(log.date) }
        })

        return result
    }

    if (!initRef.current) {
        useLogStore.setState({
            logs: prepareLogs()
        })
        initRef.current = true
    }

    return null
}
