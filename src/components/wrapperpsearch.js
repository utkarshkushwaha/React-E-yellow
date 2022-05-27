import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import CustommSearch from './CustommSearch';
import './WrapperSearch.css';
import data from './pData.json';

export const wrapperpsearch = () => {
    return (
        <div className='search'>
            <Navbar />
            <div className='search_container'>
                < CustommSearch Data={data} />
            </div>
            <div className='search_footer'>
                <Footer />
            </div>
        </div>
    )
}

export default wrapperpsearch;
