import Calendar from '@/components/Calendar'
import Logs from '@/components/Logs'
import NavBar from '@/components/NavBar'
import NewLog from '@/components/NewLog'

const page = () => {
    return (
        <div className='p-5 space-y-10'>
            <NavBar />
            <NewLog />
            <Calendar />
            <Logs />
        </div>
    )
}

export default page
