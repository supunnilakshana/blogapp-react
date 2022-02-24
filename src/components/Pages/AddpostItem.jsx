import React from "react";

const AddpostItem = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon bg-primary" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default AddpostItem;
