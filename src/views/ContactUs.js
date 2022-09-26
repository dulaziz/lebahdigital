import React from 'react';
import Message from '../components/Message';


function ContactUs() {
  
    
    return (
      <div class="md:flex max-w-6xl mx-auto px-5 py-5 lg:px-0 lg:py-14 items-center">
        <div class="flex-1 lg:pr-10">
          <h1 className='text-5xl font-bold mb-8 text-black'>Hubungi kami</h1>
          <p className='mb-8 text-lg text-black'>Silakan gunakan informasi kontak di bawah ini atau formulir untuk memberikan umpan balik, mengajukan pertanyaan, meminta dukungan,  sekedar memberi tahu hal-hal yang  lucu, atau apa pun yang menurut Anda dapat kami bantu.
          </p>
          
          <ul>
            <li className="my-2">
              <a href="mailto:halo@lebahdigital.id" className='flex items-center'>
                <i className="mr-3 fa-solid fa-envelope"></i>
                <p> halo@lebahdigital.id</p>
              </a>
            </li>
            <li className="my-2">
              <a href="https://wa.me/+62 81806303030" className='flex items-center'>
                <i className="mr-3 fa-solid fa-phone"></i> 
                <p>+62 81806303030</p>
              </a>
            </li>
            <li className="my-2">
              <p className='flex items-center'>
              <i className="mr-4 fa-solid fa-location-dot"></i>
              <p>Taman Yasmin No.30 Bogor Barat, Kota Bogor, Jawa Barat</p>
              </p>
            </li>
          </ul>
        </div>
        
        <div className="flex-1 flex py-5 mt-5 md:mt-0 md:py-0 md:pl-5">
            <Message />
        </div>
      </div>
  );
};


export default ContactUs;