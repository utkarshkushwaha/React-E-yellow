import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Featured Buisnesses</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img1.jpg'
              text='Car Ac Repairs, Spare Parts & Accessories, Battery Dealers'
              label='Mechanic'
              path='/mechanic'
            />
            <CardItem
              src='images/img2.jpg'
              text='Enjoy fresh & delicious Vegetables. Order Online!'
              label='Vegetable Vendor'
              path='/vegetable_vendor'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img3.jpg'
              text=' Plumbing, Sanitaryware & Bathroom Acc, '
              label='Plumber'
              path='/plumber'
            />
            <CardItem
              src='images/img4.jpg'
              text='Electrical Suppliers, Electrical Contractors & Electronics Repair'
              label='Electrician'
              path='/electrician'
            />
            <CardItem
              src='images/img5.jpg'
              text='Food & Beverages, Food Stores, Groceries'
              label='Kirana Store'
              path='/kirana-store'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
