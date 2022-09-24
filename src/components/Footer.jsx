
function Footer() {

  return (
    
    <div className="max-w-6xl mx-auto ">
        <div className="py-5 block lg:flex justify-between items-center">
            <div className="flex justify-center mb-8 lg:mb-0">
                <img className="w-24" src="logo192.png" alt="" />
            </div>
            <div className="text-center lg:flex text-gray-600">
                <a href="#" className="block hover:text-gray-800 my-3 lg:my-0 lg:ml-3"><i class="fa-brands fa-facebook"></i> Facebook</a>
                <a href="#" className="block hover:text-gray-800 my-3 lg:my-0 lg:ml-3"><i class="fa-solid fa-envelope"></i> Email</a>
            </div>
        </div>
        <div className="lg:flex justify-center border-t border-orange-500 py-5 text-center text-gray-600">
            <a href="#" className="block hover:text-gray-800 my-3 mx-3">Privacy Policy</a>
            <a href="#" className="block hover:text-gray-800 my-3 mx-3">Term of Service</a>
            <a href="#" className="block hover:text-gray-800 my-3 mx-3">Cookies Seting</a>
        </div>
    </div>
    
  );
}

export default Footer;