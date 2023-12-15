import { CountdownCircleTimer } from "react-countdown-circle-timer";
import style from "./count.module.css";
import { useEffect, useState } from "react";
import Over from "../../assets/Over.mp3";
const CountDown = ({ timerVal }) => {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    setTimer(timerVal);
  }, [timerVal]);

  const playOver = () => {
    new Audio(Over).play();
  };

  return (
    <div className={style.CountDownContainer}>
      <div className={style.content}>
        <CountdownCircleTimer
          key={timerVal}
          isPlaying
          duration={timer}
          colors={"#FF6A6A"}
          size={120}
          strokeWidth={4}
          trailColor={"#000"}
          onComplete={() => {
            playOver();
            console.log("Hello From Timer");
          }}
        >
          {({ remainingTime }) => {
            let hours = Math.floor(remainingTime / 3600);
            let minutes = Math.floor((remainingTime % 3600) / 60);
            let seconds = remainingTime % 60;

            let formattedTime = `${String(hours).padStart(2, "0")}:${String(
              minutes
            ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

            return formattedTime;
          }}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default CountDown;
