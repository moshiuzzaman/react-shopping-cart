import { Grid } from '@material-ui/core';
import React from 'react';
import './Filter.css'

const Filter = ({ data, filterSize, filterSort }) => {
  console.log()
  return (
    <Grid className="product-filter" container spacing={3}>
      <Grid item md={4}>
        <p className="total_products" m={0}>Total Project {data.products.length}</p>
      </Grid>
      <Grid item md={4}>
        Order
          <select value={data.sort} onChange={filterSort} name="" id="">
          <option value="Latest">Latest</option>
          <option value="Lowest">Lowest</option>
          <option value="Highest">Highest</option>
        </select>
      </Grid>
      <Grid item md={4}>
        Size
          <select value={data.size} onChange={filterSize} name="" id="">
          <option value="">All</option>
          <option value="XXL">XXL</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </Grid>

    </Grid>
  );
};

export default Filter;