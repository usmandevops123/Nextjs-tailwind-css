import Link from 'next/link';
function Nav(){
    return(
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
         <Link href ="/about/">
         <a className="mr-5 hover:text-gray-900">About</a>
         </Link>
         <Link href ="/contact-us/">
         <a className="mr-5 hover:text-gray-900">ContactUs</a>
         </Link>
         <Link href ="/events/">
         <a className="mr-5 hover:text-gray-900">Events</a>
         </Link>
         
         
    
      </nav>
    )
} 
export default Nav;