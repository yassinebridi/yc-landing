import React from "react"

const data = [
  {
  icon:"fas fa-layer-group",
  iconBackground:"",
  title:"Easy Intragition",
  text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr love it"
},
  {
    icon:"far fa-comment",
    iconBackground:"card__icon__2",
    title:"Communication",
    text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr love it"
  },
  {
    icon:"fas fa-layer-group",
  iconBackground:"card__icon__3",
  title:"Fastest rate",
  text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr love it"
}
] 
const FeatureSection = ({ ...rest }) => {
  return (
  <div className="feature-area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8 col-md-9 col-sm-12">
          <div className="section__heading text-center">
            <h2>How it works</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore.</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 ">
          <div className="row justify-content-center featured-line">
           {data.map((item,key)=>{return(
              <div className="col-lg-4 col-md-6 col-sm-6 col-11" data-aos="fade-up" data-aos-duration={800} data-aos-once="true" key={key}>
              <div className="card feature--card text-center">
                <div className={`card__icon ${item.iconBackground}`}>
                <i className={item.icon} />
                  
                </div>
                <div className="card-body">
                  <div className="card__title">
                    <h4>{item.title}</h4>
                  </div>
                  <div className="card__content">
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
           )})}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FeatureSection
