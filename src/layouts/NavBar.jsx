import React from 'react';
import { MdOutlineDarkMode } from "react-icons/md";


const NavBar = () => {
    return (
        <>
            <nav className='bg-white flex justify-between items-center shadow-md px-[5vw] py-[4vh]'>
                {/* left */}
                <div>
                    <p className='font-bold'>Where in the world?</p>
                </div>

                {/* right */}
                <div>
                    <p className='flex items-center gap-2 font-medium text-[15px] cursor-pointer'><MdOutlineDarkMode size={20} />Dark Mode</p>
                </div>
            </nav>

        </>
    );
};

export default NavBar;