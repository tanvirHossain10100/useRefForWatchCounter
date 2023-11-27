import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [showTime, setShowTime] = useState(true);
  const setTimer = useRef(0);
  const setTimer2 = useRef(0);
  const handleTime = () => {
    setShowTime(!showTime);
  };
  useEffect(() => {
    setInterval(() => {
      const currentTime = new Date();
      const formattedTime = currentTime.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        milisecond: "numeric",
        hour12: true,
      });
      setTimer.current.textContent = formattedTime;
    }, 1000);
  }, []);
  useEffect(() => {
    let timeInterver;
    console.log(showTime);
    if (showTime) {
      timeInterver = setInterval(() => {
        const getTime = setTimer.current.textContent;
        setTimer2.current.textContent = getTime;
      }, 1000);
    } else {
      clearInterval(timeInterver);
    }
    return () => clearInterval(timeInterver);
  }, [showTime]);
  console.log(showTime);

  return (
    <>
      <h2 ref={setTimer}>0</h2>
      <h2 ref={setTimer2}>0</h2>
      <button id="timeBtn" onClick={handleTime}>{showTime ? "Stop" : "Start"}</button>
    </>
  );
}

export default App;
