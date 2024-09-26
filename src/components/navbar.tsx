
import Image from "next/image"
import Head from 'next/head';
import Dropdown from "./Dropdown";
import SignIn from "./authentication/signIn";



function Navbar() {
    return (
        <nav className="absolute top-0 z-30 flex flex-row bg-gradient-to-b from-blue-600 to-red-600 pl-10 pr-10 h-20 justify-between" style={{position: 'sticky', top: '0'}}>
            <div className="right basis-1/8">
                <ul className="flex flex-row h-full items-center justify-start">
                    <Image src="/logo.svg" alt="football" className="basis-1/4" width={70} height={70} />
                </ul>
            </div>
            <div className="center basis-1/2 ">
                <ul className="flex flex-row h-full items-center justify-start text-white">
                    <a href="/"><li className="text-center font-bold text-1xl md:hover:text-blue-600 cursor-pointer">FIRST TEAM</li></a>
                    <a href="/about"><li className="ml-10 text-center font-bold text-1xl md:hover:text-blue-600 cursor-pointer">CLUB</li></a>
                    <li className="ml-10 text-center font-bold text-1xl md:hover:text-blue-600 cursor-pointer">SPAI BARCA</li>
                    {/* <li className="basis-1/4 text-center font-bold text-1xl">BARCA TEAM</li> */}
                    <li className="ml-10">
                        
                        <Dropdown />
                    </li>
                </ul>
            </div>

            <div className="basis-1/5 flex items-center justify-end">

                <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <SignIn/>
                    <a href="#" className="text-white bg-red-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-1xl px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">SIGN UP</a>
                    <button data-collapse-toggle="mega-menu-icons" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-icons" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
            </div>

        </nav>

    )
}

export default Navbar;