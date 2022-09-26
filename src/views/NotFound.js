import React from 'react'

export default function NotFound() {
  return (
    <div class="max-w-6xl mx-auto px-5 py-5 lg:px-0 flex justify-center items-center text-black h-screen">
        <div className='text-center'>
            <h1 className='text-9xl font-bold mb-5'>404</h1>
            <h2 className='text-2xl font-semibold'>Not Found</h2>
            <p>The resource requested could not be found on this server!</p>
        </div>
    </div>
  )
}
