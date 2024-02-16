import axios from "axios";

//Spring Boot API Config 
const URL ='http://localhost:8080';


const SignUp = (username, password, email, phone, age) => axios.post(URL+'/auth/signup', {username, password, email, phone, age});
const SignIn=(username,password)=>axios.post(URL+'/signin',{username,password});
const getAllItems= () => axios.get(`${URL}/getall`)
const getwishlist=()=>axios.get(`${URL}/wishlist`)
const getcart=()=>axios.get(`${URL}/cart`)
const deleteItems=(id)=>axios.delete(`${URL}/deletebyid/${id}`);
const AddItems=(items)=>axios.post(`${URL}/postall`,items)
const UpdateItem=(id,items)=>axios.put(`${URL}/put/${id}`,items);
const getAllItemsbyId=(id)=>axios.get(`${URL}/getbyid/${id}`)
const getfilter=(category)=>axios.get(`${URL}/findbycat/${category}`);
const getCategory=()=>axios.get(`${URL}/show`);
const pageSort=(pageNo,sortBy,sortOrder)=>axios.get(`${URL}/pagination/${pageNo}/${sortBy}/${sortOrder}`); 


export{SignUp,SignIn,getAllItems,getwishlist,deleteItems,AddItems,UpdateItem,getAllItemsbyId,getcart,getfilter,getCategory,pageSort};

