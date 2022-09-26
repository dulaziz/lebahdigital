import { Link } from "react-router-dom";


function Footer() {

  return (
    
    <div className="max-w-6xl mx-auto ">
        <div className="py-5 block lg:flex justify-between items-center">
            <div className="flex justify-center mb-8 lg:mb-0">
                <img className="w-16" src="LD1.png" alt="" />
            </div>
            <div className="text-center lg:flex text-black">
                <a href="#" className="block hover:text-gray-800 my-3 lg:my-0 lg:ml-3"><i class="fa-brands fa-facebook"></i> Facebook</a>
                <a href="mailto:halo@lebahdigital.id" className="block hover:text-gray-800 my-3 lg:my-0 lg:ml-3"><i class="fa-solid fa-envelope"></i> Email</a>
            </div>
        </div>
        <div className="lg:flex justify-center border-t border-gray-500 py-5 text-center text-gray-600">
            {/* <Link to="/policy" className="block hover:text-gray-800 my-3 mx-3">Privacy Policy</Link> */}
            <a href="#" className="block hover:text-gray-800 my-3 mx-3">Privacy Policy</a>
            <a href="#" className="block hover:text-gray-800 my-3 mx-3">Term of Service</a>
        </div>
    </div>
    
  );
}

export default Footer;