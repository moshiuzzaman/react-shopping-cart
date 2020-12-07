import { Box, Button, Grid } from '@material-ui/core';
import React from 'react';
import './Cart.css'
import CheckIcon from '@material-ui/icons/Check';

const Cart = ({ data, removeFromCart }) => {
    const cartItems = data.cartItems
    return (
        <div>
            {
                data.cartItems.length === 0 ? <p className="cart_headding">Cart is empty</p> :
                    <p className="cart_headding">Total number of items {cartItems.length}</p>
            }
            <div className="cart_items">
                {
                    cartItems.map(ci => <Box border={1} key={ci._id} m={1} p={1}>
                        <Grid container >
                            <Grid item md={2}>
                                <img src={ci.image} alt="" className="cart_item_img" />
                            </Grid>
                            <Grid item md={10}>
                                <div className="cart_details">
                                    <h5 className="cart_title">{ci.title}</h5>
                                    <Grid container className="cart_price_button">
                                        <Grid item md={4}>
                                            <p className="cart_price">${ci.price} X {ci.count}</p>
                                        </Grid>
                                        <Grid item md={4}></Grid>
                                        <Grid item md={4}>
                                            <Button onClick={() =>removeFromCart(ci._id)} variant="contained" color="secondary"> Remove</Button>
                                        </Grid>

                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>)
                }
            </div>
            {
                cartItems.length !== 0 && <Box mt={4} m={1}>
                    <Grid container>
                        <Grid item md={8}>
                           <h2 className="total_price">Total $ {(cartItems.reduce((a, c) => a + c.price * c.count, 0)).toFixed(2)}</h2> 
                        </Grid>
                        
                        <Grid item md={4}>
                            <Button
                                className="button_style"
                                endIcon={<CheckIcon />}
                            >
                                Procced
                        </Button>
                        </Grid>
                    </Grid>
                </Box>
            }
        </div>
    );
};

export default Cart;