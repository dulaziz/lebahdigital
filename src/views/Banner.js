import React from "react";

function Banner() {

    return (
      
      <div class="flex flex-col lg:flex-row max-w-6xl mx-auto px-5 py-5 lg:px-0 items-center">
        <div class="basis-3/6">
          <h1 className='text-6xl font-bold mb-8 text-gray-600'>Hello, kami dari Lebah!</h1>
          <p className='mb-8 text-lg text-gray-500'><span className='font-bold'>Kami sedang membangun sarang digital yang lebih baik untuk maju bersama. Kami ingin menjadi bagian darinya.</span>
          <br></br>
          Informasi lebih lanjut, silakan cantumkan email Anda di sini.
          </p>
          
          <input type="text" id="fname" name="fname" placeholder="Email Anda" className='border border-orange-500 py-3 px-6 mb-5 focus:outline-none w-full lg:w-auto rounded'></input>
          <button className='bg-orange-500 border border-orange-500 hover:bg-orange-400 hover:border-orange-400 rounded shadow-xl shadow-orange-500/30 px-6 py-3 lg:ml-3 w-full lg:w-auto text-slate-50'>
            <a href='#' >Minta Akses Awal</a>
          </button>

          
          <p className='text-slate-400 text-xs mt-8 lg:mt-0'>Dengan minta akses, Anda setuju untuk menerima email dari Lebah.</p>
        </div>
        <div class="basis-3/6 flex justify-center lg:justify-end py-5 lg:py-0">
          <img className='w-96' src={"./lebah-2.png"} />
        </div>
      </div>
      
    );
  }
  
  export default Banner;