import React, { useState } from 'react'
import p1 from "../assets/ankita32.jpg"
import "../Component/Home.css"
import { ReactTyped } from "react-typed";
import { Link } from 'react-router-dom';
import { BsFillSuitcaseLgFill } from "react-icons/bs";
function Home() {
  const[isloading,setisloading]= useState(false)
 console.log(isloading);
 const handleDownload=()=>{
  setisloading(true)
  console.log(isloading);
  let link = document.createElement("a");
  link.href="https://drive.google.com/file/d/1ZdiXFmfbZ6OPHsHxXEIWeryz7s98VJct/view?usp=drivesdk";
 setTimeout(() => {
  link.click();
  setisloading(false)
 }, 2000);
  
 }

  return (
    <section id="intro">
     
      <div className='introcontent'>
 
        <span className='hello'>Hello,</span>
        <span className='introtext'>I'm <span className='introname'>Ankita </span>
        <br />
        <span className='post'>
          
        <ReactTyped style={{color:"#e74c3c"}}
      strings={[ "React JS Developer",
        "Web Developer",
        "Frontend Developer",
      ]}
      typeSpeed={100}
      backSpeed={50}
      loop
    />


        </span>
        </span>
        <p className='intropara'> Activelly looking for a new position. I like to explore new technologies and always try to enhance my skills through developing new project.</p>
        {/* <Link className='homebtn2'><button className='homebtn' >
      
<BsFillSuitcaseLgFill className='hicon' />
          Hire Me</button></Link> */}
          <Link ><button className='homebtn' onClick={()=>handleDownload()} >
      
{isloading?"Downloading..":"Download Resume"}
          </button></Link>
          </div>
<img src={p1} alt="" className='p1'/>

    </section>
  )
}

export default Home;
