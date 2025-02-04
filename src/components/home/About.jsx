import React, { useContext } from 'react';
import NavBar from '../../layouts/NavBar';
import { countires } from '../../constants';
import { useNavigate, useParams } from 'react-router-dom';

import { FaArrowLeft } from "react-icons/fa6";
import { DarkModeContext } from '../../context/DarkModeContext';


const About = (e) => {

    //~dark mode
    const { darkMode, setDarkMode } = useContext(DarkModeContext);
    

    let navigate = useNavigate();

    const { id } = useParams();
    const countire = countires.find((e) => e.name === id);

    return (
        <>
            <div className={darkMode ? 'bg-[#202C37] h-screen' : 'bg-[#FAFAFA] h-screen'} >
                <NavBar />
                <div className='px-[5vw] py-10'>
                    <button className={`flex items-center gap-2 py-2 px-5 mt-5 text-[14px] rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  ${darkMode ? 'bg-[#2B3945] text-white' : 'bg-white text-black'}`} onClick={() => {navigate("/")}}><FaArrowLeft/>Back</button>
                </div>
                <div className='flex gap-[5vw] px-[5vw]'>
                    <img src={countire.flag} alt="" className='w-[40vw] h-[50vh] object-cover shadow-md' />
                    <div>
                        <h1 className={`font-bold text-[20px] ${darkMode ? 'text-white' : 'text-black'}`}>{countire.name}</h1>
                        <div className='flex justify-between gap-[5vw] pt-3'>
                            {/* left */}
                            <div>
                                <p className={`text-[14px] pt-3 pb-1 ${darkMode ? 'text-[#cdcccc]' : 'text-[#858585]'}`}><span className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Native Name:</span> {countire.nativeName}</p>
                                <p className={`text-[14px] pb-1 ${darkMode ? 'text-[#cdcccc]' : 'text-[#858585]'}`}><span className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Population:</span> {countire.population}</p>
                                <p className={`text-[14px] pb-1 ${darkMode ? 'text-[#cdcccc]' : 'text-[#858585]'}`}><span className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Region:</span> {countire.region}</p>
                                <p className={`text-[14px] pb-1 ${darkMode ? 'text-[#cdcccc]' : 'text-[#858585]'}`}><span className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Sub Region:</span> {countire.subregion}</p>
                                <p className={`text-[14px] pb-1 ${darkMode ? 'text-[#cdcccc]' : 'text-[#858585]'}`}><span className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Capital:</span> {countire.capital}</p>
                            </div>

                            {/* right */}
                            <div>
                                <p className={`text-[14px] pt-3 pb-1 ${darkMode ? 'text-[#cdcccc]' : 'text-[#858585]'}`}><span className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Top Level Domain:</span> {countire.topLevelDomain}</p>
                                <p className={`text-[14px] pb-1 ${darkMode ? 'text-[#cdcccc]' : 'text-[#858585]'}`}><span className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Currencies:</span> {countire.currencies.map((e) => e.name).join(", ")}</p>
                                <p className={`text-[14px] pb-1 ${darkMode ? 'text-[#cdcccc]' : 'text-[#858585]'}`}><span className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Languages:</span> {countire.languages.map((e) => e.name).join(", ")}</p>
                            </div>
                        </div>

                        <div className='pt-10'>
                            <p className='text-[#858585] text-[14px] pt-3 pb-1'><span className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Border Countries:</span> 
                                {countire.borders && countire.borders.length > 0 ? countire.borders.map((border, index) => (
                                    <button key={index} className={`rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] py-1 px-3 m-1 ${darkMode ? 'bg-[#2B3945] text-white' : 'bg-white text-black'}`}>{border}</button>
                                )) : "None"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;