import "./Footer.css"
Link
import { FaFacebook } from "react-icons/fa6";
// import { AiFillInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { Link, Links } from "react-router-dom";
export default function Footer(){
     return (
        <>
          {/* <h1>This is Footer Component.</h1>  */}
          <div className="footer">
            <div className="menus">
                <div className="address">Our Address:
                  <div>212,Kittur Channamma Nagar, Solapur</div>
                </div>
                <div className="socialmedia">
          
                  <div className="fb"><Link to="https://www.facebook.com">
<FaFacebook /></Link></div>
                <div className="insta"><Link to="https://www.instagram.com"> <FaInstagram /></Link></div>
                <div className="whatsapp"><Link to="https://www.whatsapp.com">
<FaWhatsapp /></Link></div>
                <div className="smi"><Link to="https://www.twitter.com"><FiTwitter /></Link></div>
                </div>
               
                <div>
                  <div>Important Link</div>
                 
      
      <div> <Link className='menuf'to="/portfolio">Portfolio</Link></div>
      <div> <Link className='menuf' to="/clients">Clients</Link></div>
      <div> <Link className='menuf' to="/skill">Skills</Link></div>
</div>
                
            </div>
          </div>
        </>
     )
}