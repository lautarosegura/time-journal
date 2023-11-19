'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { usePathname, useRouter } from 'next/navigation'
import { FiClock } from 'react-icons/fi'
import { Button } from './ui/button'

const NavBar = () => {
    const router = useRouter()
    const path = usePathname()
    const supabase = createClientComponentClient()
    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.refresh()
    }

    const isAuthPage = path === '/auth'

    return (
        <div className='flex items-center justify-between'>
            <a href='/' className='flex items-center gap-1'>
                <FiClock className='h-6 w-6' />
                <h1>Time Journal</h1>
            </a>

            {!isAuthPage ? (
                <Button onClick={handleLogout}>Logout</Button>
            ) : null}
        </div>
    )
}

export default NavBar
