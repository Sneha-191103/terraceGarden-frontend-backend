import React from 'react'
import '../styles/page.css'
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { getcart} from '../../Services/LoginService';
import { useState, useEffect } from 'react'
import NavBar from './NavBar';

export default function Cart() {
  const [items, setItems]=useState([]);
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
       
      </label>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getcart() ;
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <>
    <div className='nam'>
    <NavBar/>
    </div>
    
   
      <div className='main'>

        <div className='container'>
        {items.map((items) => (
          
           <div className="card" key={items.id}>
           <center>
           <div value={items.image}><img src={items.image} width="250px" height="250px" className="imag"></img></div>
            <div value={items.description}><h4>{items.description} </h4></div>
           <div value={items.rate}><h3>Price : ₹{items.rate}</h3></div>
            <div value={items.quantity}>Quantity {items.quantity}</div>
            <br></br>
      </center>
      </div>
        ))}
      </div>

      </div>
 </>
  )
}
