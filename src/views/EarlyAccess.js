import React from 'react'
import EmailForm from '../components/EmailForm'

export default function earlyAccess() {
  return (
    <div class="md:flex max-w-6xl mx-auto px-5 py-5 lg:px-0 items-center h-screen">
        <div class="flex-1">
          <h1 className='text-5xl font-bold mb-8 text-black'>Permintaan Akses</h1>
        </div>
        <div class="flex-1 flex justify-center lg:justify-end py-5 lg:py-0">
            <div>
                <p className='mb-8 text-lg text-black'><span className='font-bold'>Kami sedang membangun sarang digital yang lebih baik untuk maju bersama. Kami ingin menjadi bagian darinya.</span>
                <br></br>
                Informasi lebih lanjut, silakan cantumkan email Anda di sini.
                </p>
            <div className='my-8'>
                <EmailForm />
            </div>
                <p className='text-slate-400 text-xs'>Dengan minta akses, Anda setuju untuk menerima email dari Lebah.</p>
          </div>
        </div>
      </div>
  )
}
