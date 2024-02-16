import React from "react";
import {Link, useParams} from'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


import "react-alice-carousel/lib/alice-carousel.css";
import { Padding } from "@mui/icons-material";

function Admin(){
   const {username} =useParams();
   const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isLoggedIn') === 'true');
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
          navigate('/login');
        }
      }, [isLoggedIn, navigate]);

    const userlogout = () => {
        if (isLoggedIn) {
            navigate('/');
            Cookies.remove('isLoggedIn');
            setIsLoggedIn(false);
        } else {
            navigate('/login');
        }
    };

    const routeProduct = () => {
        navigate('/adview');
    };
    const routeadd = () =>{
        navigate('/add')
    }
    const routedelete=()=>{
        navigate('/delete')
    }
return(
    
        
        <div className="hell">
       <br></br>
       <div><h1 style={{fontSize:'45px'}}> &emsp;&emsp;TERRACE GARDENING </h1></div>
    
      <div className="hello">
<h1 style={{fontSize:'35px' ,marginTop:'50px'}}>&emsp;&emsp;&emsp;Welcome {username}!!!</h1>
      </div>
      <div className="options" style={{fontSize:'40px', color:"white"}}>
        <div className="op1"><button class="ABtn" onClick={routeadd}>
  
  <div class="signd">+</div>
 
 
</button></div><br></br>
        <div className="op1" class="add"><button class="tooltip" className="dbutton"  onClick={routedelete}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
    <path fill="#6361D9" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clip-rule="evenodd" fill-rule="evenodd"></path>
  </svg>
  <span class="tooltiptext"></span>
</button></div><br></br>
        <div className="op1" class="delete"><button class="ebutton" onClick={routeProduct}>
  <svg class="svg-icon" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#a649da" stroke-linecap="round" stroke-width="2"><path d="m20 20h-16"></path><path clip-rule="evenodd" d="m14.5858 4.41422c.781-.78105 2.0474-.78105 2.8284 0 .7811.78105.7811 2.04738 0 2.82843l-8.28322 8.28325-3.03046.202.20203-3.0304z" fill-rule="evenodd">
    </path></g></svg>
 <span class="lable"></span>
</button></div><br></br>
        <div className="op1"><button class="lBtn" onClick={userlogout}>
  
  <div class="signl"><svg viewBox="0 0 520 520"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
  <div class="textl">  Logout</div>
</button>

</div>
      </div>
       
        </div>
    )

}
export default Admin;