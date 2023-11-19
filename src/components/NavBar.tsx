import { IoTimer } from 'react-icons/io5'
import { Button } from './ui/button'

const NavBar = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-1'>
                <IoTimer className='h-6 w-6' />
                <h1>Time Journal</h1>
            </div>

            <Button>Logout</Button>
        </div>
    )
}

export default NavBar
