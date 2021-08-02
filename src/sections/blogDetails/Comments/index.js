import React from "react"
import Card from './components/CommentCard'
import CommentUserImage from "../../../assets/image/blog/comment-author-1.png"
import CommentUserImage2 from "../../../assets/image/blog/comment-author-2.png"
const CommentSection = () => {
  return (
    <>
      {/* Blog All Comment Area  */}
      <div className="blog-comment-list-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-10">
              <div className="comment-list">
                <div className="comment-count">
                  <h2>05 Comments on this post</h2>
                </div>
                <Card image={CommentUserImage} date="20 Jun 2020" title="David Henricks" text="Well said! I think the point about changing companies is spot on and I’ve seen many friends double their salaries simply by jumping ship. I know companies hate that employees stay for so little time (in SF the average tenure is 1.5 years), but then they should make pay raises more significant."/>
                <Card image={CommentUserImage2} date="20 Jun 2020" title="David Henricks" text="Well said! I think the point about changing companies is spot on and I’ve seen many friends double their salaries simply by jumping ship. I know companies hate that employees stay for so little time (in SF the average tenure is 1.5 years), but then they should make pay raises more significant."/>
                <div className="comment-load-more-btn">
                  <button className="btn focus-reset">
                    Load more comments <i className="fas fa-caret-down" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CommentSection
