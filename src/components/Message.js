import {useRef} from 'react'
import emailjs from '@emailjs/browser';


export default function Message() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_z8j440a', 'template_cd3hv0m', form.current, 'AkgzZMJ_HSM1Rn_KZ')
          .then((result) => {
            alert("Pesan terkirim");
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

  return (
    <div>
        
        <form ref={form} onSubmit={sendEmail}>

        <input type="text" name="user_name" placeholder="Nama" className='border border-orange-500 py-3 px-6 mb-5 focus:outline-none w-full rounded' required />

        <input type="email" name="user_email" placeholder="Email" className='border border-orange-500 py-3 px-6 mb-5 focus:outline-none w-full rounded' required />

        <textarea rows="4" name="message" placeholder="Pesan Anda" className='border border-orange-500 py-3 mb-5 px-6 focus:outline-none w-full rounded' required />

        <button type='submit'
        className='cursor-pointer bg-orange-500 border border-orange-500 hover:bg-orange-400 hover:border-orange-400 rounded shadow-xl shadow-orange-500/30 px-6 py-3 w-full text-slate-50'>Kirim</button>

        </form>

    </div>
  )
}
