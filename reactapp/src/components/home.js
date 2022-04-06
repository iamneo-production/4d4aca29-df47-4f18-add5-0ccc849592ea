import React from 'react';
import './home.css';
import Products from './Products';
import useStyles from './styles';


export default function Home() {
  const classes = useStyles();
  return (
    <div>
       <div className="Home"> 
         <h1>WELCOME HOME</h1> 
       </div>
        <div className={ classes.style }><Products/></div>
    </div>
  )
}
