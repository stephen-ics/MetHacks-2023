import { useEffect, useState } from "react"
import { GoThreeBars } from "react-icons/go"
import './navbarstyle.css'

import {
   Link,
   useLocation
} from "react-router-dom";


const links = [
    {
        name: "About",
        link: "/about",
        id: "about",
        priority: false
    },
    {
        name: "Explore",
        link: "/explore",
        id: "explore",
        priority: false
    },
    {
        name: "Create",
        link: "/create",
        id: "create",
        priority: false,
    }
]

   /*
   {
       name: "Sign Up",
       link: "/sign-up",
       id: "call-to-action",
       priority: true
   },
   */

 
const Navbar = () => {
   const [showDropdown, setShowDropdown] = useState(false);
   const { pathname } = useLocation();

   const [loggedIn, setLoggedIn] = useState(false)


   const login = async () => {
       console.log("Logging in")
   };

   const logout = async () => {
       console.log("Logging out");
       setLoggedIn(false);
   };

   const handleClick = () => {
       setLoggedIn(!loggedIn)
   }

   
 
   return (
    //{pathname ? opacity:0 : opacity:1}
    <div id="navbar">
       <header className="border-[#130611] border-solid border-2 flex flex-col justify-center bg-[#130611] z-[99999999] min-h-[7vh] py-2 lg:py-4 shadow-xl">
           <div className="container px-4 mx-auto lg:flex lg:items-center m-30">
               <div className="flex justify-between items-center">
                   <Link className="flex flex-row items-center gap-4 font-bold text-xl text-teal" to="/">
                       {/* <img src="" alt="Logo" width={29} height={42} /> */}
                       <h2 className="text-2xl text-white font-mono">Title</h2>
                   </Link>
 
                   <button
                       className="border border-solid border-gray-200 px-3 py-1 rounded text-gray-200 opacity-50 hover:opacity-75 lg:hidden cursor-pointer"
                       aria-label="Menu"
                       data-test-id="navbar-menu"
                       onClick={
                           () => {
                               setShowDropdown(!showDropdown);
                           }}
                   >
                       <GoThreeBars />
                   </button>
               </div>
 
               <div className={`${showDropdown ? "flex" : "hidden"} lg:flex flex-col lg:flex-row lg:ml-auto mt-3 lg:mt-0`} data-test-id="navbar">
                    {loggedIn === true ? (

                        <div>
                            {links.map(({ name, link, priority, id }) => 
                                <Link key={name} className={`${priority ? "text-purple-900 hover:bg-purple-900 hover:text-white text-center border border-solid border-purple-900 mt-1 lg:mt-0 lg:ml-1" : "text-white hover:bg-gray-200/25 hover:text-red-200"} p-2 lg:px-4 lg:mx-2 rounded duration-300 transition-colors ${pathname === name && "font-bold"}`} to={link}>
                                    {name}
                                </Link>
                            )}
                            
                            <Link to='/'>
                                <button
                                    className="text-orange-900 hover:bg-orange-600 hover:text-orange-300 text-center border border-solid border-orange-900 mt-1 lg:mt-0 lg:ml-1 p-2 lg:px-4 lg:mx-2 rounded duration-300 transition-colors"
                                    data-test-id={`navbar-logout`}
                                    onClick={() => handleClick()}
                                >
                                    Log out
                                </button>
                            </Link>
                        </div>
  
                    ) : (
                        <Link to='/login'>
                            <button
                                className="text-orange-900 hover:bg-orange-600 hover:text-orange-300 text-center border border-solid border-orange-900 mt-1 lg:mt-0 lg:ml-1 p-2 lg:px-4 lg:mx-2 rounded duration-300 transition-colors"
                                data-test-id={`navbar-login`}
                                onClick={(e) => handleClick()}
                            >
                                Log in
                            </button>
                        </Link>
                    )}
               </div>
               
           </div>
       </header>
       </div>
   )
}
 
export default Navbar;