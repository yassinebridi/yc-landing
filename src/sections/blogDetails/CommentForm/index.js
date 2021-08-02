import React from "react"

const CommentFormSection = () => {
  return (
    <>
      {/* Blog Comment Area  */}
      <div className="comment-area bg-catskillwhite">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10">
              <form action="#">
                <div className="comment-body">
                  <div className="comment-heading">
                    <h2>Leave a comment</h2>
                  </div>
                  <div className="comment-box">
                    <label htmlFor="message">Comment</label>
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Write your comment"
                      defaultValue={""}
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="name">Your name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="example@gmail.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="comment-btn">
                    <button className="btn focus-reset">Post Comment</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CommentFormSection;