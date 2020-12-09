import { Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import ProductModel from './ProductModel';

const SingleProduct = ({ product, AddToCart }) => {
    const { image, title, price, _id } = product;
    const [open, setOpen] =useState(false)
    return (
        <Card className="product">
            <CardActionArea>
                <a href={"#" + _id} onClick={() =>setOpen(!open)}>
                    <img src={image} alt={title} />
                </a>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <a href={"#" + _id} onClick={() =>setOpen(!open)}>
                            {title}
                        </a>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Grid container spacing={3}>
                    <Grid item md={5}>
                        <p className="product_price">
                            {`$` + price}
                        </p>
                    </Grid>
                    <Grid item md={7}>
                        <Button onClick={() => AddToCart(product)} className="button_style">
                            Add to cart
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
            <ProductModel AddToCart={AddToCart} product={product}  open={open} setOpen={setOpen}/>
        </Card>
    );
};

export default SingleProduct;