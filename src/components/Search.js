import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import CustomSearch from './CustomSearch';
import './Search.css';

export const Search = () => {
  return (
      <div className='searchpage'>
        <Navbar />
        <div className='searchpage_container'>
            < CustomSearch />
        </div>
        <div className='home_footer'>
          <Footer />
        </div>
      </div>
  )
}

export default Search;
