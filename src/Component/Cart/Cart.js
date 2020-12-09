import { Box, Button, Grid, Modal } from '@material-ui/core';
import React, { useState } from 'react';
import './Cart.css'
import CheckIcon from '@material-ui/icons/Check';
import { useForm } from 'react-hook-form';
import Fade from 'react-reveal/Fade';

const Cart = ({ data, removeFromCart, setData }) => {
    const cartItems = data.cartItems
    const [checkOutBox, setCheckOutBox] = useState(false)
    const orderProcced = () => {
        setCheckOutBox(!checkOutBox);
        console.log('object')
    }
    const [open, setOpen] =useState(false)
    const { register, handleSubmit } = useForm();
    const onSubmit = d => {
        setOpen(!open)
        setData({ ...data, cartItems: [] })
        console.log(d)
        
        localStorage.setItem("cartItems", [])
    }

    

    return (
        <div>
            {
                data.cartItems.length === 0 ? <p className="cart_headding">Cart is empty</p> :
                    <p className="cart_headding">Total number of items {cartItems.length}</p>
            }
            <div className="cart_items">
                {
                    cartItems.map(ci => <Box border={1} borderColor="grey.400" key={ci._id} m={1} p={1}>
                        <Fade left>
                            <Grid container >
                                <Grid item md={2}>
                                    <img src={ci.image} alt="" className="cart_item_img" />
                                </Grid>
                                <Grid item md={10}>
                                    <div className="cart_details">
                                        <h5 className="cart_title">{ci.title}</h5>
                                        <Grid container className="cart_price_button">
                                            <Grid item md={7}>
                                                <p className="cart_price">${ci.price} X {ci.count}</p>
                                            </Grid>

                                            <Grid item md={5}>
                                                <Button onClick={() => removeFromCart(ci._id)} variant="contained" color="secondary"> Remove</Button>
                                            </Grid>

                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                        </Fade>
                    </Box>)
                }
            </div>
            {
                cartItems.length !== 0 && <Box mt={4} m={1}>
                    {
                        checkOutBox && <Box m={2}>
                            <Fade top collapse>
                                <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
                                    <input type="text" placeholder="Email" name="Email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
                                    <input type="text" placeholder="Name" name="Name" ref={register({ required: true, min: 2 })} />
                                    <input type="text" placeholder="Address" name="Address" ref={register({ required: true })} />
                                    <Grid container>
                                        <Grid item md={7}>
                                            <h3 className="total_price">Total $ {(cartItems.reduce((a, c) => a + c.price * c.count, 0)).toFixed(2)}</h3>
                                        </Grid>

                                        <Grid item md={5}>
                                            <Button
                                                type="submit"
                                                className="button_style"
                                                endIcon={<CheckIcon />}
                                            >
                                                CheckOut
                                        </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Fade>

                        </Box>
                    }
                    {
                        !checkOutBox && <Grid container>
                            <Grid item md={7}>
                                <h3 className="total_price">Total $ {(cartItems.reduce((a, c) => a + c.price * c.count, 0)).toFixed(2)}</h3>
                            </Grid>

                            <Grid item md={5}>
                                <Button
                                    onClick={() => orderProcced()}
                                    className="button_style"
                                    endIcon={<CheckIcon />}
                                >
                                    Procced
                        </Button>
                            </Grid>
                        </Grid>
                    }

                </Box>
            }
            <button  onClick={()=>setOpen(!open)}>sakdfhifh</button>
            <Modal className="model"
                open={open}
                onClose={()=>setOpen(!open)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className="model_div">
                    alj 
                </div>
            </Modal>

        </div>
    );
};

export default Cart;