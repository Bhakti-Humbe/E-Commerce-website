import React from 'react';
import Header from '../components/Header';
import Img1 from './images/download (65).jpeg';
import Img2 from './images/download (92).png';
import Img3 from './images/download (95).png';
import Img4 from './images/download (96).png';
import Img5 from './images/download (97).png';
import Img6 from './images/download (98).png';
import Img7 from './images/download (99).png';
import Img8 from './images/download (100).png';
import Img9 from './images/download (101).webp';
import Img10 from './images/download (103).jpg';
import Img11 from './images/download (104).jpg';
import "./Home.css";
export default function Home() 
{
 return (
    <div >
       <Header/>
       <div className='boxes'>
        <img src={Img1} alt='img'style={{width:'300px',height:'300px',padding:'10px',margin:'100px 90px 100px 210px',
    borderRadius:'360px'}} />
    <img src={Img2} alt='img'style={{width:'120px',height:'120px',padding:'10px',marginLeft:'-500px',
    marginBottom:'160px',borderRadius:'360px ',opacity:'0.2'}} />
    <img src={Img3} alt='img'style={{width:'100px',height:'100px',padding:'10px',marginLeft:'-190px',
    marginBottom:'-330px',marginRight:'300px',borderRadius:'360px ',opacity:'0.2'}} />
    <img src={Img4} alt='img'style={{width:'140px',height:'140px',padding:'10px',marginLeft:'-420px',
    marginBottom:'360px',borderRadius:'360px ',opacity:'0.4'}} />
    <img src={Img5} alt='img'style={{width:'90px',height:'90px',padding:'10px',marginLeft:'300px',
    marginBottom:'300px',borderRadius:'360px ',opacity:'0.4'}} />
    <img src={Img6} alt='img'style={{width:'150px',height:'150px',padding:'10px',marginLeft:'-90px',
    marginBottom:'-300px',borderRadius:'360px ',opacity:'0.4'}} />
    <img src={Img7} alt='img'style={{width:'150px',height:'150px',padding:'10px',marginLeft:'-50px',
    marginBottom:'250px',borderRadius:'360px ',opacity:'0.4'}} />
    <img src={Img8} alt='img'style={{width:'70px',height:'70px',padding:'10px',marginLeft:'-650px',
    marginBottom:'-100px',borderRadius:'360px ',opacity:'0.4'}} />
    <div className='text' >
      <h2 style={{textAlign: 'center',fontFamily:'Weddingday Personal Use',fontSize:'80px'}}><b><p>We're experts
         in the perfect style for your face shape .</p></b></h2>
      </div>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
  <div className='Marquee'>
      <marquee direction="right" height="100px" scrollamount="15" >Love your skin , and it will love you back!!!!</marquee>
     </div>
   </div>
   <br/>
   <br/>
   <center><b style={{fontFamily:'Nature Beauty Personal Use' ,fontSize:'50px'}}>Caring Products</b></center>
    <br/>
<div className='bg-text'><h2><p>Natural skin care products typically do not contain chemicals or synthetic 
    ingredients.
     They may also include more environmentally friendly options. The natural skin care industry
      is one of the fastest-growing markets in beauty.</p></h2></div>
<img src={Img9} alt='img' style={{width:'1460px',height:'550px',borderRadius:'460px'}}/>
     <br/>
     <br/>
     <br/>
     <div className='bg-text1'><h2><p>Hair Care products are those that help to control the properties 
      and behavior of the hair so that it can
      be maintained in a controlled and desirable manner.</p></h2></div>
  <img src={Img10} alt='img' style={{width:'1460px',height:'500px',borderRadius:'360px'}}/>
    <br/>
    <br/>
    <br/>
     <div className='bg-text2'><h2><p>Nail Products are products that are used to color the nails, 
      to protect them against damage, to soften and
     condition cuticles, and to supplement the nails. They include nail polish and enamels and nail polish and
      enamel removers.</p></h2></div>
  <img src={Img11} alt='img' style={{width:'1460px',height:'500px',borderRadius:'360px'}}/>
     <br/>
     <br/>
     <br/>
</div>
  );
};
 