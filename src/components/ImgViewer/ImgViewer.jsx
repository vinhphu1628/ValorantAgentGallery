import { Fragment } from "react";
import "./styles.css";
import prevArrow from "../../assests/prevArrow.png";
import nextArrow from "../../assests/nextArrow.png";

function ImgViewer(props) {
  const { chosenImg, prevHandler, nextHandler } = props;

  return (
    <Fragment>
      <div className="imgViewer">
        <div className="wrapper">
          <button className="arrow" onClick={prevHandler}>
            <img src={prevArrow} alt="previous-arrow"></img>
          </button>
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
          <button className="arrow" onClick={nextHandler}>
            <img src={nextArrow} alt="next-arrow"></img>
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default ImgViewer;
