import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SignIn } from '../../Services/LoginService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import Admin from '../Admin/Admin'
import '../styles/log.css';



export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isLoggedIn') === 'true');
    const Usernamex = '';
    const navigate = useNavigate();
    const [signin, setSignin] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setSignin({ ...signin, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await SignIn(signin.username, signin.password);
        if (res.data === "Login Successful !") {
            Cookies.set('Usernamex', signin.username);
            Cookies.set('isLoggedIn', 'true');
            toast.success('Login Successful !', {
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
                navigate(`/admin/${signin.username}`);
            }, 1500);

        } else if (res.data === "Invalid Password") {
            toast.error('Invalid password!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast.error('Invalid Username!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };


    return (
       
                <> {isLoggedIn ?
                    <Admin/>
                    :
                 
                                <div className="logform" >
                                    
                                   
                                    <div className="hh">   
                                       <Link to="/"> <button className='but'>
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
  <span></span>
</button></Link>
                                    <br></br>                                
                                    <h1 style={{color:'white'}}>LOGIN</h1>

                                   
                                    <form onSubmit={handleSubmit}>
                                        <div className="login-form">
                                            <label>Username:</label>
                                            <input type="text" placeholder="Username" id="username" value={signin.username} onChange={handleChange} required />
                                        </div>
                                        <div className="login-form">
                                            <label>Password:</label>
                                            <input autoComplete="off" type="password" placeholder="Password" id="password" value={signin.password} onChange={handleChange} required />
                                        </div>
                                        <br></br>
                                       &emsp;&emsp; &emsp;&emsp; &emsp;&emsp; <input type="submit" className="button" placeholder='Login' value='Login' />
                                    </form>
                                    <br></br>
                                    <div className="register-div">Not registered yet? <Link to="/register" className="link create-account" style={{color:'red',fontSize:'20px'}} >Create an account ?</Link></div>
                                </div>
                                </div> 
                         
                }
            
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