import React, { useState } from "react"
import Slider from "react-slick"
import { sliderImageVertiacl, sliderImageMain } from "./SlideData"
export default function ProductSliders() {
  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()

  const vertiaclSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    vertical: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          vertical: false,
        },
      },
    ],
  }
  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  }
  return (
    <div className="col-xl-6 col-lg-6 col-md-10 col-sm-10">
      <div className="row">
        <div className="col-xl-2 col-lg-3 col-md-2 order-md-1 order-2">
          <Slider
            className="product-details-vertical-slider"
            asNavFor={nav2}
            ref={slider => setNav1(slider)}
            {...vertiaclSliderSettings}
          >
            {sliderImageVertiacl.map(({ image, id }) => {
              return (
                <div className="single-slide focus-reset" key={id}>
                  <img className="w-100" src={image} alt="slide" />
                </div>
              )
            })}
          </Slider>
        </div>
        <div className="col-xl-10 col-lg-9 col-md-10 order-md-2 order-1">
          <Slider
            className="product-details-slider"
            asNavFor={nav1}
            ref={slider => setNav2(slider)}
            {...mainSliderSettings}
          >
            {sliderImageMain.map(({ image, id }) => {
              return (
                <div className="single-slide focus-reset" key={id}>
                  <img className="w-100" src={image} alt="slide main" />
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}
