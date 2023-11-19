import Calendar from '@/components/Calendar'
import Logs from '@/components/Logs'
import NavBar from '@/components/NavBar'
import NewLog from '@/components/NewLog'
import { InitLogs } from '@/lib/state'
import { Log } from '@/store'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const page = async () => {
    const supabase = createServerComponentClient({ cookies })

    const { data } = await supabase.auth.getSession()

    if (!data.session) {
        return redirect('/auth')
    }

    const { data: logs } = await supabase
        .from('logs')
        .select('*')
        .order('date', { ascending: true })

    return (
        <div className='p-5 space-y-10'>
            <InitLogs logs={logs as Log[]} />
            <NavBar />
            <NewLog />
            <Calendar />
            <Logs />
        </div>
    )
}

export default page
