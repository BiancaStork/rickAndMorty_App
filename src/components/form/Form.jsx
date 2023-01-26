import React, { useState } from 'react';
import s from './Form.module.css';
import { validation } from './validation';

function Form(props) {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (e) => {
        setUserData({
        ...userData,
        [e.target.name]: e.target.value,
      });

       setErrors(validation({
        ...userData,
        [e.target.name]: e.target.value,
       }));
          
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.login(userData)
    }


  return (
    <div className={s.container}>
        <form className={s.texto} onSubmit={handleSubmit}>

        <label>Username: </label>
        <input 
        type='text'
        name='username'   
        value={userData.username} 
        placeHolder='ingrese un email para el usuario' onChange={handleInputChange}
        className={errors.username && s.warning}
         />
        <p className='danger'>{errors.username}</p>
        <br></br>
        <br></br>
       
        <label>Password: </label>
        <input 
        type="password" 
        name='password' 
        value={userData.password}
        placeHolder='ingrese una contraseña'  
        onChange={handleInputChange} 
        className={errors.password && s.warning}
        />
        <p className='danger'>{errors.password}</p>

        <br></br>
        <br></br>

        <button className={s.button} type='submit'>Login</button>

        </form>
    </div>
  )
}


export default Form