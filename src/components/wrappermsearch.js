import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import CustommSearch from './CustommSearch';
import './Search.css';
import data from './mData.json';

export const wrappermsearch = () => {
    return (
        <div className='search'>
            <Navbar />
            <div className='search_container'>
                < CustommSearch Data={data}/>
            </div>
            <div className='search_footer'>
                <Footer />
            </div>
        </div>
    )
}

export default wrappermsearch;
