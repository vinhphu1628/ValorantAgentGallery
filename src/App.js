import { useEffect, useState } from "react";
import "./App.css";
import imgData from "./imgData";
import ImgViewer from "./components/ImgViewer/ImgViewer";
import ThumbnailViewer from "./components/ThumbnailViewer/ThumbnailViewer";

function App() {
  const [chosenIdx, setChosenIdx] = useState(0);
  const prevHandler = () => {
    let id = chosenIdx;
    if (id === 0) {
      id = imgData.length - 1;
    } else {
      id--;
    }
    setChosenIdx(id);
  };

  const nextHandler = () => {
    let id = chosenIdx;
    if (id === imgData.length - 1) {
      id = 0;
    } else {
      id++;
    }
    setChosenIdx(id);
  };

  const keyHandler = (event) => {
    if (event.key === "ArrowRight") {
      nextHandler();
    } else if (event.key === "ArrowLeft") {
      prevHandler();
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", keyHandler);

    return () => {
      document.removeEventListener("keyup", keyHandler);
    };
  });

  return (
    <div className="App">
      <h1>Valorant Agents</h1>
      <ImgViewer
        chosenImg={imgData[chosenIdx]}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      ></ImgViewer>
      <ThumbnailViewer
        imgData={imgData}
        chosenIdx={chosenIdx}
        setChosenIdx={setChosenIdx}
      ></ThumbnailViewer>
    </div>
  );
}

export default App;
