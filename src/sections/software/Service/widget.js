
import React from 'react';




const Widget = ({icon,text,title,iconVariationColor,...rest}) => {
  return (
   <>
   {/* Services Area */}
        <div className="widget widget--service" data-aos="zoom-in" data-aos-duration={300} data-aos-once="true">
            <div className={`widget__icon widget__icon--${iconVariationColor}`}>
              <img src={icon} alt="service" />
            </div>
            <div className="widget__body">
              <h5 className="widget__heading">{title}</h5>
              <p dangerouslySetInnerHTML={{__html: text}} />
            </div>
         </div>
    {/*/ .Services Area */}
   </>
  )
}


export default Widget;
