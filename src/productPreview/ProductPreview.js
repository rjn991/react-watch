import React from "react";
import classes from "./ProductPreview.module.css";
const ProductPreview = (props) => {
  const getTime = () => {
    let date = new Date();
    return `${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    <div>
      <img src={props.currentPreviewImage} alt=""></img>
      {!props.btnNo ? (
        <div className={classes.overlay}>
          <p>{getTime()}</p>
        </div>
      ) : (
        <div className={classes.overlay2}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/640px-Heart_coraz%C3%B3n.svg.png"
            alt=""
          ></img>
          <p>98</p>
        </div>
      )}
    </div>
  );
};
export default ProductPreview;
