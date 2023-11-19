'use client'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table'
import { useLogStore } from '@/store'

const Logs = () => {
    const { logs } = useLogStore()

    return (
        <div>
            {Object.keys(logs).length ? (
                <Table>
                    <TableCaption>A list of your time logs.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='w-1/3'>Date</TableHead>
                            <TableHead className='w-1/3'>Hours</TableHead>
                            <TableHead className='w-1/3'>Note</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Object.keys(logs).map((key) => {
                            const log = logs[key]

                            return (
                                <TableRow key={key}>
                                    <TableCell>
                                        {log?.date.toDateString()}
                                    </TableCell>
                                    <TableCell>{log?.hours}</TableCell>
                                    <TableCell>{log?.note}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            ) : (
                <p className='text-center mt-4 text-sm text-muted-foreground'>
                    No log entries found.
                </p>
            )}
        </div>
    )
}

export default Logs
