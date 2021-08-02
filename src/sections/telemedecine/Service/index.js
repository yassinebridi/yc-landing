
import React from 'react';
import imageOne from "../../../assets/image/home-1/services-shape-l1.png";
import ServiceData from "./data";
import Widget from "./widget";



const ServiceSection = ({...rest}) => {
  return (
   <>
   
   {/* Services Area */}
<div className="service-area service-area--l1 border-top border-default-color-2 bg-default">
  <div className="service-shape service-shape--l1">
    <img className="w-100" src={imageOne} alt="service" />
  </div>
  <div className="container">
    {/* Section Title */}
    <div className="row align-items-end justify-content-center">
      <div className="col-lg-7 col-md-12 col-xs-10">
        <div className="section-title" data-aos="fade-right" data-aos-duration={500} data-aos-once="true">
          <h2 className="section-title__heading">Your business needs a<br className="d-none d-xs-block d-lg-none d-xl-block" /> better shape today.</h2>
        </div>
      </div>
      <div className="col-lg-5 col-md-12 col-xs-10">
        <div className="section-title" data-aos="fade-left" data-aos-duration={500} data-aos-once="true">
          <p className="section-title__description">Create custom landing pages with <br className="d-none d-xs-block" /> Fastland that converts more
            visitors<br className="d-none d-sm-block" /> than any website. Easy &amp; Fast.</p>
        </div>
      </div>
    </div>
    {/*/ .Section Title */}
    <div className="service-items">
      <div className="row justify-content-center justify-content-sm-start">
        {/* Single Service */}
          {ServiceData.map((item,index) => {
            return(
                <div className="col-lg-4 col-sm-6 col-10" key={index}>
                  <Widget icon={item.icon} title={item.title} text={item.text} iconVariationColor={item.iconVariationColor}/>
                </div>
              )
          } )}
      </div>
    </div>
  </div>
</div>
{/*/ .Services Area */}

   </>
  )
}


export default ServiceSection;
