import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { Products } from '../../data';
import SingleProduct from './SingleProduct';
import './Product.css'
import Filter from '../Filter/Filter';
const Product = () => {
    const [data, setData] = useState({
        products: Products,
        size: '',
        sort: '',
    })
    //all
    const filterSort = (e) => {
        const sort = e.target.value
        setData({
            sort: sort,
            products: data.products.slice().sort((a, b) =>
                sort === "Lowest" ? (a.price > b.price) ? 1 : -1
                    : sort === "Highest" ? (a.price < b.price) ? 1 : -1
                        : (a._id > b._id) ? 1 : -1
            )
        })

    }
    const filterSize = (e) => {
        e.target.value === "" ? setData({ size: "", products: Products }) :

            setData({
                ...data,
                products: Products.filter(pd => pd.availableSizes.indexOf(e.target.value) >= 0),
                size: e.target.value
            })

    }

    return (
        <>

            <Filter filterSize={filterSize} filterSort={filterSort} data={data} />
            <Grid container spacing={3}>
                {
                    data.products.map(product =>
                        <Grid key={product._id} item md={4}>
                            <SingleProduct product={product} />
                        </Grid>
                    )
                }

            </Grid>
        </>
    );
};

export default Product;