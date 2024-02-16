import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Add.css'
import { AddItems } from '../../Services/LoginService';
import AdminNav from './AdminNav';

export default function Add() {
  const navigate = useNavigate();
  const [items, setItems] = useState({
    description:'',
    category:'',
    image:'',
    rate:'',
    quantity:'',
    cart:'',
    wishlist:'',
   
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    AddItems(items)
      .then((res) => {
        // toast.success
        toast.success(' Added !', {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          navigate("/admin");
        }, 1500);
      })
      .catch((err) => {
        // toast.Error
        toast.error('Failed to add  !', {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItems((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  return (
    <>
      <div className='items'>
      <div className='nab'><AdminNav /></div>
      <div className='act'>
        <div className='add-actions'>
          
        
         <center> <h1 className="title">Add Products </h1></center>
          <div className="add-container">
            <form onSubmit={handleSubmit} className='input-group'>
              <div className='add'>
              <label>
                Product category : &emsp;
                <input type="text" name="category" value={items.category} onChange={handleChange} required />
              </label></div>
              <div className='add'>
              <label>
                Product Description :
                <input type="text" name="description" value={items.description} onChange={handleChange} required />
              </label></div>
              <div className='add'>
              <label>
                Product Price:&emsp;&emsp;&emsp;
                <input type="text" name="rate" value={items.rate} onChange={handleChange} required />
              </label></div>
              <div className='add'>
              <label>
                Quantity:&emsp;&emsp;&emsp;&emsp;&emsp;
                <input type="number" name="quantity" value={items.quantity} onChange={handleChange} required />
              </label></div>
              <div className='add'>
              <label>
                Cover Image :&emsp;&emsp;&emsp;
                <input type="text" name="image" value={items.image} onChange={handleChange} required />
              </label></div>
              <br></br>

             <center> <button type="submit" className='dbutton'>Add Product</button></center>
            </form>
          </div>
          </div>
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