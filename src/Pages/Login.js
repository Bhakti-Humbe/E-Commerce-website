import React, { useState } from 'react';
import Header from '../components/Header';
const Login = () => {
  const [name, setUsername] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  function getData(e) {
    let data = name
    let data1 = email
    let data3 = contact
    e.preventDefault();
    console.log(data);
    console.log(data1);
   console.log(data3);
  }
return (
    <div>
      <Header/>
    <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 mgt-2 '>
      <div className='w-40 border border-danger  p-5 rounded bg-light'>
    <form action='' className='form' onSubmit={getData}>
      <h3 className='text-center text-dark'>LOGIN </h3>
      <div className='mb-3 text-dark'>
        <label htmlFor='username'>Name </label>
        <input type='text' onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className='mb-3 text-dark'>
        <label htmlFor='contact'>Contact  </label>
        <input value={contact} type='number' onChange={(e) => setContact(e.target.value)} />
      </div>
      <div className='mb-3 text-dark '>
        <label htmlFor='email'>Email </label>
        <input value={email} type='email' onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className='d-grid'>
        <center><button className='btn btn-danger' type='submit'>Submit</button></center>
      </div>
     </form>
    </div>
    </div>
  </div>
  )
  async function getData(e){
    let data = {name , contact , email};
    e.preventDefault();
    let result = await fetch("http://localhost:5001/",{
      method : "POST" ,
      headers:{
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      "Content-Type" : "application/json",
      body:JSON.stringify(data)
    })
    result : await result.json();
  }
}
export default Login