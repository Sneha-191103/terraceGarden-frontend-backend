import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getAllItems, getfilter } from '../../Services/LoginService';
import '../styles/page.css'
import NavBar from './NavBar';
function Filter () {
  const { category } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const getAllItems = async () => {
      try {
        const response = await getfilter(category) ;
        setItem(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getAllItems();
  }, [category]);

  return (
    <>
<div><NavBar/></div>
      <div className='main'>
        <div className='container'>
          {item.map((items) => (
            <div className="card" key={items.id}>
            <center>
            
            <div name="iamge" value={items.image}><img src={items.image} width="250px" height="250px" className="imag"></img></div>
             <div name="description" value={items.description}> <h1 className='z'>{items.description}</h1> </div>
            <div name="rate" value={items.rate}><h3>Price : ₹{items.rate}</h3></div>
             <div name="quantity" value={items.quantity}>Quantity {items.quantity}</div>
             <br></br>
             <Link to={`/view/${items.id}`}><div><button class="cta">
   <span>View</span>
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
  );
};

export default Filter;