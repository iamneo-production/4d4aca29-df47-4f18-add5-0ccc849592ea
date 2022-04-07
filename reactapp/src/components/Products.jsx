import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product';

const products=[
    {id:1,name:'Drum',price:'$20',image:'https://www.teahub.io/photos/full/262-2626326_country-music-wallpaper-1500x1068-background-images-for-music.jpg'},
    {id:2,name:'Drum',price:'$20',image:'https://www.teahub.io/photos/full/262-2626326_country-music-wallpaper-1500x1068-background-images-for-music.jpg'},
    {id:3,name:'Drum',price:'$20',image:'https://www.teahub.io/photos/full/262-2626326_country-music-wallpaper-1500x1068-background-images-for-music.jpg'},
    {id:4,name:'Drum',price:'$20',image:'https://www.teahub.io/photos/full/262-2626326_country-music-wallpaper-1500x1068-background-images-for-music.jpg'},
    {id:5,name:'Drum',price:'$20',image:'https://www.teahub.io/photos/full/262-2626326_country-music-wallpaper-1500x1068-background-images-for-music.jpg'},
    {id:6,name:'Drum',price:'$20',image:'https://www.teahub.io/photos/full/262-2626326_country-music-wallpaper-1500x1068-background-images-for-music.jpg'},
    {id:7,name:'Drum',price:'$20',image:'https://www.teahub.io/photos/full/262-2626326_country-music-wallpaper-1500x1068-background-images-for-music.jpg'},
    {id:8,name:'Drum',price:'$20',image:'https://www.teahub.io/photos/full/262-2626326_country-music-wallpaper-1500x1068-background-images-for-music.jpg'},
    {id:9,name:'Drum',price:'$20',image:'https://www.teahub.io/photos/full/262-2626326_country-music-wallpaper-1500x1068-background-images-for-music.jpg'},
    {id:10,name:'Drum',price:'$20',image:'https://www.teahub.io/photos/full/262-2626326_country-music-wallpaper-1500x1068-background-images-for-music.jpg'},
    {id:11,name:'Drum',price:'$20',image:'https://www.teahub.io/photos/full/262-2626326_country-music-wallpaper-1500x1068-background-images-for-music.jpg'},
    {id:12,name:'Drum',price:'$20',image:'https://www.teahub.io/photos/full/262-2626326_country-music-wallpaper-1500x1068-background-images-for-music.jpg'},
    {id:13,name:'Drum',price:'$20',image:'https://www.teahub.io/photos/full/262-2626326_country-music-wallpaper-1500x1068-background-images-for-music.jpg'},
    {id:14,name:'Drum',price:'$20',image:'https://www.teahub.io/photos/full/262-2626326_country-music-wallpaper-1500x1068-background-images-for-music.jpg'},
    {id:15,name:'Drum',price:'$20',image:'https://www.teahub.io/photos/full/262-2626326_country-music-wallpaper-1500x1068-background-images-for-music.jpg'},
    {id:16,name:'Drum',price:'$20',image:'https://www.teahub.io/photos/full/262-2626326_country-music-wallpaper-1500x1068-background-images-for-music.jpg'},
    {id:17,name:'Drum',price:'$20',image:'https://www.teahub.io/photos/full/262-2626326_country-music-wallpaper-1500x1068-background-images-for-music.jpg'},
    {id:18,name:'Drum',price:'$20',image:'https://www.teahub.io/photos/full/262-2626326_country-music-wallpaper-1500x1068-background-images-for-music.jpg'},
    {id:19,name:'Drum',price:'$20',image:'https://www.teahub.io/photos/full/262-2626326_country-music-wallpaper-1500x1068-background-images-for-music.jpg'},
    {id:20,name:'Drum',price:'$20',image:'https://www.teahub.io/photos/full/262-2626326_country-music-wallpaper-1500x1068-background-images-for-music.jpg'}
]

function displayModel(productsId)
{
    return(
        <div>
            console.log(productsId);
        </div>
    );
}

const Products = () => {
    return(
        <main>
            <Grid container spacing={2}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={4} sm={3} md={2} lg={2}>
                        <Product product={product} displayModel={displayModel}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;