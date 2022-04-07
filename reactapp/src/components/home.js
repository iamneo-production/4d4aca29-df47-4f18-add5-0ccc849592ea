import React from "react";
import { Table } from "react-bootstrap";
import {Link} from "react-router-dom";
import H from'../img/home.png';
import E from'../img/edit_img.png';
import D from'../img/delete_img.png';
import G from "../img/guitar.png"
import A from "../img/a_p.png"
import Edit from "./edit";
import { Box } from "@material-ui/core";
import {MdOutlineAddShoppingCart} from "react-icons/md";
function home(){
  return (<div class="container" style={{overflowX:"hidden"}}>
      <div class="row">
          <div class="col-sm-8">
                  <Table class="responsive" style={{textAlign:"center"}}>
        <thead>
            <tr>
                <th>Image</th>
                <th>Instrument Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
            </tr>
        </thead>
        <tr>
            <td><img src={G}/></td>
            <td>Product Name</td>
            <td>599</td>
            <td>1</td>
            <td>
            <Link to="/edit"><img src={E} width="30px" style={{margin:"0px 10px 0px 0px"}}></img></Link>
            </td>
            <td>
            <Link  to="/edit"><img src={D} width="30px" style={{margin:"0px 10px 0px 0px"}}></img></Link>
            </td>
        </tr>
        <tr>
            <td><img src={G}/></td>
            <td>Product Name</td>
            <td>599</td>
            <td>1</td>
            <td>
            <Link to="/edit"><img src={E} width="30px" style={{margin:"0px 10px 0px 0px"}}></img></Link>
            </td>
            <td>
            <Link to="/edit"><img src={D} width="30px" style={{margin:"0px 10px 0px 0px"}}></img></Link>
            </td>
        </tr>
        <tr>
            <td><img src={G}/></td>
            <td>Product Name</td>
            <td>599</td>
            <td>1</td>
            <td>
            <Link to="/edit"><img src={E} width="30px" style={{margin:"0px 10px 0px 0px"}}></img></Link>
            </td>
            <td>
            <Link to="/edit"><img src={D} width="30px" style={{margin:"0px 10px 0px 0px"}}></img></Link>
            </td>
        </tr>
        <tr>
            <td><img src={G}/></td>
            <td>Product Name</td>
            <td>599</td>
            <td>1</td>
            <td>
            <Link to="/edit"><img src={E} width="30px" style={{margin:"0px 10px 0px 0px"}}></img></Link>
            </td>
            <td>
            <Link to="/edit"><img src={D} width="30px" style={{margin:"0px 10px 0px 0px"}}></img></Link>
            </td>
        </tr>
        <tr>
            <td><img src={G}/></td>
            <td>Product Name</td>
            <td>599</td>
            <td>1</td>
            <td>
            <Link to="/edit"><img src={E} width="30px" style={{margin:"0px 10px 0px 0px"}}></img></Link>
            </td>
            <td>
            <Link to="/edit"><img src={D} width="30px" style={{margin:"0px 10px 0px 0px"}}></img></Link>
            </td>
        </tr>
    </Table>
    </div>
    <div class="col-sm-4">
        <img src={H} width="400px"></img><br/>
            <Link to="/order" style={{ textDecoration: 'none' }}><Box color="#fffffa" bgcolor="orange" p={1} width="200px" borderRadius={10}><div style={{textAlign:"center"}}> <MdOutlineAddShoppingCart size={30}/> &nbsp;ADD A PRODUCT</div></Box></Link>  
    </div>
  </div>
  </div>)
}
export default home