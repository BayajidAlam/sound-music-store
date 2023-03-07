import React from 'react';
// images 
import featureImg1 from '../../assets/fe1.webp';
import featureImg2 from '../../assets/fe2.webp';
import featureImg3 from '../../assets/fe3.webp';
import featureImg4 from '../../assets/fe4.webp';

import { AiFillStar } from 'react-icons/ai';

const BestSelles = () => {
  return (
    <section className='pb-16'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-6'>
    <div>
        <img className='w-80 h-[400px] m-auto' src={featureImg1} alt="" />
        <div className='w-80 mx-auto'>
          <p className='font-bold'>Tama S.L.P. Big Black Steel Snare Drum</p>
          <div className='flex justify-between'>
                <div className='flex items-center w-20 justify-evenly text-yellow-500'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                </div>
                <p className='text-main font-bold'>$249.99</p>
          </div>
        </div>
      </div>

    <div>
        <img className='w-80 h-[400px] mx-auto'  src={featureImg2} alt="" />
        <div className='w-80 mx-auto'>
          <p  className='font-bold'>Tama S.L.P. Big Black Steel Snare Drum</p>
          <div className='flex justify-between'>
                <div className='flex items-center w-20 justify-evenly text-yellow-500'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                </div>
                <p className='text-main font-bold'>$249.99</p>
          </div>
        </div>
      </div>

    <div>
        <img className='w-80 h-[400px] mx-auto'  src={featureImg3} alt="" />
        <div className='w-80 mx-auto'>
          <p  className='font-bold'>Tama S.L.P. Big Black Steel Snare Drum</p>
          <div className='flex justify-between'>
                <div className='flex items-center w-20 justify-evenly text-yellow-500'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                </div>
                <p className='text-main font-bold'>$249.99</p>
          </div>
        </div>
      </div>

    <div>
        <img className='w-80 h-[400px] mx-auto'  src={featureImg4} alt="" />
        <div className='w-80 mx-auto'>
          <p  className='font-bold'>Tama S.L.P. Big Black Steel Snare Drum</p>
          <div className='flex justify-between'>
                <div className='flex items-center w-20 justify-evenly text-yellow-500'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                </div>
                <p className='text-main font-bold'>$249.99</p>
          </div>
        </div>
      </div>

    </div>
    </section>
  );
};

export default BestSelles;