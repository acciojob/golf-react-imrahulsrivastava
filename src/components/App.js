import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [showBall, setShowBall] = useState(false);
  const [ballPosition, setBallPosition] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      setBallPosition((prev) => prev + 5);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleStartButton = () => setShowBall(true);

  const renderBallOrButton = () =>
    showBall ? (
      <div className="ball" style={{ left: ballPosition + "px" }}>
        ball
      </div>
    ) : (
      <button onClick={handleStartButton} className="start">
        start
      </button>
    );

  return <div className="playground">{renderBallOrButton()}</div>;
};

export default App;
