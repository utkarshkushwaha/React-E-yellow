import React from 'react'
import AddBusiness from './addBusiness';
import Footer from './Footer';
import Navbar from './Navbar';
import './addBusiness.css';

export const BusinessAdd = () => {
    return (
        <div className='search'>
            <Navbar />
            <div className='ab_container'>
                < AddBusiness />
            </div>
            <div className='ab_footer'>
                <Footer />
            </div>
        </div>
    )
}

export default BusinessAdd;
