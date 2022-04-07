import React from 'react';
import * as ReactBootStrap from "react-bootstrap"; 
//import './index.css';
import '../index.css';

const Order=() =>{
    const Dashboard =[
        {ProductName:"Drums",Price:"  100",Quanity:"  1",TotalPrice:" 100"},
        {ProductName:"Piano",Price:"  1800",Quanity:" 1",TotalPrice:"  1800"},
        {ProductName:"Harmonica",Price:"  1375",Quanity:" 4",TotalPrice:"  5500"},
        {ProductName:"Bongos",Price:" 1000",Quanity:" 2",TotalPrice:"  2000"},
        {ProductName:"Guitar",Price:" 1000",Quanity:" 3",TotalPrice:"  3000"},
      
    ]
    const renderView = (Dashboard,index)=>{
      return (
         
        <tr className="header " key={index} style={{textAlign:"center"}}>
            
          <td>{ Dashboard.ProductName}</td>
          <td>{Dashboard.Price}</td>
          <td>{Dashboard.Quanity}</td>
          <td >{Dashboard.TotalPrice  }</td>
        </tr>
      )
    }
    return (
        <div className="container element mt-5">
          <br/> 
        
       <ReactBootStrap.Table className='mt-5'>
         
      <thead className="class" >
        <tr className="header2 " style={{textAlign:"center"}} >
          
          <th >ProductName</th>     
          <th >Price  </th>
          <th >Quanity</th>
          <th >TotalPrice</th>
        </tr>
      </thead>
      <tbody>
       {Dashboard.map(renderView)}
      </tbody>
    </ReactBootStrap.Table>
 
    
        </div>
      );
    }
    
export default Order;