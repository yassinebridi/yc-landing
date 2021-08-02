import React from "react"
import Video from "../../../components/VideoModal"
import VideoBg from "../../../assets/image/career/career-video-bg.png"
const VideoSection = () => {
  return (
    <>
      {/* Career video Area */}
<div className="career-video-area bg-position" style={{background: `url(${VideoBg})`}} data-aos="zoom-in" data-aos-duration={800} data-aos-once="true">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="career-video-icon text-center">
          <Video className="video-icon" data-fancybox id="9yc1lfFZX-I"><i className="fas fa-play" /></Video>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default VideoSection;
