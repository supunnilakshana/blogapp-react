import React, { useState } from "react";
import AddpostItem from "./AddpostItem";
import PostForm from "./PostFrom";

function Post() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="container">
        <button className="btn btn-primary" onClick={togglePopup}>
          + Add Post
        </button>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header bg-primary">Title 1</div>
              <div className="card-body">
                <p>
                  content_--Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Facere, ipsam?
                </p>
              </div>
              <div className="row card-footer">
                <h6 className="col-6  text-muted">Email@gmail.com</h6>
                <h6 className="col-6 date">2022/02/24</h6>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3">
            <div className="card">
              <div className="card-header bg-primary">Title 2</div>
              <div className="card-body">
                <p>
                  content_--Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Facere, ipsam?
                </p>
              </div>
              <div className="row card-footer">
                <h6 className="col-6 text-muted">Email@gmail.com</h6>
                <h6 className="col-6 date">2022/02/24</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <AddpostItem
          content={
            <>
              <PostForm />
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default Post;
