import { useEffect } from "react";

function Timer({ dispatch, secondsRemaing }) {
  const mins = Math.floor(secondsRemaing / 60);
  const seconds = secondsRemaing % 60;
  useEffect(() => {
    const id = setInterval(function () {
      //   console.log("tick");
      dispatch({ type: "tick" });
    }, 1000);
    return function () {
      clearInterval(id); //cleanup function
    };
  }, [dispatch]);
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}
      {seconds < 10 && "0"}:{seconds}
    </div>
  );
}

export default Timer;
