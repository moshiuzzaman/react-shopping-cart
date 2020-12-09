import { Grid } from '@material-ui/core';
import React from 'react';
import { Products } from '../../data';
import SingleProduct from './SingleProduct';
import './Product.css'
import Fade from 'react-reveal/Fade';
import Filter from '../Filter/Filter';
const Product = ({data, setData, AddToCart}) => {
    
    
    //all
    const filterSort = (e) => {
        const sort = e.target.value
        setData({
            ...data,
            sort: sort,
            products: data.products.slice().sort((a, b) =>
                sort === "Lowest" ? (a.price > b.price) ? 1 : -1
                    : sort === "Highest" ? (a.price < b.price) ? 1 : -1
                        : (a._id > b._id) ? 1 : -1
            )
        })

    }
    const filterSize = (e) => {
        e.target.value === "" ? setData({...data, size: "", products: Products }) :

            setData({
                ...data,
                products: Products.filter(pd => pd.availableSizes.indexOf(e.target.value) >= 0),
                size: e.target.value
            })

    }

    return (
        <>

            <Filter filterSize={filterSize} filterSort={filterSort} data={data} />
            <Fade up>
                <Grid container spacing={3}>
                {
                    data.products.map(product =>
                        <Grid key={product._id} item md={4}>
                            <SingleProduct AddToCart={AddToCart} product={product} />
                        </Grid>
                    )
                }

            </Grid>
            </Fade>
            
        </>
    );
};

export default Product;