import React,{useState} from 'react'
import ModalVideo from 'react-modal-video'

const Video = ({id,className,children}) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={id} onClose={() => setOpen(false)} />

      <button className={`btn-reset${className?" "+className:""}`} onClick={()=> setOpen(true)}>{children}</button>
    </React.Fragment>
  )
}

export default Video;