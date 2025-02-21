import React, { useRef, useState } from 'react'
import "./Contact.css"

import emailjs from '@emailjs/browser';
function Contact() {
    const [form_name,setname]=useState('')
    const [form_email,setemail]=useState('')
    const [msg,setmsg]=useState('')
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8d96t4o', 'template_i6pit9d', form.current, {
        publicKey: 'B9gjQEZLnpl14zDwF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log(`${form_name}is name ${form_email} is email and ${msg} is message`)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
   
    <div className='contact'>
      <h1 style={{textAlign:"center", marginTop:"20px"}}>Get In Touch.</h1>
      <div className='contactbox'>
      <div><img src="https://static.vecteezy.com/system/resources/previews/016/006/527/non_2x/email-service-with-correspondence-delivery-electronic-mail-message-and-business-marketing-in-flat-cartoon-hand-drawn-templates-illustration-vector.jpg" alt="" className='contactimg'/></div>
      <div className='contactform'>
      <form ref={form} onSubmit={sendEmail} className='contactdata'>
      {/* <label style={{color:"black"}}>Name</label> */}
      <input type="text" name="from_name" onChange={(e)=>setname(e.target.value)} value={form_name} placeholder='Name'className='field'required/>
      {/* <label style={{color:"black"}}>Email</label> */}
      <input type="email" name="from_email" onChange={(e)=>setemail(e.target.value)} value={form_email} placeholder='Email' className='field' required />
      {/* <label style={{color:"black"}} >Message</label> */}
      <textarea name="message" onChange={(e)=>setmsg(e.target.value)} value={msg}  placeholder='Message' className='field field2'required/>
     
      <input type="submit" value="Send" className='field btn' />
    </form>
      
      </div>
      </div>
     
    </div>
  )
}

export default Contact
