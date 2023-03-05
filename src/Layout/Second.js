import React from 'react';
import { Outlet } from 'react-router-dom';

const Second = () => {
  return (
    <div>
            <Outlet></Outlet>
    </div>
  );
};

export default Second;