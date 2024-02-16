import React from "react";
import { useState,useEffect } from "react";
import NavBar from "./NavBar";
import {Link} from'react-router-dom';
import AliceCarousel from 'react-alice-carousel';

import "react-alice-carousel/lib/alice-carousel.css";
import '../styles/home.css';
import { getCategory } from "../../Services/LoginService";
function Home(){
    const items=[
        <img src="https://t3.ftcdn.net/jpg/04/50/32/86/240_F_450328685_o5om0Qu9S07ZryVai9ZZKBX2er7roOTb.jpg" className="item"></img>,
        <img src="https://t4.ftcdn.net/jpg/05/97/81/95/240_F_597819556_vI286AL0ClP1WK9Iy3aaDhSGx3D1QxDh.jpg" className="item"></img>,
        <img src="https://t4.ftcdn.net/jpg/02/71/63/89/240_F_271638992_1TUj1U7845OeSBCWXR8W2vEN0fkgoSZg.jpg" className="item"></img>,
        <img src="https://t3.ftcdn.net/jpg/03/23/53/24/240_F_323532460_zS1l3PjJPh7u2zNdJ3xGcOvRAXThbzQQ.jpg" className="item"></img>,
];
const [pro,setPro]= useState([]);
useEffect(() => {
    getCategory().then((res) => {
      setPro(res.data);
    });
  }, []);
 
return(
    
        
        <div className="main">
         <div className="head"> 
         <div><h1 style={{color:'green',fontSize:'35px'}}> TERRACE GARDENING</h1></div> 
        <div><NavBar/></div>
        </div> 
       <br></br>
        <div className="head">

            <div className="box">
   
            <Link to="/page" style={{textDecoration:"none"}}><div className="hey">&emsp;&emsp;&emsp;&emsp;<img src="gardening.jpeg" width="100px" height="100px" className="img"></img></div>
             <div className="bye">&emsp; &emsp;&emsp; &emsp;&emsp;Gardening</div></Link></div>
           
            {pro.map((pro) => (
           <div key={pro.id}>
            <Link to={`/filter/${pro.category}`} style={{textDecoration:"none"}}> <div className="hey"><img src={pro.image} name="image" width="100px" height="100px" className="img"></img></div>
           <div className="bye" > &emsp; {pro.category}</div></Link>
            </div>
            ))};
            </div>
          
        <br></br>
        <br></br>
        <div className="alice"> 
        <center>
        <AliceCarousel
            autoPlay
           
            autoPlayStrategy="none"
            autoPlayInterval={3000}
            animationDuration={3000}
            animationType="fadeout"
            infinite
            touchTracking={false}
            disableDotsControls
            disableButtonsControls
            items={items}
        />
        </center>
        </div>
        <br></br>
        <br></br>
        <div className="about">
        Having plants in our homes or in our offices doesn't just look good, it also boosts our mood, makes us more productive, and cleans the air around us by absorbing toxins
Most of us being urban dwellers spending their days in apartments with limited access to parks and ecological reserves, have no way of feeling close to nature and experiencing the benefits of being around plants.
Ordering a pizza is easy but ever heard of ordering a plant to your doorstep? This is where nurserylive comes in.
We believe that Green is Good and are here to enable Indians to access plants in the easiest way possible - online! We are here to shape the future of gardening!
A one-stop-shop for all gardening related requirements, nurserylive has more than 6000 products available online for delivery across India saving you numerous messy trips to various nurseries.
We cater to all kinds of gardening needs ranging from plants, pots, tools, to curated plant-scaping solutions. Our ever-growing platform integrates nurseries and customers across India. 
If you're new to being a plant parent, we're here to make it easier. Our garden experts can provide you with guidance for detailed care every step of the way.
Having served a network of 1 million happy plant parents, we can assure you that once you order a plant from us, you will emerge with your own home-grown veggies!
We believe that every space can be made more beautiful with plants! Come, join us in our vision to make all spaces green and healthy! 
        </div>
        <div className="details">
            <center><img src="quotes.jpeg" width={'80%'} height={'700px'} ></img></center>
        </div>
        <hr></hr>
        <div className="contact">
            <div className="email">Mail Us
            <br></br>
            <br></br>nursery@gmail.com</div>
            <div className="email">Contact Us
            <br></br>
            <br></br>+91 9876543210</div>
            <div className="email">Follow Us<br></br>
            <br></br><img src="twitter.png" width={"45px"} height={"45px"} className="pic"></img>
            <img src="insta.png" width={"45px"} height={"45px"} className="pic"></img>
            <img src="facebook.png" width={"45px"} height={"45px"} className="pic"></img></div>
            
</div>
        </div>
       
        
    )

}
export default Home;