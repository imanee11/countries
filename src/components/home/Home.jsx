import React, { useState } from 'react';
import { countires } from '../../constants';
import NavBar from '../../layouts/NavBar';

import { IoIosSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const Home = () => {

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
            <div className='bg-[#FAFAFA]' >
                <NavBar />
                <div className='py-10 px-[5vw] flex justify-between items-center'>
                    {/* left */}
                    <div className='relative text-[#858585]'>
                        <input
                            value={searchTerm}
                            onChange={handleInputChange}
                            className='w-[30vw] bg-white placeholder:text-[13px] placeholder:font-medium py-3 rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] px-5 pl-10' type="text" placeholder='Search for a country...'
                        />

                        <IoIosSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 font-bold' size={18} />
                    </div>

                    {/* right */}
                    <div>
                        <select
                            value={selectedRegion}
                            onChange={handleSelectChange}
                            className='border-none bg-white placeholder:text-[13px] placeholder:font-medium py-3 rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] px-5 text-[14px] appearance-none'
                        >
                            <option value="" disabled className='text-gray-500'>Filter by Region</option>
                            <option value="All" className='text-gray-500'>All</option>
                            <option value="Africa" className='text-black'>Africa</option>
                            <option value="America" className='text-black'>America</option>
                            <option value="Asia" className='text-black'>Asia</option>
                            <option value="Europe" className='text-black'>Europe</option>
                            <option value="Oceania" className='text-black'>Oceania</option>
                        </select>
                    </div>
                </div>

                {/* cards */}
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-[5vw] py-10'>
                        {
                            filteredData.map((e) => (
                                <div key={e.name}>
                                    <div onClick={() => navigate(`/about/${e.name}`)} className='bg-white shadow-md rounded-md h-[55vh] cursor-pointer'>
                                        <img src={e.flag} alt="" className='w-full h-[170px] object-cover rounded-t-md' />
                                        <div className='p-5'>
                                            <p className='font-bold'>{e.name}</p>
                                            <p className='text-[#858585] text-[14px] pt-3'><span className='font-bold text-black'>Population:</span> {e.population}</p>
                                            <p className='text-[#858585] text-[14px]'><span className='font-bold  text-black'>Region:</span> {e.region}</p>
                                            <p className='text-[#858585] text-[14px]'><span className='font-bold text-black'>Capital:</span> {e.capital}</p>
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