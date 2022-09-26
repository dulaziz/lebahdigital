import React from "react";
import EmailForm from "./EmailForm";

function Banner(props) {

    return (
      
      <div class="md:flex max-w-6xl mx-auto px-5 py-5 lg:px-0 items-center">
        <div class="flex-1">
          <h1 className='text-6xl font-bold mb-8 text-black'>{props.title}</h1>
          <p className='mb-8 text-lg text-gray-700'><span className='font-bold'>{props.p1}</span>
          <br></br>
          {props.p2}
          </p>

          <div>
            <EmailForm />
          </div>

          <p className='text-slate-400 text-xs mt-7 lg:mt-5'>{props.notice}</p>
        </div>
        <div class="flex-1 flex justify-center lg:justify-end py-5 lg:py-0">
          <img className='w-96' src={props.img} />
        </div>
      </div>
      
    );
  }
  
  export default Banner;