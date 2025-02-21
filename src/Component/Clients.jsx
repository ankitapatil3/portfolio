import React from 'react';
import i1 from "../assets/rohini2.jpg";
import i2 from "../assets/abhi2.jpg";
import i3 from "../assets/ashwinikanoje.jpg";
import i4 from "../assets/ravi.jpg"
import i5 from "../assets/sb.jpg"
import i6 from "../assets/tj.jpg"
import "./Clients.css"

// import { Link } from 'react-router-dom';
function Clients() {
    const client=[
        {
name:"Rohini Pol",
img:i1,
feedback:"I am teacher I am running coching classes. So In digital decade, I need to provide the information to the parents and students In this Ankita Patil helped me for this situation. she made website for my coaching. which is very best."
        },{
name:"Abhijeet Patil",
img:i2,
feedback:"I am running one shop. so I need to deliver product information and offers, and some more. so she made one website for my shop. so information is easily reach to customers. Thank You.."
        },{
            name:"Ashwini Kanoje",
            img:i3,
            feedback:"I got the information from my friend she provide good service So, I told them to make one website for my business which is very attractive."
        },
        {
            name:"Ravi Pujari",
            img:i4,
            feedback:"I am running the cloth shop In digital era, each want the quick service. so she Made one website for my shop where i can put all information about services, offers, product information, so it makes me very helpful to react to customer."
        },
        {
            name:"suraj Birajdar",
            img:i5,
            feedback:"I am one the head of institute so, Each time I have to take more responsibility,each time I have to pass the message to every person That time she helps me by giviing the website solution I have got the website so, It save so much time. Thank you.",
            url:""
        },{
            name:"Tejas Patil",
            img:i6,
            feedback:"I am running one small bank where I have to pass the information about offers and services to each customer So, I  told them about one website with requirement. So she helped me more to get this."
        }
        
    ]
  return (
    <div className="clients">
      <h1 className='clienthead'>Our Clients</h1>
      <div className='clientbox'>
      {
        client.map((item,index)=>(
            <div key={index} className='clientpad'>
                <img src={item.img} alt="" className='cimg'/>
              
            <div className='clientname'>{item.name}</div>
            <div style={{fontSize:"14px"}} className='feedback'>{item.feedback}</div>
            
            </div>
            
        ))
      }
     
      </div>
      <div>
      
      </div>
    </div>
   
  )
}

export default Clients
