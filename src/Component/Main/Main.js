import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from '../Product/Product';

import Cart from '../Cart/Cart';
import { Box } from '@material-ui/core';


export default function Main() {

  return (
    <Box m={3}>
      <Grid container spacing={3}>
        <Grid item md={8}>
          
          <Product />
        </Grid>
        <Grid item md={4}>
          <Cart />
        </Grid>
      </Grid>
    </Box>

  );
}
