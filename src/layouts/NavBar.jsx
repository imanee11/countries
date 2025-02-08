import React, { useContext } from 'react';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";


import { DarkModeContext } from '../context/DarkModeContext';


const NavBar = () => {

    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    return (
        <>
            <nav className={`flex justify-between items-center shadow-md px-[5vw] py-[4vh] ${darkMode ? "bg-[#2B3945] text-white" : "bg-white text-black"}`}>
                {/* left */}
                <div>
                    <p className='font-bold lg:text-[16px] text-[14px]'>Where in the world?</p>
                </div>

                {/* right */}
                <div>
                    <p
                        onClick={() => setDarkMode(!darkMode)}
                        className='flex items-center gap-2 font-medium lg:text-[15px] text-[14px] cursor-pointer'
                    >
                        {darkMode ? <MdOutlineLightMode  /> : <MdOutlineDarkMode />}
                        {darkMode ? "Light Mode" : "Dark Mode"}
                    </p>                
                </div>
            </nav>

        </>
    );
};

export default NavBar;