import React, { useEffect, useState } from 'react'
import Product from '../componets/Product';
import data from '../data';
import axios from 'axios';
import LoadingBox from '../componets/LoadingBox'
import MessageBox from '../componets/MessageBox'
export default function HomeScreen() {
  const[products,setProducts]=useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  useEffect(()=>{
   const fetchData= async ()=>{
    try{

    
    setLoading(true)
    const {data} =await axios.get('/api/products');
    setLoading(false);
     setProducts(data);
    }catch(err){
      setError(err.message);
      setLoading(false);
    }

   };
fetchData();
  },[])
  return (
    <div>
      {loading?(<LoadingBox></LoadingBox>):error?(<MessageBox variant='danger'>{error}</MessageBox>):<div>
          <div className="row center">
            {data.products.map((product) => (
          <Product key={product._id}  product={product}/>
            ))}
          </div>
        </div>}
        

    </div>
  )
}
