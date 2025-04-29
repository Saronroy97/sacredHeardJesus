import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {

  const [getUser, setUser] = useState({
      userName:'',
      password:''
  })

  const handleInput = (e) => {
    const {name, value} = e.target;
    
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
      }));
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(getUser)
    try {
      const response = await axios.post('http://localhost:5000/api/user/login', getUser);
      console.log('login response = ', response.data);
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100 full_cover'>
      <div className='form_wrap border p-4 rounded'>
        <form>
          <div className='mb-4'>
            <label className='form-label text-white'>User Name</label>
            <input type='text' className='form-control ' name='userName' onChange={handleInput} />
          </div>
          <div className='mb-2'>
            <label className='form-label text-white'>Password</label>
            <input type='password' className='form-control' name='password' onChange={handleInput} />
          </div>
          <div className='mb-4 text-end'>
            <span className='text-white'>Forget Password?</span>
          </div>
          <div className='text-center'>
            <button className='btn btn-primary' onClick={handleSubmit}>Signin</button>
            <h6 className='signup_text text-white mt-2'>Don't have an account? <a href=''>Register</a></h6>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
