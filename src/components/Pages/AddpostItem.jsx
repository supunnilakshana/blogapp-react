import React from "react";
import PostForm from "./PostFrom";

const AddpostItem = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon bg-primary" onClick={props.handleClose}>
          x
        </span>
        <PostForm closeform={props.handleClose} />
      </div>
    </div>
  );
};

export default AddpostItem;
