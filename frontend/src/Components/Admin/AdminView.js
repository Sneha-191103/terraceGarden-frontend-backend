import React from 'react'
import { getAllItems,deleteItems, UpdateItem } from '../../Services/LoginService';
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/page.css'
import {  useParams} from 'react-router-dom';
import AdminNav from './AdminNav';
export default function AdminView() {
  
  const navigate = useNavigate();
  const [items, setItems]=useState([]);
  const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
       
      </label>
    );
  };

  useEffect(() => {
    getAllItems().then((res) => {
      setItems(res.data);
    });
  }, []);
 
  
  return (
    <>
    <div className='nam'>
    <AdminNav/>
    </div>
    <br></br>
    
   
      <div className='main'>

        <div className='container'>
        {items.map((items) => (
          
           <div className="card" key={items.id}>
           <center>
           
           <div name="iamge" value={items.image}><img src={items.image} width="250px" height="250px" className="imag"></img></div>
            <div name="description" value={items.description}> <h1 className='z'>{items.description}</h1> </div>
           <div name="rate" value={items.rate}><h3>Price : ₹{items.rate}</h3></div>
            <div name="quantity" value={items.quantity}>Quantity {items.quantity}</div>
            <br></br>
            <Link to={`/edit/${items.id}`}><div><button class="cta">
  <span>Edit</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button></div></Link>
                       
        
              
            
            
      </center>
      
    
        
      </div>
     
   
          
          
        ))}
        
        </div>
       
      </div>
     
     
    </>
  )
}
