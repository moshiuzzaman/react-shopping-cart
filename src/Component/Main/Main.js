import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Product from '../Product/Product';

import { Products } from '../../data';
import Cart from '../Cart/Cart';
import { Box } from '@material-ui/core';


export default function Main() {
  const [data, setData] = useState({
    products: Products,
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    size: '',
    sort: '',
  })
  const AddToCart = (product) => {
    const cartItems = data.cartItems.slice();
    let alradyAdded = false;
    cartItems.map(pd => {
      if (pd._id === product._id) {
        pd.count++;
        alradyAdded = true;
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems))
      return setData({ ...data, cartItems })
    })
    if (!alradyAdded) {
      cartItems.push({ ...product, count: 1 })
      localStorage.setItem("cartItems", JSON.stringify(cartItems))
      setData({ ...data, cartItems })
    }
  }
  const removeFromCart = (id) => {
    const newCart = data.cartItems.filter(ci => ci._id !== id)
    setData({ ...data, cartItems: newCart })
    localStorage.setItem("cartItems", JSON.stringify(newCart))
  } 
   
  return (
    <Box m={3}>
      <Grid container spacing={3}>
        <Grid item md={9}>

          <Product AddToCart={AddToCart} data={data} setData={setData} />
        </Grid>
        <Grid item md={3}>
          <Cart removeFromCart={removeFromCart} setData={setData} data={data} />
        </Grid>
      </Grid>
    </Box>

  );
}
