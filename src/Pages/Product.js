import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';
import Card from 'react-bootstrap/Card';
import CardsData from './CardsData';
import { useDispatch } from 'react-redux';
import {ADD} from '../Redux/actions/action';
import "./Product.css";
function Product() {
    const [data, setData] = useState(CardsData);
    const dispatch = useDispatch();
    const send = (e) => {
        dispatch(ADD(e));
    }
    return (
      <div>
          <Header/>
           <div >
            {
                data.map((item, i) =>
                    <Card className='card'>
                      <span className="square border border-dark"></span>
                      <span className="square border border-5"></span>
                      <span className="square bg-primary rounded-9"></span>
                        <Card.Img variant="top" src={item.img} className="cardimg"/>
                        <Card.Body>
                            <Card.Title className='abc'><b><center>{item.title}</center></b></Card.Title>
                            <Card.Text className='text1'>
                                <p><b><center>Price :  Rs.{item.price}/- </center></b></p>
                            </Card.Text>
                            <center><Button variant="light" className='cardbtn' onClick={() => send(item)} >
                                Add to cart
                            </Button></center>
                           </Card.Body>
                        <span className="square border border-5"></span>
                       <span className="square border border-dark"></span>
                    </Card>
                    )
            }
            </div>
        </div>
    );
}
 export default Product;
/*import React from 'react'
import Header from '../components/Header'
import {Button}  from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {useDispatch} from 'react-redux';
import {ADD} from '../Redux/actions/action' 
import { useState } from 'react';


className='cardbtn' onClick={()=>send(item)};



export default function Product() 
{
  const [data,setData]=useState(Product_Data);

  const dispatch=useDispatch();

  const send=(e)=>{
    dispatch(ADD(e));
 
  return (
    <div >

      <div class="card">
        
      <div className='background1'>
        <Header/>
  
        
        <div className='container1Card'>
        <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        
        
      <Card.Img variant="top" src="image/download (1).jpg" className='img'/>
      <Card.Body>
      
        <Card.Title><center><b>Lakme   Nailpolish</b></center></Card.Title>
        <Card.Text>
         <center><b>Price: 199/-</b></center>
         
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
    
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>
      

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (8).jpg" className='img1'/>
      <Card.Body>
        <Card.Title><center><b> Gel Stylist EyeLiner</b></center></Card.Title>
        <Card.Text>
        <center><b>Price:165/-</b></center>
    
        </Card.Text>
       <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>


  
    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (4).jpg"className='img2' />
      <Card.Body>
        <Card.Title><center><b>Absolute lip color</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:231/-</b></center>
        </Card.Text>
        <center><b><Button variant="light">Add to cart</Button></b></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>


    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top"  src="image/download (50).jpg"  className='img3'/>
      <Card.Body>
        <Card.Title><center><b>Lumi Cream</b></center></Card.Title>
        <Card.Text>
         <center><b>price:164/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>


    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (15).jpg" className='img4' />
      <Card.Body>
        <Card.Title><center><b>Crush Nail Art</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:149/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>
    
      </div>

      <div className='container2Card'>
      <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>

      <Card.Img variant="top" src="image/download (7).jpg" className='img5'/>
      <Card.Body>
        <Card.Title><center><b>Deep Kajal</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:425/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

  
    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (28).jpg" className='img6' />
      <Card.Body>
        <Card.Title><center><b>Lakme Facefash</b></center></Card.Title>
        <Card.Text>
        <center><b>Price:125/-</b></center> 
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (12).jpg" className='img7' />
      <Card.Body>
        <Card.Title><center><b>Compact</b></center></Card.Title>
        <Card.Text>
        <center><b>Price:399/-</b></center> 
        </Card.Text>
       <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>


    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (14).png" className='img8'/>
      <Card.Body>
        <Card.Title><center><b>Water proof Kajal</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:142/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (18).jpg" className='img9'/>
      <Card.Body>
        <Card.Title><center><b>Primer Lipsticks</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:1,040/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>
    </div>

    <div className='container3Card'>
     
    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (21).jpg" className='img10'/>
      <Card.Body>
        <Card.Title><center><b>Foundation</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:408/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (29).jpg" className='img11'/>
      <Card.Body>
        <Card.Title><center><b>Blush & glow peach gel</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:238.50/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (23).jpg" className='img12'/>
      <Card.Body>
        <Card.Title><center><b>Eyeconic Kajal</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:275/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (10).jpg" className='img13'/>
      <Card.Body>
        <Card.Title><center><b>Lipidum Shampoo</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:2000/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (30).jpg" className='img14'/>
      <Card.Body>
        <Card.Title><center><b>Straberry Facefash</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:93/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>
    </div>
    
    <div className='container3Card'>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (14).jpg" className='img15'/>
      <Card.Body>
        <Card.Title><center><b>Waterproof Mascara</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:200/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (19).jpg" className='img16'/>
      <Card.Body>
        <Card.Title><center><b>Lakme Lipsticks</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:1,020/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (20).jpg" className='img17'/>
      <Card.Body>
        <Card.Title><center><b>Eyebrow Pencil</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:100/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>
    
    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (3).jpg" className='img18'/>
      <Card.Body>
        <Card.Title><center><b>Lipstick</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:150/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (38).jpg" className='img19'/>
      <Card.Body>
        <Card.Title><center><b>Lakme Brush set</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:1,020/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>
    </div>

    <div className='container3Card'>
    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (39).jpg" className='img20'/>
      <Card.Body>
        <Card.Title><center><b>EyeShadow palette</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:980/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (45).jpg" className='img21'/>
      <Card.Body>
        <Card.Title><center><b>Lakme lumi skin cream</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:1,020/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (48).jpg" className='img22'/>
      <Card.Body>
        <Card.Title><center><b> MILK MOISTURIZER</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:399/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>
  
    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (47).jpg" className='img23'/>
      <Card.Body>
        <Card.Title><center><b>Sun expert</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:260/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (3).jpg" className='img24'/>
      <Card.Body>
        <Card.Title><center><b>Pink Petal</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:468/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>
    </div>


    <div className='container4Card'>
    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (6).jpg" className='img25'/>
      <Card.Body>
        <Card.Title><center><b>Foundation Shades</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:899/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (11).jpg" className='img26'/>
      <Card.Body>
        <Card.Title><center><b>Glow Frutiy face wash</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:410/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 35, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (13).jpg" className='img27'/>
      <Card.Body>
        <Card.Title><center><b>Lakme Compact</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:310/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (16).png" className='img28'/>
      <Card.Body>
        <Card.Title><center><b>Lakme EyeLiner</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:450/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (35).jpg" className='img29'/>
      <Card.Body>
        <Card.Title><center><b>EyeShadow </b></center></Card.Title>
        <Card.Text>
         <center><b>Price:510/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>
    </div>

    <div className='container5Card'>
    
    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (2).jpg" className='img30'/>
      <Card.Body>
        <Card.Title><center><b>Root Deep Shampoo </b></center></Card.Title>
        <Card.Text>
         <center><b>Price:2,300/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (9).jpg" className='img31'/>
      <Card.Body>
        <Card.Title><center><b>Lipidum Shampoo</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:2,000/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 30, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (10).jpg" className='img32'/>
      <Card.Body>
        <Card.Title><center><b>Lipidum Shampoo</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:2,000/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 30, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (14).jpg" className='img33'/>
      <Card.Body>
        <Card.Title><center><b>Eyeconic Mascara</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:324/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 20, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (17).jpg" className='img34'/>
      <Card.Body>
        <Card.Title><center><b>Waterproof Mascara</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:339/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>
    </div>

    <div className='container6Card'>
    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (20).jpg" className='img35'/>
      <Card.Body>
        <Card.Title><center><b>Eyebrow Pencil</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:63.75/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 25, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (27).jpg" className='img36'/>
      <Card.Body>
        <Card.Title><center><b>Eyebrow Powder</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:198/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>


    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 20, marginRight: 20 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (50).jpg" className='img37'/>
      <Card.Body>
        <Card.Title><center><b>Lumi Cream</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:164/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 35, marginRight: 25 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (51).jpg" className='img38'/>
      <Card.Body>
        <Card.Title><center><b>Highlighter</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:570/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    <Card style={{ marginTop: 20, marginBottom: 0, marginLeft: 26, marginRight: 35 }}  className='card'>
        <span className="square border border-dark"></span>
        <span className="square border border-5"></span>
        <span className="square bg-primary rounded-9"></span>
      <Card.Img variant="top" src="image/download (49).jpg" className='img39'/>
      <Card.Body>
        <Card.Title><center><b>Hydra Gel</b></center></Card.Title>
        <Card.Text>
         <center><b>Price:674/-</b></center>
        </Card.Text>
        <center><Button variant="light">Add to cart</Button></center>
        <Card sx={{ border: '5px solid black',borderColor:'black' }}></Card>
      </Card.Body>
      <span className="square border border-5"></span>
      <span className="square border border-dark"></span>
    </Card>

    
  </div>
    </div>
    </div>
    <br/>
    <br/>
    </div>
 
   )
}*/
