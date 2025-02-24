import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { DLT } from './redux/actions/action';
import { ADD } from './redux/actions/action';
import { REMOVE } from './redux/actions/action';
import { HiPlus, HiMinus } from 'react-icons/hi';
function CardDetails() {
    const [data, setdata] = useState([]);
const { id } = useParams();
  const history = useNavigate();
  // ============= Redux =========================
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
  return (
    <>
      {
        data.map((e) =>
          <div className="CardDetails">
            <div className="container">
              <div className="productimg">
                <img src={item.img} alt="" className='img' />
              </div>
              <div className="text">
                <h1>{e.title}</h1>
                <p>Price : Rs. {e.price} /-</p>
                   <p>Description : {e.description} </p>
                   <div className='menuQnty'>
                  <div onClick={e.qnty <= 1 ? () => dlt(e.id) : () => remove(e)}> <HiMinus /> </div>
                  <div>{e.qnty} </div>
                  <div onClick={()=>send(e)}><HiPlus /> </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}
export default CardDetails