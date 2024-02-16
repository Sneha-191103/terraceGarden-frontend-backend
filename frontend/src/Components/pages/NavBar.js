import React from "react";
import {Link} from 'react-router-dom'
import '../styles/NavBar.css';
function NavBar(){
    return(
        <div className="bo">
        
        <div className="nav">
             <Link to="/" style={{textDecoration:"none"}}><div className="g1" style={{paddingLeft: 13, textDecoration: 'none'}}>HOME</div></Link>
             <Link to="/page" style={{textDecoration:"none"}}><div className="g1">PRODUCTS</div></Link>
             <Link to="/cart" style={{textDecoration:"none"}}><div className="g1">CART</div></Link>
             <Link to="/wishlist" style={{textDecoration:"none"}}><div className="g1">WISHLIST</div></Link>
             <Link to="/login" style={{textDecoration:"none"}}><div className="g1">LOGIN/SIGNUP</div></Link>
        </div>
        </div>
      
    )

}
export default NavBar