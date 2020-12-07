import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Product from '../Product/Product';

import { Products } from '../../data';
import Cart from '../Cart/Cart';
import { Box } from '@material-ui/core';


export default function Main() {
  const [data, setData] = useState({
    products: Products,
    cartItems: [],
    size: '',
    sort: '',
  })
  const AddToCart=(product)=>{
    const cartItems =data.cartItems.slice();
    let alradyAdded=false;
    cartItems.map(pd=>{
      if(pd._id===product._id){
        pd.count++;
        alradyAdded=true;
      }
      return setData({...data, cartItems})
    })
    if(!alradyAdded){
      cartItems.push({...product, count:1})
    setData({...data, cartItems})
    }  
}
const removeFromCart=(id)=>{
 const newCart= data.cartItems.filter(ci=>ci._id!==id)
 setData({...data, cartItems:newCart})
}
  return (
    <Box m={3}>
      <Grid container spacing={3}>
        <Grid item md={8}>

          <Product AddToCart={AddToCart} data={data} setData={setData} />
        </Grid>
        <Grid item md={4}>
          <Cart removeFromCart={removeFromCart} data={data} />
        </Grid>
      </Grid>
    </Box>

  );
}
