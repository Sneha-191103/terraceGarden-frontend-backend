import React from 'react'
import { SignUp} from '../../Services/LoginService';
import { Link, useNavigate } from 'react-router-dom'
import { useState} from 'react'
import '../styles/log.css'
import { ToastContainer, toast } from 'react-toastify';
export default function Register() {
  const navigate = useNavigate();
  const [signup, setSignup] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    age:0
  })


  const handleChange = (e) => {
    setSignup({ ...signup, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await SignUp(signup.username, signup.password, signup.email, signup.phone, signup.age);
    console.log(res);
    if (res.data === "Signup Successfull!") {
      toast.success('Signup Successfull!', {
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
        navigate('/login');
      }, 1500);
    } else if (res.data === "Username Already Exists") {
      toast.error('Username Already Exists !', {
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
      console.log(res.data);
      toast.success('Signup Successful !', {
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
        navigate('/login');
      }, 1500);

  }
}

  return (
    <>
      
              <div className="logform">
               
               <div className='hh'>
               <Link to="/"> <button className='but'>
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
  <span></span>
</button></Link>

               <br></br> <h1 style={{color:'white',fontSize:'35px'}}>REGISTER</h1>

               
                <form onSubmit={handleSubmit}>

                  <div className="login-form">
                    <label>Username&emsp;&emsp;&emsp;:</label>
                    <input type="text" placeholder="Username" id="username" value={signup.username} onChange={handleChange} required />
                  </div>
                  <div className="login-form">
                    <label>Email&emsp;&emsp;&emsp;&emsp;&emsp;:</label>
                    <input type="email" placeholder="Email" id="email" value={signup.email} onChange={handleChange} required />
                  </div>
                  <div className="login-form">
                    <label>Password&emsp;&emsp;&emsp; :</label>
                    <input autoComplete="off" type="password" placeholder="Password" id="password" value={signup.password} onChange={handleChange} required />
                  </div>
                  <div className="login-form">
                    <label>PhoneNumber&emsp;  :</label>
                    <input autoComplete="off" type="tel" placeholder="Mobile" id="phone" value={signup.phone} onChange={handleChange} required />
                  </div>
                  <div className="login-form">
                    <label>Age&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:</label>
                    <input autoComplete="off" type="text" placeholder="Age" id="age" value={signup.age} onChange={handleChange} required />
                  </div>
                &emsp;&emsp;&emsp;&emsp;<input type='submit' className="button" placeholder='Signup' value='Register' />
                </form>
                <div>Already have an account ? <Link to="/login" style={{color:'red',fontSize:'25px'}}>Login</Link></div>
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