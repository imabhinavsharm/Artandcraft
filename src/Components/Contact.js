import React,{useState} from 'react'
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router';
import '../contact.css'

const Contact = () => {
  let history = useHistory();
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [number, setnumber] = useState('')
  const [message, setmessage] = useState('')
  const [company, setcompany] = useState('')

  function sendEmail(e){
    e.preventDefault();
setname("")
setnumber("")
setemail("")
setmessage("")
setcompany("")

    emailjs.sendForm(
      'service_q4cphg8',
    'template_23h3hu8',
    e.target,
    "user_DIZtnDgkqdAYq00CXYgsv"
    ).then(res=>{
      console.log(res);
    }).catch(err=>console.log(err)
    )
    history.push('/thanks')
  }
    return (
       <>
       <div className="img-top">

       </div>


       <div className="main">
         <div className="main_inner">
           <div className="part1">
             <h4 className="headingcontact">For any querry please fill the form given below</h4>
           <form onSubmit={sendEmail}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" required  
    value={name}
     onChange={(e) => setname(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Contact Number</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="phoneNumber" required
     value={number}
     onChange={(e) => setnumber(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="user_email" required
     value={email}
     onChange={(e) => setemail(e.target.value)}
    />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Company</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="company" required
     value={company}
     onChange={(e) => setcompany(e.target.value)}
    />
    </div>
  <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Type your message here</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" name="message" required
   value={message}
   onChange={(e) => setmessage(e.target.value)}
  ></textarea>
</div>
  <button type="submit" className="btn btn-primary" style={{width:"50%"}}>Submit</button>
</form>
           </div>
           <div className="part2">
           <h2 className="headingcontact">Office </h2>
           <div className="part2_content">
             <h4>Address</h4>
             <p>JS Hospitality Services Pvt. <br/>
F-45, South City-1, Behind Unitech Business Park, <br/>
Gurugram-122001, Haryana, INDIA <br/>
 + 91-124-4830400  Timing(Monday to Saturday)</p>
           </div>
           <div className="part2_content">
             <h4>Feedback</h4>
           <p>+91-8527990104 <br/>
 feedback@pindballuchi.com</p>
           </div>
           <div className="part2_content">
             <h4>Career Opportunities</h4>
 <p>+91-8527990101<br/>
 hr@jshospitality.in</p>
         
           </div>
           </div>
         </div>
       </div>
     


       </>
    )
}

export default Contact
