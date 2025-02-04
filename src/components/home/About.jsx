import React from 'react';
import NavBar from '../../layouts/NavBar';
import { countires } from '../../constants';
import { useNavigate, useParams } from 'react-router-dom';

import { FaArrowLeft } from "react-icons/fa6";


const About = (e) => {

    let navigate = useNavigate();

    const { id } = useParams();
    const countire = countires.find((e) => e.name === id);

    return (
        <>
            <div>
                <NavBar />
                <div className='px-[5vw] py-10'>
                    <button className='flex items-center gap-2 py-2 px-5 mt-5 bg-[#fff] rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]' onClick={() => {navigate("/")}}><FaArrowLeft/>Back</button>
                </div>
                <div className='flex gap-[5vw] px-[5vw]'>
                    <img src={countire.flag} alt="" className='w-[40vw] h-[50vh] object-cover shadow-md' />
                    <div>
                        <h1 className='font-bold text-[20px]'>{countire.name}</h1>
                        <div className='flex justify-between gap-[5vw] pt-3'>
                            {/* left */}
                            <div>
                                <p className='text-[#858585] text-[14px] pt-3 pb-1'><span className='font-bold text-black'>Native Name:</span> {countire.nativeName}</p>
                                <p className='text-[#858585] text-[14px] pb-1'><span className='font-bold text-black'>Population:</span> {countire.population}</p>
                                <p className='text-[#858585] text-[14px] pb-1'><span className='font-bold text-black'>Region:</span> {countire.region}</p>
                                <p className='text-[#858585] text-[14px] pb-1'><span className='font-bold text-black'>Sub Region:</span> {countire.subregion}</p>
                                <p className='text-[#858585] text-[14px] pb-1'><span className='font-bold text-black'>Capital:</span> {countire.capital}</p>
                            </div>

                            {/* right */}
                            <div>
                                <p className='text-[#858585] text-[14px] pt-3 pb-1'><span className='font-bold text-black'>Top Level Domain:</span> {countire.topLevelDomain}</p>
                                <p className='text-[#858585] text-[14px] pb-1'><span className='font-bold text-black'>Currencies:</span> {countire.currencies.map((e) => e.name).join(", ")}</p>
                                <p className='text-[#858585] text-[14px] pb-1'><span className='font-bold text-black'>Languages:</span> {countire.languages.map((e) => e.name).join(", ")}</p>
                            </div>
                        </div>

                        <div className='pt-10'>
                            <p className='text-[#858585] text-[14px] pt-3 pb-1'><span className='font-bold text-black'>Border Countries:</span> 
                                {countire.borders && countire.borders.length > 0 ? countire.borders.map((border, index) => (
                                    <button key={index} className='bg-[#fff] rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] py-1 px-3 m-1'>{border}</button>
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