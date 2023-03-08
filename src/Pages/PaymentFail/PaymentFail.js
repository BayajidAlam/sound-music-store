import React from 'react';
import { Link } from 'react-router-dom';

const PaymentFail = () => {
  return (
    <div className='text-center h-screen'>
          <h1 className='text-black text-xl font-bold'>Something went wrong!</h1>
          <p className='text-black font-bold mt-2'>Back to <Link className='text-main' to='/'>Home</Link></p>
    </div>
  );
};

export default PaymentFail;