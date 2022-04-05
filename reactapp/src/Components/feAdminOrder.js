import * as ReactBootStrap from "react-bootstrap";
import './index.css';

const View=() =>{
    const view =[
      {orderid:"OD121211750283829010",userid:"K.Sabari",productname:"Drums",price:"100",quanity:"1"},
      {orderid:"OD121982198205115000",userid:"NaveenPrabhu",productname:"Harmonica",price:"1800",quanity:"1"},
      {orderid:"OD121211123455115000",userid:"Dinseh",productname:"Flutes",price:"2000",quanity:"1"},
      {orderid:"OD121234550705115000",userid:"Gokul",productname:"Bongos",price:"2500",quanity:"1"},
      {orderid:"OD121211709828235000",userid:"Meghana",productname:"Piano",price:"3500",quanity:"1"},
      {orderid:"OD121211372837315000",userid:"Karthik",productname:"Guitar",price:"5500",quanity:"1"},
      {orderid:"OD121211234563121000",userid:"Kiruthik",productname:"Instrument Microphone",price:"1500",quanity:"1"},
      
    ]
    const renderView = (view,index)=>{
      return (
        <tr className="header " style={{textAlign:"center"}} key={index}>
          <td>{ view.orderid}</td>
          <td>{view.userid}</td>
          <td>{view.productname}</td>
          <td>{view.price}</td>
          <td>{view.quanity}</td>
        </tr>
      )
    }
    
    return (
      <div className="container g1 mt-5">
    <br/>
     <ReactBootStrap.Table className='mt-5'>
       
    <thead className="class">
      <tr className="header2 " style={{textAlign:"center"}}  >
        
        <th>orderid</th>     
        <th>userid</th>
        <th>productname</th>
        <th>price</th>
        <th>quanity</th>
      </tr>
    </thead>
    <tbody>
     {view.map(renderView)}
    </tbody>
  </ReactBootStrap.Table>
  
      </div>
       
    );
  }
  
  export default View;
  