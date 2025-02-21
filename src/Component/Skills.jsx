import React from 'react'
import "./Skills.css"

function Skills() {
    const data= [
        {
img:"https://static-00.iconduck.com/assets.00/html-5-icon-224x256-1b5ud2sy.png",
name:"html"

        },
        {
            img:"https://img.icons8.com/fluent/512/css3.png",
            name:"CSS"

        },
        {
            img:"https://skillforge.com/wp-content/uploads/2020/10/javascript-266x300.png",
            name:"Javascript"
        },
        {
            img:"https://michaelwashburnjr.com/hubfs/Imported_Blog_Media/react-icon_svg_.png",
            name:"React JS"
        }
    ]
  return (
    <div id="skill">
      <h2 style={{textAlign:"center", padding:"20px",fontSize:"19px"}} className="skillhead">I enjoy diving into and learning new things. Here's a list of technologies I've worked with </h2>
      <div id="skill2">
        {/* <div>
        
        </div> */}
       
      {
        data.map((item,index)=>{
             return (
                <div key={index} className='img2' >
               <img src={item.img} alt="" className='img'/> 
               <h1 style={{align:"center"}} className='skillname'>{item.name}</h1>
                </div>
             )
        })
      }
      </div>
      </div>
   
  )
}

export default Skills
