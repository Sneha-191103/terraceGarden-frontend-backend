import React from 'react'
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { getAllItems,deleteItems, UpdateItem } from '../../Services/LoginService';
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/page.css'
import {  useParams} from 'react-router-dom';
import AdminNav from './AdminNav';
export default function Delete() {
  
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
 
  const handleDeleteItems = (id,description) => {
    deleteItems(id).then(() => {
        getAllItems();
        toast.success(`${description} Deleted !`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        setTimeout(() => {
          window.location.reload(true)
          navigate("/delete");
        }, 1500);

    }).catch((error) => {
        toast.error("Failed to delete", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    });
};
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
            <div className="delete"><img src="delete.webp" width="30px" height="30px" className='img' onClick={() => handleDeleteItems(items.id, items.description)}></img></div>
           <center>
           
           <div name="iamge" value={items.image}><img src={items.image} width="250px" height="250px" className="imag"></img></div>
            <div name="description" value={items.description}> <h1>{items.description}</h1> </div>
           <div name="rate" value={items.rate}><h3>Price : ₹{items.rate}</h3></div>
            <div name="quantity" value={items.quantity}>Quantity {items.quantity}</div>
            <br></br>
            
            
      </center>
      
    
        
      </div>
     
   
          
          
        ))}
        
        </div>
       
      </div>
      <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
     
    </>
  )
}
