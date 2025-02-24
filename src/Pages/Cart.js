import React,{useState,useEffect} from 'react'
import {MdDelete} from 'react-icons/md';
import {DLT} from '../Redux/actions/action';
import {Table} from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADD } from '../Redux/actions/action';
import { REMOVE } from '../Redux/actions/action';
import { HiPlus, HiMinus } from 'react-icons/hi'
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import "./Product.css";
const Cart = () => {
const[toggle,settoggle]=useState(false);
  function display(){
    settoggle(!toggle);
  }
//-----------------------REDUX-------------------------
const [data, setdata] = useState([]);
const { id } = useParams();
const history = useNavigate();
//Carddetails data
const dispatch = useDispatch();
const [price,setprice]=useState(0);
const getData= useSelector((state)=>state.cartreducer.carts);
 const compare = () => {
    let comparedata = getData.filter((e) => {
      return e.id == id
    });
    setdata(comparedata);
  }
  useEffect(() => {
    compare();
  }, [id])
  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  }
const remove = (item) => {
    dispatch(REMOVE(item))
  }
  const send=(e)=>{
    dispatch(ADD(e));
  }
   const total = () => {
    let price = 0;
    getData.map((e, k) => {
      price = e.price * e.qnty + price
    });
     setprice(price);
  }
  useEffect(() => {
    total();
  }, [total])
return (
    <div>

<Header/>
    <div className="addtocart">
    <div className='icons' onClick={display}>
      <FaShoppingCart className="carts"/>
      <div className='box'>
        <p>{getData.length}</p>
      </div>
  </div>
    {
      toggle ?
       <div className="menu">
        {
          getData.length ?
          <div className='card_details' style={{width:"20rem",padding:20,justifyContent:"center",alignItems:"center"}}>
          <Table striped bordered hover className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Description</th>
                <th>Remove</th>
              </tr>
            </thead>
            {
              getData.map((e)=>
              <tbody>
                <tr>
                  <Link to={'/ProductDetail/${e.id}'}><td><img src={e.img} className='imgicon'/></td></Link>
                  <td className='text1'>
                  <p className='head'>{e.title}</p>
                  <p>Price:Rs.{e.price}/-</p>
                  <p>QTY:{e.qnty}</p>
                  <div className='menuQnty'>
                  <div onClick={e.qnty <= 1 ? () => dlt(e.id) : () => remove(e)}> <HiMinus /> </div>
                  <div>{e.qnty} </div>
                  <div onClick={()=>send(e)}><HiPlus /> </div>
                  </div>
                </td>
                <td><MdDelete className='delicon' onClick={()=>dlt(e.id)}/></td>
                 </tr>
                 </tbody>
              
              )
            }
            <br/>
           <center><p>Total Amount:Rs {price}/-</p></center>
          </Table>
          </div>
          :
          <center><h2><b><p>Your cart is empty!!!!!!!!</p></b></h2></center>
        }
        </div>
        :null
    }
  </div>
  </div>
  )
}
export default Cart