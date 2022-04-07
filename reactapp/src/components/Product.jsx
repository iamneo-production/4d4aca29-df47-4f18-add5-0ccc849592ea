import React from 'react';
import {Card,CardMedia,CardContent,Typography} from '@material-ui/core';
import useStyles from './styles';

const Product = ({ product , displayModel }) => {
    const classes = useStyles();

    return(
        <Card className={classes.root} onClick={() => displayModel(product.id)}>
            <CardMedia className={ classes.media } image={ product.image }/>
            <CardContent className={classes.backGround}>
                <div className={classes.cardContent}>
                    <Typography variant="h6">
                        { product.name }
                    </Typography>
                    <Typography variant="h6">
                        { product.price }
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default Product;
