import React from "react";
import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const returnImages = props.data.colorOptions.map((item, pos) => {
    let classArr = [classes.ProductImage];
    if (pos === props.currentPos) {
      classArr.push(classes.selectedProductImage);
    }
    return (
      <img
        key={pos}
        onClick={() => props.updateCurrentPreviewImage(pos)}
        className={classArr.join(" ")}
        src={item.imageUrl}
        alt=""
      ></img>
    );
  });

  const returnButton = props.data.featureList.map((item, pos) => {
    let btnArray = [classes.featureItem];
    if (pos === props.btnNo) {
      btnArray.push(classes.featureItemSelected);
    }
    return (
      <button
        onClick={() => props.updateButtons(pos)}
        className={btnArray.join(" ")}
      >
        {item}
      </button>
    );
  });
  return (
    <div className={classes.details}>
      <p className={classes.productTitle}>{props.data.title}</p>
      <p className={classes.productDisc}>{props.data.description}</p>
      <h2>Select Color</h2>
      <div class={classes.imageSelectDiv}>{returnImages}</div>
      <h2 className={classes.features}>Features</h2>
      {returnButton}
      <br></br>
      <button className={classes.featureItem}>Buy Now</button>
      <button></button>
    </div>
  );
};

export default ProductDetails;
