import React, { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation } from "swiper"
import Card from "./Card"
import backgroundImage from "../../../assets/image/landing-9/map.png"
import { TestimonialData } from "./data"

const TestimonialSection = () => {
  SwiperCore.use([Navigation])
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  return (
    <>
      {/* Testimonial Area */}
      <div
        className="testimonial-area"
        style={{ background: `url(${backgroundImage})` }}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4 col-lg-5 col-md-7">
              <div className="section__heading">
                <h2>Love from our customers.</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy.
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 col-md-5">
              <div className="swiper-navigation text-end">
                <span
                  className="swipe-prev focus-reset"
                  ref={navigationPrevRef}
                >
                  <i className="fas fa-arrow-left" />
                </span>
                <span
                  className="swipe-next focus-reset"
                  ref={navigationNextRef}
                >
                  <i className="fas fa-arrow-right" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div data-aos="zoom-in" data-aos-duration={800} data-aos-once="true">
            <Swiper
              navigation={{
                // Both prevEl & nextEl are null at render so this does not work
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onInit={swiper => {
                swiper.params.navigation.prevEl = navigationPrevRef.current
                swiper.params.navigation.nextEl = navigationNextRef.current
                swiper.navigation.update()
              }}
              loop={true}
              slidesPerView={"auto"}
              centeredSlides={true}
              spaceBetween={30}
              className="swiper-container testimonial--slider"
              breakpoints={{
                480: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1366: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              {TestimonialData.map(({userImage,username,userPosition,text},index) => {
                return (
                  <SwiperSlide key={index}>
                    <Card userImage={userImage} username={username} userPosition={userPosition} text={text}/>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialSection
