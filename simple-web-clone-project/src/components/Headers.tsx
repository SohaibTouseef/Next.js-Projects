import Link from 'next/link'
import React from 'react'


function Headers() {
  return (
    <div>
        <nav className='bg-blue-500 text-white p-4'>
            <ul className='flex space-x-4'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/About-us">About-us</Link></li>
                <li><Link href="/Service">Service</Link></li>
                <li><Link href="/Projects">Projects</Link></li>
                <li><Link href="/Contact">Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Headers