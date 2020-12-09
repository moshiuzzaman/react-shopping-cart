import { Box, Button, Grid, Modal } from '@material-ui/core';
import React from 'react';

const ProductModel = ({ open, setOpen, AddToCart, product }) => {
    const { image, title, availableSizes, description, price, _id } = product;
    const buttonClickHandeler=()=>{
        AddToCart(product)
        setOpen(!open)
    }
    return (
        <Modal className="model"
            open={open}
            onClose={() => setOpen(!open)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className="model_div">
                <Box m={3}>
                    <Grid container spacing={3}>
                        <Grid item md={5}>
                            <img className="product_model_image" src={image} alt="" />
                        </Grid>
                        <Grid item md={7}>
                            <h1>{title}</h1>
                            <p>{description}</p>
                            {
                                availableSizes.map((as, index) => <li key={index}>{as}</li>)
                            }
                            <Grid container spacing={3}>
                                <Grid item md={5}>
                                    <p className="product_price">
                                        {`$` + price}
                                    </p>
                                </Grid>
                                <Grid item md={7}>
                                    <span></span>
                                    <Button onClick={buttonClickHandeler} className="button_style">
                                        Add to cart
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </Modal>
    );
};

export default ProductModel;