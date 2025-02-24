import React ,{useState}from 'react';
import Header from '../components/Header';
import "./About.css";
import Img1 from './images/download (93).jpeg';
import Img2 from './images/download (94).webp';
import Img3 from './images/download (57).jpg';
import Img4 from './images/download (58).jpg';
import Img5 from './images/download (59).jpg';
import Img6 from './images/download (105).jpeg';
import Img7 from './images/download (63).jpeg';
import Img8 from './images/download (64).jpeg';
import Img9 from './images/download (67).jpeg';
import Img10 from './images/download (107).jpeg';
import Img11 from './images/download (68).jpeg';
import Img12 from './images/download (69).jpeg';
import Img13 from './images/download (106).jpeg';
import Img14 from './images/download (71).jpeg';
export default function About() 
{
   let data=[
    {
      id:1,
      imgSrc:Img3,
    },
    {
      id:2,
      imgSrc:Img4,
    },
    {
      id:3,
      imgSrc:Img5,
    },
    {
      id:4,
      imgSrc:Img6,
    },
    {
      id:5,
      imgSrc:Img7,
    },
    {
      id:6,
      imgSrc:Img8,
    },
    {
      id:7,
      imgSrc:Img9,
    },
    {
      id:8,
      imgSrc:Img10,
    },
    {
      id:9,
      imgSrc:Img11,
    },
    {
      id:10,
      imgSrc:Img12,
    },
    {
      id:11,
      imgSrc:Img13,
    },
    {
      id:12,
      imgSrc:Img14,
    },
    
   ]
   const[model,setModel]= useState(false);
   const[tempimgSrc,setTempimgSrc]=useState('');
  
    const getImg = (imgSrc) =>{
    setTempimgSrc(imgSrc);
    setModel(true);
   }
  return (
    <div className='background'>
        <Header/>
        <div style={{margin: '35px'}}>
          <img src={Img1} style={{width:'350px',float: 'right',height:'300px',borderRadius:'50px'}}/>
          <h4><br/><b><p><i><b><h2 style={{color:'red',fontFamily:'Nature Beauty Personal Use',fontSize:'35px'}}>A brand of choice for women of today!!!</h2></b>And we're here to ensure you have alot of 
          fun with our products. We're brand that believes in empowerment. That's why we are carefully curate products from around the globe which
          meet every want and need there could possibly be when it comes to your makeup , bodycare , skincare , haircare.
          </i></p></b></h4>
           <br/>
           <br/>
           <br/>
          <div style1={{margin: '90px'}}>
            <img src={Img2} style={{width:'300px',height:'230px',float: 'left',borderRadius:'50px'}}/>
        <br />
        <br />
           <h4><br/><b><p><i> <center>Most cosmetic products and methods are intended to improve the look of the face. There are two categories: 
          <h2 style={{color:'blue'}}>improve the basic quality of the skin, and those which sit on the skin during active social life.</h2></center>
          </i></p></b></h4>
           <br/>
          <h1 style={{textAlign: 'center',fontFamily:'Weddingday Personal Use',fontSize:'80px'}}><u><b>Looks good , feels good  !!!!</b></u></h1>
        </div>
        </div>  
        <div className={model ? "model open": "model"}>
          <img src={tempimgSrc}/>
         
        </div>
         <div className="gallery">
          {data.map((item,index)=>{
            return(
              <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
                  <img src={item.imgSrc} style={{width: '450px',border: '6px solid black'}}/>
                </div>
            )
          })}
         </div>
          <br/>
         <br/>
        </div>
 )
}
 