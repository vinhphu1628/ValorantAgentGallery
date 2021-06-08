import { Fragment } from "react";
import "./styles.css";
import Thumbnail from "./Thumbnail";

function ThumbnailViewer(props) {
  return (
    <Fragment>
      <div className="thumbnailViewer">
        {props.imgData.map((value) => {
          return (
            <Thumbnail
              {...value}
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
