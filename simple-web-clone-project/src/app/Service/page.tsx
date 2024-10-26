import React from 'react'

function Service() {
  return (
    <div className='flex flex-col min-h-screen'>
        <main className='flex-grow'>
            <div className='bg-gray-100 flex flex-col items-center justify-center min-h-screen'>
                <h1 className='text-4xl font-bold text-blue-600'>Our Services</h1>
                <p className='text-lg mt-4'>We offer a wide range of services to meet your needs.</p>
                <ul className='list-disc mt-6'>
                   <li  className='text-lg'>Web Development</li>
                   <li className='text-lg'>Web Dveloper</li>
                   <li className='text-lg'>UI/UX Design</li>
                </ul>
            </div>
        </main>
    </div>
  )
}

export default Service