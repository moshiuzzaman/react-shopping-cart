import { Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';

const SingleProduct = ({ product }) => {
    const { image, title, description, availableSizes, price, _id } = product;
    return (
        <Card className="product">
            <CardActionArea>
                <a href={"#" + _id}>
                    <img src={image} alt={title} />
                </a>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <a href={"#" + _id}>
                            {title}
                        </a>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Grid container spacing={3}>
                    <Grid item md={6}>
                        {`$` + price}
                    </Grid>
                    <Grid item md={6}>
                        <Button variant="contained" color="primary">
                            Primary
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
};

export default SingleProduct;