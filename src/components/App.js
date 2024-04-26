import React, { useEffect, useState } from "react";
import "../styles/App.css";

function App() {
  const [showBall, setShowBall] = useState(false);
  const [ballPosition, setBallPosition] = useState(0);

  const RenderChoice = () =>
    showBall ? (
      <div className="ball" style={{ left: ballPosition + "px" }}></div>
    ) : (
      <button className="start" onClick={buttonClickHandler}>
        start
      </button>
    );

  const buttonClickHandler = () => setShowBall(!showBall);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight" || e.keyCode === 39) {
      setBallPosition((position) => position + 5);
    } else if (e.key === "ArrowLeft" || e.keyCode === 37) {
      setBallPosition((position) => position - 5);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="playground">
      <RenderChoice />
    </div>
  );
}

export default App;
