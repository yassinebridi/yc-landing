import React from "react"
import Video from '../../../components/VideoModal'
import VideoBackground from "../../../assets/image/landing-7/video-bg.png"
const VideoSection = ({ ...rest }) => {
  return (
    <>
      {/* Video Area */}
      <div
        className="career-video-area bg-position aos-init aos-animate"
        style={{ background: `url(${VideoBackground})` }}
        data-aos="zoom-in"
        data-aos-duration={800}
        data-aos-once="true"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="career-video-icon text-center">
              <Video id="9yc1lfFZX-I" className="video-icon"><i className="fas fa-play" /></Video>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoSection
