import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';



function ContactUs(e) {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2c0be5s', 'template_ks0g0vs', form.current, 'u4FhUml6jcYf98P0o')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.currentTarget.reset();
  }
    
    return (
      <div class="flex flex-col lg:flex-row max-w-6xl mx-auto px-5 py-5 lg:px-0 lg:py-14 items-center">
        <div class="basis-3/6 lg:pr-10">
          <h1 className='text-5xl font-bold mb-8 text-gray-600'>Hubungi kami</h1>
          <p className='mb-8 text-lg text-gray-500'>Silakan gunakan informasi kontak di bawah ini atau formulir untuk memberikan umpan balik, mengajukan pertanyaan, meminta dukungan,  sekedar memberi tahu hal-hal yang  lucua, atau apa pun yang menurut Anda dapat kami bantu.
          </p>
          
          <ul>
            <li className="my-2">
              <a href=""><i className="mr-3 fa-solid fa-envelope"></i> halo@lebahdigital.id</a>
            </li>
            <li className="my-2">
              <a href=""><i className="mr-3 fa-solid fa-phone"></i> +62 81806303030</a>
            </li>
            <li className="my-2">
              <a href=""><i className="mr-3 fa-solid fa-location-dot"></i> Taman Yasmin No.30 Bogor Barat, Kota Bogor, Jawa Barat </a>
            </li>
          </ul>
        </div>

        <div class="basis-3/6 lg:justify-end py-5 mt-5 lg:mt-0 lg:py-0 lg:pl-5">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Nama" className='border border-orange-500 py-3 px-6 mb-5 focus:outline-none w-full rounded' required/>

              <input type="email" name="user_email" placeholder="Email Id" className='border border-orange-500 py-3 px-6 mb-5 focus:outline-none w-full rounded' required/>

              <textarea style={{height: "200px"}} name="message" placeholder="Pesan Anda" className='border border-orange-500 py-3 mb-5 px-6 focus:outline-none w-full rounded' required/>

              <input type="submit" value="Send" className='cursor-pointer bg-orange-500 border border-orange-500 hover:bg-orange-400 hover:border-orange-400 rounded shadow-xl shadow-orange-500/30 px-6 py-3 w-full text-slate-50' />
          </form>
        </div>
      </div>
  );
};

export default ContactUs;