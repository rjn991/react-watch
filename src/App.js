import classes from "./App.module.css";
import ProductData from "./utils/ProductData";
import ProductPreview from "./productPreview/ProductPreview";
import ProductDetails from "./productDetails/ProductDetails";
import Topbar from "./topbar/Topbar";
import React, { Component } from "react";
class App extends Component {
  state = {
    ProductData: ProductData,
    currentPreviewImage: ProductData.colorOptions[0].imageUrl,
    btnNo: 0,
    currentPos: 0,
  };
  updateCurrentPreviewImage = (pos) => {
    const updatedPreview = ProductData.colorOptions[pos].imageUrl;
    this.setState({ currentPreviewImage: updatedPreview, currentPos: pos });
  };
  updateButtons = (btn) => {
    if (btn === 0) this.setState({ btnNo: 0 });
    else this.setState({ btnNo: 1 });
  };
  render() {
    return (
      <>
        <Topbar></Topbar>
        <div className={classes.mainContainer}>
          <div className={classes.watchFace}>
            <ProductPreview
              btnNo={this.state.btnNo}
              currentPos={this.state.currentPos}
              currentPreviewImage={this.state.currentPreviewImage}
              showHeartBeat={this.state.showHeartBeat}
            ></ProductPreview>
          </div>
          <ProductDetails
            btnNo={this.state.btnNo}
            updateButtons={this.updateButtons}
            currentPos={this.state.currentPos}
            updateCurrentPreviewImage={this.updateCurrentPreviewImage}
            data={this.state.ProductData}
          ></ProductDetails>
        </div>
      </>
    );
  }
}

export default App;
