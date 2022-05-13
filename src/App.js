import './App.css';
import React, { useState } from 'react';

const App = () => {

  const [field, setField] = useState({

    email: "",
    password: ""

  })



  let name, val;

  const store = (e) => {
    val = e.target.value;
    name = e.target.name;
    setField({ ...field, [name]: val })

  }

  const save = async (e) => {
    e.preventDefault();

    const { email, password } = field;

    const res = await fetch("https://fir-connect-d5242-default-rtdb.firebaseio.com/logindatabase.json", {

      method: "POST",
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        email, password

      })
    })
  }



  return (
    <>
      <div className='bigdiv'>
        <div className='container'>
        <form method='POST' onSubmit={save} >
          
          <div><h1 className='flex'>Login</h1></div>
          <div className='button'><input className='flex username' type="text" name="email" value={field.email} onChange={store} placeholder='Enter Email' required></input></div>
          <div className='button'><input className='flex password' type="password" name="password" value={field.password} placeholder='Password' onChange={store} required></input></div>
          <div className='button'><button className=' login' type="submit" >Sign in</button></div>
        </form>
        </div>
      </div>


    </>
  )
}

export default App;
