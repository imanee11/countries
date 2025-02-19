import React, { useContext, useState } from 'react';
import { countires } from '../../constants';
import NavBar from '../../layouts/NavBar';

import { IoIosSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../../context/DarkModeContext';


const Home = () => {

    //~dark mode
    const { darkMode, setDarkMode } = useContext(DarkModeContext);
    

    let navigate = useNavigate();

    //* search part
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(countires);

    //* filter part
    const [selectedRegion, setSelectedRegion] = useState('');

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        filterData(value, selectedRegion);
    };

    const handleSelectChange = (event) => {
        const { value } = event.target;
        setSelectedRegion(value);
        filterData(searchTerm, value);
    };

    const filterData = (searchTerm, region) => {
        let filteredData = countires.filter((e) =>
            e.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (region && region !== 'All') {
            filteredData = filteredData.filter((e) => e.region === region);
        }

        setFilteredData(filteredData);
    };

    return (
        <>
            <div className={darkMode ? 'bg-[#202C37]' : 'bg-[#FAFAFA]'} >
                <NavBar />
                <div className='py-10 px-[5vw] flex flex-col gap-[3vh] lg:gap-0 lg:flex-row lg:justify-between lg:items-center'>
                    {/* left */}
                    <div className='relative'>
                        <input
                            value={searchTerm}
                            onChange={handleInputChange}
                            className={`lg:w-[30vw] w-[100%] placeholder:text-[13px] placeholder:font-medium py-3 rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] px-5 pl-10 ${darkMode ? 'bg-[#2B3945] text-white' : 'bg-white text-[#858585]'}`} type="text" placeholder='Search for a country...'
                        />
                        <IoIosSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 font-bold ${darkMode ? 'text-white' : 'text-[#858585]'}`} size={18} />
                    </div>

                    {/* right */}
                    <div>
                        <select
                            value={selectedRegion}
                            onChange={handleSelectChange}
                            className={`border-none placeholder:font-medium py-3 rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] px-5 text-[14px] appearance-none ${darkMode ? 'bg-[#2B3945] text-white' : 'bg-white text-[#858585]'}`}
                        >
                            <option value="" disabled className='text-gray-500'>Filter by Region</option>
                            <option value="All" className={darkMode ? 'text-white' : 'text-black'}>All</option>
                            <option value="Africa" className={darkMode ? 'text-white' : 'text-black'}>Africa</option>
                            <option value="Americas" className={darkMode ? 'text-white' : 'text-black'}>America</option>
                            <option value="Asia" className={darkMode ? 'text-white' : 'text-black'}>Asia</option>
                            <option value="Europe" className={darkMode ? 'text-white' : 'text-black'}>Europe</option>
                            <option value="Oceania" className={darkMode ? 'text-white' : 'text-black'}>Oceania</option>
                        </select>
                    </div>
                </div>

                {/* cards */}
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-[5vw] lg:py-10'>
                        {
                            filteredData.map((e) => (
                                <div key={e.name}>
                                    <div onClick={() => navigate(`/about/${e.name}`)} className={`shadow-md rounded-md lg:h-[55vh] cursor-pointer ${darkMode ? 'bg-[#2B3945]' : 'bg-white'}`}>
                                        <img src={e.flag} alt="" className='w-full h-[170px] object-cover rounded-t-md' />
                                        <div className='p-5'>
                                            <p className={`font-bold ${darkMode ? 'text-white' : 'text-black'} `}>{e.name}</p>
                                            <p className={`text-[14px] pt-3 ${darkMode ? 'text-[#cdcccc]' : 'text-[#858585]'} `}><span className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Population:</span> {e.population}</p>
                                            <p className={`text-[14px] pt-1 ${darkMode ? 'text-[#cdcccc]' : 'text-[#858585]'} `}><span className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Region:</span> {e.region}</p>
                                            <p className={`text-[14px] pt-1 ${darkMode ? 'text-[#cdcccc]' : 'text-[#858585]'} `}><span className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Capital:</span> {e.capital}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    );
};

export default Home;