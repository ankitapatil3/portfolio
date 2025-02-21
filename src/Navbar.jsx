import React, { useEffect, useState } from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaRegMessage } from "react-icons/fa6";
import "../src/Navbar.css";
// import logo from "./assets/images/logo.jpg";
function Navbar() {
  // const logo = "https://t4.ftcdn.net/jpg/05/21/49/97/240_F_521499703_1g0lqIsz7yXKeBu7gwFQXWaMwBMzWYkM.jpg"
  const[isMobile,setismobile]=useState(false);


  return (
    <nav className='nv'>
      {/* <div className='logo'>ASP</div>  <img src="./logo.jpg"  ></img>*/}
      {/* <div><img src='./images/logo.jpg' className='logo' ></img></div> */}
      <div className='logo'>PORT</div>
      <div className={!isMobile?'menulist':'menulist-mobile hbicon'}onClick={()=>setismobile(false)}>
      <div > <Link className='menuitem' to={"/"}>Home</Link></div>
      <div  > <Link className='menuitem'to="/about" >About</Link></div>
      <div  > <Link className='menuitem'to="/portfolio">Projects</Link></div>
      <div  > <Link className='menuitem' to="/clients">Clients</Link></div>
      <div  > <Link className='menuitem' to="/skill">Skills</Link></div>
      {/* <div className='nbmain'><button className='nb'> <FaRegMessage className='nbicon' />Contact Me</button></div> */}
        <div className=' nbmain' ><Link to="/contact"><button className='nb'>  <FaRegMessage className='nbicon' />Contact Me</button></Link></div>
        
      </div>
     
      {isMobile?<div className='hbicon' onClick={()=>setismobile(false)}>X</div>:<div className='hbicon' onClick={()=>setismobile(true)}>☰</div>}
      
      
    </nav>
  )
}

export default Navbar;
