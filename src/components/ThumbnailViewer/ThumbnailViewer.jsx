import { Fragment } from "react";
import Thumbnail from "./Thumbnail";
import "./thumbnailStyles.css";

function ThumbnailViewer(props) {
  return (
    <Fragment>
      <div className="thumbnailViewer">
        {props.imgData.map((value, idx) => {
          return (
            <Thumbnail
              {...value}
              key={idx}
              chosenIdx={props.chosenIdx}
              setChosenIdx={props.setChosenIdx}
            ></Thumbnail>
          );
        })}
      </div>
    </Fragment>
  );
}

export default ThumbnailViewer;
