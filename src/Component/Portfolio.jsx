import "./Portfolio.css"
import p1 from "../assets/ecart.png"
import p2 from "../assets/portfolio.png"
import p3 from "../assets/college.png"
import { Link } from "react-router-dom"
export default function Portfolio(){
    const pdata= [
        {
            img:p1,
            proname:"E-commerce website",
            url:"https://ankitapatil3.github.io/cartrtk"
        },
       
        {
            img:p2,
            proname:"Portfolio website",
            url:"https://ankitapatil3.github.io/portfolio"
        },
        {
            img:p3,
            proname:"Adarsh College",
            url:"https://adarshcollege.netlify.app"
        },
    ]
     return (
        <div className="portmain">
           <br />
            <div className="portcontent">
            I take pride in paying attention to the smallest details and making sure that You will satisfied on my project because I am most focus to fulfil the client's requirement as they want. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
            </div>

            <div className="boxcollection">

           <h1 className="porthead">Our Projects </h1>
            <div className="portbox">
            {
            pdata.map((item,index)=>{ 
                return (
<div key={index} className="portblock">
    <Link to={item.url}>
                    <img src={item.img}  className="proimg" alt="" /></Link>
                    <div className="proname">{item.proname}</div>
                    </div>
                )

            }
                
            )
         }
            </div>
            </div>
        </div>

     )
}