import React from 'react'
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../styles/viewid.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UpdateItem, getAllItems, getAllItemsbyId } from '../../Services/LoginService';

import {Link} from 'react-router-dom'
import AdminNav from './AdminNav';


function EditId() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [items, setItems] = useState({
        category:"",
        cart:false,
        wishlist:false,
        rate:0,
        image:"",
        quantity:0,
    });
    
    useEffect(() => {
        getAllItems();
    }, []);
    const [value, setValue] = useState(false)
    const [wishlist,setWishlist]=useState(false)
    const getAllItems = async () => {
        try {
            const res = await getAllItemsbyId(id);
            setItems(res.data);
            setValue(res.data.cart);

            setWishlist(res.data.wishlist);
        } catch (err) {
            console.err("Failed to load", err);
        }
    };

    const handleValueChange = (event) => {
        const { name, checked } = event.target;
    
        setItems((prevData) => ({
          ...prevData,
          [name]: checked
        }));
      };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setItems((prevItem) => ({
            ...prevItem,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const handleValueChange = (event) => {
            const { name, checked } = event.target;
        
            setItems((prevData) => ({
              ...prevData,
              [name]: checked
            }));
          };
        try {
            await UpdateItem(id,items);
            
            toast.info(' Updated !', {
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
                navigate("/adview");
            }, 1500);

        } catch (err) {
            console.error("Failed to update", err);
        }
    };

    return (
        <div className='x-main'>
            <AdminNav />
            <div className='actions'>
            <form onSubmit={handleSubmit} className='update'>

                        
            <div name="category" value={items.category}></div>
            <div name="image" value={items.image}><img src={items.image} width="750px" height="600px"></img></div>
                        <div className="k1"> <Link to="/page"> <button className='but'>
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
  <span></span>
</button></Link><center>
<div name="description" value={items.description}><div className="jk">Description:</div><input type="text" style={{fontSize:'20px',width:'550px'}} class="form__field"  name="description" value={items.description} onChange={handleChange}></input></div></center>

<div name="rate"><h2>Price : ₹<input type="text" name="rate" value={items.rate} onChange={handleChange} styel={{width:'60px'}}/></h2></div>
                    
                     <div className="cbox">
                    <div className='l1'>
                       <h5>qty:</h5><input type="number" name="quantity" value={items.quantity} onChange={handleChange} style={{width:'70px'}}/>
                   
</div>
<br></br><br></br>  <div className='l1'>
    
                    <label class="custom-checkbox">
                    <input type="checkbox" name="cart" checked={items.cart}
            onChange={handleValueChange} /><span class="checkmark"></span>
            </label>
           </div>
            </div>
                <div className="wish"><div class="con-like">
  <input title="like" type="checkbox" class="like" name="wishlist" checked={items.wishlist} onChange={handleValueChange}/>
  <div class="checkmark">
    <svg viewBox="0 0 24 24" class="outline" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
    </svg>
    <svg viewBox="0 0 24 24" class="filled" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
    </svg>
    <svg class="celebrate" width="90" height="90" xmlns="http://www.w3.org/2000/svg">
      <polygon points="4,4 8,8" class="poly"></polygon>
      <polygon points="4,20 8,20" class="poly"></polygon>
      <polygon points="8,32 12,28" class="poly"></polygon>
      <polygon points="36,4 36,8" class="poly"></polygon>
      <polygon points="36,20 28,20" class="poly"></polygon>
      <polygon points="32,32 28,28" class="poly"></polygon>
    </svg>

  </div>
            </div><div className="w1">ADD TO WISHLIST</div></div> 
                   
            <button type="submit" className='buttons'>
    <p>UPDATE</p>
    <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
</button>
                        </div>
                    </form>

                <div className="container">
                    
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
        </div>
    );
}
export default EditId;