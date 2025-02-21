import "./About.css"
import React from 'react'
const data= [
  {
img1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC5zxcI7badtk-8ZnaL7WlbmwgpDO1dFLdVA&s",
head:"UI/UX Design",
info:"UI design focuses on the visual, interactive properties of the product. It involves designing the layout, functionality, and visual aspects (e.g. color, icons, typography) of each screen."
  },
  {
   img1: "https://admin.12grids.com/uploads/blogs/cover_images/future-of-responsive-web-design-12grids.jpg",
   head:"Web Design",
   info:"Web designing is process of planning, and implementing the plan for designing a website and offers a good user experience. create the design and layout of a website with their technical expertise and knowledge while keeping in mind the client’s requirements."
  }
]

 
function About() {
  return (
    <div className='introa'>
      <h1 className="abouthead">What I do</h1>
      <div className="abpost">I am passionate web designer. I have created Visually appealing and user-friendly websites.I have strong understanding of design and keen eye in detail. In this work, we uses the HTML, CSS, Javascript and React Js.</div>
      <div>
       {
        data.map((item,index)=>(
          <div key={index} className="abblock">
<div><img src={item.img1} alt="" className="abimg"/></div>
<div>
  <div className="abblockhead">{item.head}</div>
  <div className="abinfo">{item.info}</div>
</div>
            </div>
        ))
       }
          
      </div>
    </div>
  )
}

export default About
