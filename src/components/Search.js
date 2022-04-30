import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import CustomSearch from './CustomSearch';
import './Search.css';

export const Search = () => {
  return (
      <div className='search'>
        <Navbar />
        <div className='search_container'>
            < CustomSearch />
        </div>
        <Footer />
      </div>
  )
}

export default Search;
