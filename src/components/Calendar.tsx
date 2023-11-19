'use client'

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger
} from '@/components/ui/hover-card'
import { cn } from '@/lib/utils'
import { useLogStore } from '@/store'
import dayjs from 'dayjs'

const Calendar = () => {
    const { logs } = useLogStore()

    const getDateInMonth = (year = dayjs().year(), month = dayjs().month()) => {
        const startDate = dayjs().year(year).month(month).date(1)
        const endDate = startDate.endOf('month')

        const dates = []

        for (let i = 1; i <= endDate.date(); i++) {
            // Start from 1
            dates.push(startDate.date(i).format('YYYY-MM-DD'))
        }

        return dates
    }

    const getColor = (value: number) => {
        return value === 0
            ? 'bg-gray-200'
            : value < 5
            ? 'bg-green-100'
            : value < 10
            ? 'bg-green-300'
            : 'bg-green-500'
    }

    return (
        <div className='border border-dashed flex flex-wrap gap-2 p-10 justify-center rounded-md'>
            {getDateInMonth().map((value, index) => {
                const valueDate = dayjs(value)
                    .add(1, 'day')
                    .format('YYYY-MM-DD')
                const log = logs[valueDate]

                return (
                    <HoverCard key={index}>
                        <HoverCardTrigger>
                            <div
                                className={cn(
                                    'h-6 w-6 bg-gray-200 rounded-sm hover:cursor-pointer',
                                    getColor(log?.hours || 0)
                                )}
                            ></div>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            {log?.hours || 0} hours on {value}
                        </HoverCardContent>
                    </HoverCard>
                )
            })}
        </div>
    )
}

export default Calendar
