import React from 'react'
import  "./Footer.css"
import {FaInstagram,FaFacebook,FaLinkedin} from 'react-icons/fa'
const Footer =() =>{
    return (
           <div className="main-footer">
            <div className="container">
                <div className="row">
                   {/*Column1*/}
                   <div className="col">
                    <h4>Shine up!!</h4>
                    <ul className="list-unstyled">
                        <li>Email:shineup71@gmail.com</li>
                        <li></li>
                        <li>Main office :Pune</li>
                    </ul>
                   </div>
                    {/*Column2*/}
                      <div className="col">
                        <h4>T&C</h4>
                        <ul className="list-unstyled">
                        <li>Terms & Conditions</li>
                        <li>CopyRight Issues</li>
                        </ul>
                        </div>
                     {/*Column3*/}
                     <div className="col">
                        <h4>Social media</h4>
                        <ul className="list-unstyled">
                        <li><FaInstagram className="icons instagram"/>Instagram</li>
                        <li><FaFacebook className="icons  facebook"/>Facebook</li>
                        <li><FaLinkedin className="icons linkedin"/>Linkedin</li>
                      </ul>
                      </div>  
                        </div>
              <div className="row">
                    <p className="col-sm"><center>
                            &copy;{new Date().getFullYear() } Shine up!!|All right reserved |Terms of Services|Privacy  
                    </center></p>
                  </div>
            </div>
        </div>
    )
}
export default Footer