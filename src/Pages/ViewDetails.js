import React ,{useEffect,useState} from 'react';
import '../Pages/ViewDetails.css' ;
import Header from '../components/Header';
import Img from './images/download (110).jpeg';
export default function Table()
{
  const[data,setdata]=useState([]);
  useEffect(()=>{
    getdata();
  },)
  async function getdata(){
    let result=await fetch("http://localhost:5001/")
    result=await result.json()
    setdata(result)
 }
  return (
    <div>
      <Header/>
     <center><i><h1 style={{fontFamily:'Golden Coast Personal Use',fontSize:'80px',marginTop:'-65px',color:'#F33A6A'}}>Userlist</h1></i></center>
     <img src={Img} alt='img' style={{width:'1460px',height:'750px',borderRadius:'50px'}}/>
        <table className='table1'>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
             </tr> 
           <tbody>
            {
              data.map((item)=>
              <>
              <tr>
                <td>{item.name}</td>
                <td>{item.contact}</td>
                <td>{item.email}</td>
                </tr>
                </>
              )
            }
           </tbody>
        </table>
    </div>
  )
}
/*import React,{useEffect,useState} from "react";
import Header from '../components/Header';
import '../Pages/ViewDetails.css';
export default function View_Details () 
{
   const[data,setData]=useState([]);
   useEffect(()=>
   {
    getData();
   })
    async function getData(){
      let result=await fetch("http://localhost:5001/")
      result = await result.json()
      setData(result)
    }


  return (
    <div>
      <Header/>
   <center><i><h1>User list</h1></i></center>
   <table className="table1">
    <tr>
      <th>Name</th>
      <th>contact</th>
      <th>email</th>
    
    </tr>
    <tbody>
      {
        data.map((item)=>
        <>
        <tr>
          <td>{item.name}</td>
          <td>{item.contact}</td>
          <td>{item.email}</td>
        
        </tr>
       </>
        )
      }
    </tbody>
   </table>



    </div>
  )
}*/