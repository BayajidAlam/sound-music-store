import React from 'react';
import gif from '../../assets/truck-delivery-outline.gif';
import gif2 from '../../assets/gift-outline.gif';
import gif3 from '../../assets/coin-outline.gif';

const CardCollection = () => {
  return (
    <section className='py-12'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='flex items-center py-6 px-8 bg-[#F8F8F8]'>
            <img className='w-28 h-28' src={gif} alt="" />
            <div>
              <p className='font-bold text-black'>FREE SHIPPING</p>
              <p>For all products only NOW</p>
            </div>
          </div>
          <div className='flex items-center bg-[#F8F8F8] py-6 px-8'>
            <img className='w-28 h-28' src={gif2} alt="" />
            <div>
              <p className='font-bold text-black'>SALE! UP TO 50% OFF</p>
              <p>For all orders over $100</p>
            </div>
          </div>
          <div className='flex items-center bg-[#F8F8F8] py-6 px-8'>
            <img className='w-28 h-28' src={gif3} alt="" />
            <div>
              <p className='font-bold text-black'>	MONEY BACK</p>
              <p>Money back</p>
            </div>
          </div>
      </div>
    </section>
  );
};

export default CardCollection;