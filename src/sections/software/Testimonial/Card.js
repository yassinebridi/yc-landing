import React from 'react'
const TestimonialCard=({userImage,username,userPosition,text})=>{
    return(
     <>
     <div className="tesimonial-card">
     <div className="d-inline-flex">
       <img src={userImage} alt="testimonial" />
       <div className="reviewer-designation">
         <h4>{username}</h4>
         <span>{userPosition}</span>
       </div>
     </div>
     <div className="testimonial-body">
       <p>
       {text}
       </p>
       <div className="testimonial__star">
         <i className="fa fa-star" />
         <i className="fa fa-star" />
         <i className="fa fa-star" />
         <i className="fa fa-star" />
         <i className="fa fa-star" />
       </div>
     </div>
   </div>
     </>
    )
}


export default TestimonialCard;