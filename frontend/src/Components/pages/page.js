import React from 'react'
import { getAllItems,pageSort } from '../../Services/LoginService';
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import { Pagination } from '@mui/material'
import '../styles/page.css'
import {  useParams} from 'react-router-dom';
export default function Page() {
  
  const navigate = useNavigate();

  const [items, setItems]=useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
 
  const [sortBy, setSortBy] = useState('rate');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    getAllItems();
  }, [currentPage,sortBy,sortOrder]);

  const getAllItems = async () => {
    try {
      const response = await pageSort(currentPage,sortBy,sortOrder)
 
      const{totalPages}=response.data;   
      setItems(response.data);
      setTotalPages(totalPages);
          console.log(response.data);
          
    } catch (error) {
      console.error(error);
    }
  };
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    
  };

  
  
    const handleSortChange = (event) => {
      const selectedOption = event.target.value;
      setSortOrder(selectedOption);
    };
  
  
  return (
    <>
    <div className="main"> 
         
        <div><NavBar/></div>
        </div> 
    <div className='dd'>
      <label htmlFor="sortDropdown" className='dropdown'></label>
      <select id="sortDropdown" className='down' onChange={handleSortChange}>
        <option className='d1' value='asc'>Filter ⇅</option>
        <option className='d1' value="asc">Price:Low to High</option>
        <option className='d1' value="desc">Price:High to Low</option>
      </select>
    </div>
   
    <br></br>
   <br></br>
   <br></br>
      <div className='main'>

        <div className='container'>
        {items.content&&items.content.map((items) => (
          
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
    <div><Pagination className="MuiPagination-root"
      classes={{
        ul: 'MuiPagination-ul',
      }}
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          /></div>
     
     
    </>
  )
}
