import {useState} from "react"
import {Link} from "react-router-dom"

function Navbar() {

    const[ isOpen, setIsOpen ] = useState(false)

  return (
    
    <div className="border-b border-gray-500">
      <div className="max-w-6xl mx-auto px-5 py-3 lg:px-0 lg:flex">
        <div className="flex justify-between items-center">
          <div className='w-64'>
            <Link to="/" className="flex items-center text-black font-bold uppercase text-2xl hover:text-orange-400 transition">
            <img className='w-10 mr-2' src={"./LD1.png"} />Lebah Digital</Link>
          </div>
          <div>
            <button onClick={() => setIsOpen(!isOpen)} className="text-orange-500 block lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path className={!isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                <path className={isOpen ? 'block' : 'hidden'} stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        

        <div className={`${isOpen ? 'block' : 'hidden'} lg:flex w-full justify-end py-5 lg:py-0`}>
          <Link to="/contactUs" className="block py-2 px-4 border border-orange-500 text-orange-500 rounded hover:bg-slate-50 transition">Hubungi kami</Link>
          <Link to="/earlyAccess" className="block py-2 px-4 mt-3 lg:mt-0 lg:ml-3 bg-orange-500 text-slate-50 rounded hover:bg-orange-400 transition">Minta Akses</Link>
        </div>

      </div>
    </div>
    
  );
}

export default Navbar;