'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { usePathname, useRouter } from 'next/navigation'
import { IoTimer } from 'react-icons/io5'
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
            <div className='flex items-center gap-1'>
                <IoTimer className='h-6 w-6' />
                <h1>Time Journal</h1>
            </div>

            {!isAuthPage ? (
                <Button onClick={handleLogout}>Logout</Button>
            ) : null}
        </div>
    )
}

export default NavBar
