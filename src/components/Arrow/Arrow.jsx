import "./arrowStyles.css";

function Arrow(props) {
  const { onClick, src, alt } = props;

  return (
    <button className="arrow" onClick={onClick}>
      <img src={src} alt={alt}></img>
    </button>
  );
}

export default Arrow;
