import React from "react";

const Button = props => {
  return (
    <>
      <div className="btn">
        <div onClick={props.onClick} className={props.className}>
          {props.title}
        </div>
      </div>
    </>
  );
};

export default Button;
