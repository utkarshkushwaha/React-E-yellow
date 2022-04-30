import React from 'react'
import CustomSearch from './CustomSearch';
import './CustomSearch.css';

export const SearchCustom = () => {
  return (
      <div className="CustomSearch">
          <div className='customsearch__container'>
              <div className='customsearch__wrapper'>
                  <CustomSearch />
              </div>
          </div>
      </div>
  )
}
export default SearchCustom;