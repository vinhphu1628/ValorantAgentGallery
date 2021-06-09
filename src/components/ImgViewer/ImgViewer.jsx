import { Fragment } from "react";
import Arrow from "../Arrow/Arrow";
import "./imgViewerStyles.css";
import prevArrow from "../../assests/prevArrow.png";
import nextArrow from "../../assests/nextArrow.png";

function ImgViewer(props) {
  const { chosenImg, prevHandler, nextHandler } = props;

  return (
    <Fragment>
      <div className="imgViewer">
        <div className="wrapper">
          <Arrow
            onClick={prevHandler}
            src={prevArrow}
            alt="previous-arrow"
          ></Arrow>
          <div className="container">
            <div className="description">
              <h3>{chosenImg.title}</h3>
              <p>{chosenImg.description}</p>
            </div>
            <div className="background">
              <img
                className="chosenImg"
                src={chosenImg.src}
                alt={chosenImg.title}
              ></img>
            </div>
          </div>
          <Arrow onClick={nextHandler} src={nextArrow} alt="next-arrow"></Arrow>
        </div>
      </div>
    </Fragment>
  );
}

export default ImgViewer;
