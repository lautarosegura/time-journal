'use client'

import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useLogStore } from '@/store'
import { ToastAction } from '@radix-ui/react-toast'
import dayjs from 'dayjs'
import { GrAdd } from 'react-icons/gr'
import { DatePicker } from './DatePicker'
import { useToast } from './ui/use-toast'

const NewLog = () => {
    const { logs, log, setLog, setLogs } = useLogStore()
    const { toast } = useToast()

    const closeDialog = () => {
        document.getElementById('dialog-close-btn')?.click()
    }

    const validateLog = () => {
        if (!log.date) {
            throw 'Date can not be empty.'
        }
        if (!log.hours) {
            throw 'Hours can not be empty.'
        }
        if (log.hours < 0) {
            throw 'Hours can not be negative.'
        }
        if (log.hours === 0) {
            throw 'Hours can not be zero.'
        }
        if (log.hours > 12) {
            throw 'Hours can not be more than 12.'
        }
        if (!log.note) {
            throw 'Note can not be empty.'
        }
    }

    const logSubmitHandler = () => {
        try {
            validateLog()
            setLogs(log, dayjs(log.date).format('YYYY-MM-DD'))
            closeDialog()
            toast({
                title: 'Log added successfully.',
                variant: 'default',
                action: <ToastAction altText='Close'>Close</ToastAction>,
                description: 'Your log has been added to the list.'
            })
        } catch (error) {
            toast({
                title: 'Oops! Something went wrong.',
                description: error as string,
                variant: 'destructive',
                action: <ToastAction altText='Try again'>Try again</ToastAction>
            })
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='w-full sm:w-72 border-dashed border py-3 flex items-center justify-center gap-2 rounded-md cursor-pointer hover:border-solid hover:bg-gray-100 transition-all'>
                    <GrAdd />
                    <p>New log</p>
                </div>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>Create new log</DialogTitle>
                    <DialogDescription>
                        Time is your most valuable asset, track it wisely!
                    </DialogDescription>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Label className='text-right'>Date</Label>
                        <DatePicker />
                    </div>
                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor='hours' className='text-right'>
                            Hours
                        </Label>
                        <Input
                            id='hours'
                            type='number'
                            className='col-span-3'
                            value={log.hours}
                            onChange={(e) =>
                                setLog({
                                    ...log,
                                    hours: parseInt(e.target.value)
                                })
                            }
                        />
                    </div>
                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor='note' className='text-right'>
                            Note
                        </Label>
                        <Input
                            id='note'
                            placeholder='What did you do?'
                            className='col-span-3'
                            value={log.note}
                            onChange={(e) =>
                                setLog({
                                    ...log,
                                    note: e.target.value
                                })
                            }
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type='submit' onClick={logSubmitHandler}>
                        Submit
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default NewLog
