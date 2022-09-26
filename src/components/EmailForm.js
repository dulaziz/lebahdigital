import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

export default function EmailForm(e) {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_z8j440a', 'template_yfrveie', form.current, 'AkgzZMJ_HSM1Rn_KZ')
        .then((result) => {
            console.log(result.text);
            alert("Permintaan akses terkirim");
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

  return (
    <form ref={form} onSubmit={sendEmail} className="lg:flex">
        <input type="email" name="user_email" placeholder="Email Id" className='border border-orange-500 py-3 px-6 mb-3 lg:mb-0 lg:mr-3 focus:outline-none w-full rounded' required/>
        <input type="submit" value="Kirim" className='cursor-pointer bg-orange-500 border border-orange-500 hover:bg-orange-400 hover:border-orange-400 rounded shadow-xl shadow-orange-500/30 px-6 py-3 w-full text-slate-50' />
    </form>
  )
}
