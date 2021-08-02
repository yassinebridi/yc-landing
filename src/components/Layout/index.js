import React from "react";
// import "../Fontawesome";
// import "../../assets/scss/bootstrap.scss"
// import "../../../node_modules/slick-carousel/slick/slick.css";
// import "../../../node_modules/react-modal-video/scss/modal-video.scss";
// import "../../../node_modules/swiper/swiper.scss";
// import "../../assets/scss/main.scss"
// import "../../assets/scss/react-scss.scss"

// import "../../assets/fonts/fontawesome-5/css/all.min.css"
export default function Layout({ children }) {
  return (
    <div className="layout">
      {/* <Nav /> */}
      {children}
      {/* <Footer /> */}
    </div>
  )
}
