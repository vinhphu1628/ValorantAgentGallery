import { useState } from "react";

function Thumbnail(props) {
  const [mouseOver, setMouseOver] = useState(false);
  const [pos, setPos] = useState([]);

  const mouseOverHandler = (event) => {
    setPos([event.target.offsetLeft, event.target.offsetTop - 40]);
    setMouseOver(true);
  };

  const mouseLeaveHandler = (event) => {
    setMouseOver(false);
  };

  return (
    <div
      className="thumbnail"
      style={{
        borderColor: props.chosenIdx === props.id ? "orange" : "lightgrey",
      }}
    >
      {mouseOver ? (
        <div className="title" style={{ top: pos[1], left: pos[0] }}>
          {props.title}
        </div>
      ) : (
        ""
      )}
      <img
        onMouseOver={mouseOverHandler}
        onMouseLeave={mouseLeaveHandler}
        id={props.id}
        src={props.src}
        alt={props.title}
        onClick={(event) => {
          props.setChosenIdx(Number(event.target.id));
        }}
      ></img>
    </div>
  );
}

export default Thumbnail;
