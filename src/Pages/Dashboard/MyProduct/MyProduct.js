import React, { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../context/AuthProvider';

const MyProduct = () => {

  const { user } = useContext(AuthContext);
  // console.log(user?.email);
  // const {data:products = []} = useQuery({
  //   queryKey:['myProduct', user?.email],
  //   queryFn: async ()=>{
  //     const res = await fetch(`http://localhost:5000/myProduct/${user?.email}`)
  //     const data = res.json()
  //     return data;
  //   }
  // })

  // useEffect(()=>{
  //   fetch(`http://localhost:5000/myProduct/${user?.email}`)
  //   .then(res=>res.json())
  //   .then(data=>{
  //     console.log(data);
  //   })
  // },[user?.email])


  
  return (
    <div>
          
    </div>
  );
};

export default MyProduct;