import { useEffect, useState } from "react";
import style from "./timer.module.css";
import UpBtn from "../../assets/UpBtn.svg";
import DownBtn from "../../assets/DownBtn.svg";
import CountDown from "../countdown/count.component";

const Timer = () => {
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [seconds, setSecond] = useState("00");
  const [flag, setFlag] = useState(false);
  const [TSecond, setTSecond] = useState(0);
  const [timerVal, setTimerVal] = useState(0);
  const incrementHours = () => {
    let h = Number(hour);
    h = h + 1;
    if (h > 99) {
    } else if (h < 10) {
      setHour(String(`0` + `${h}`));
    } else {
      setHour(String(h));
    }
  };
  const decrementHours = () => {
    let h = Number(hour);
    h = h - 1;
    if (h < 0) {
    } else if (h < 10) {
      setHour(String(`0` + `${h}`));
    } else {
      setHour(String(h));
    }
  };
  const incrementMinute = () => {
    let m = Number(minute);
    m = m + 1;
    if (m > 99) {
    } else if (m < 10) {
      setMinute(String(`0` + `${m}`));
    } else {
      setMinute(String(m));
    }
  };
  const decrementMinutes = () => {
    let m = Number(minute);
    m = m - 1;
    if (m < 0) {
    } else if (m < 10) {
      setMinute(String(`0` + `${m}`));
    } else {
      setMinute(String(m));
    }
  };
  const incrementSecond = () => {
    let s = Number(seconds);
    s = s + 1;
    if (s > 99) {
    } else if (s < 10) {
      setSecond(String(`0` + `${s}`));
    } else {
      setSecond(String(s));
    }
  };
  const decrementSecond = () => {
    let s = Number(seconds);
    s = s - 1;
    if (s < 0) {
    } else if (s < 10) {
      setSecond(String(`0` + `${s}`));
    } else {
      setSecond(String(s));
    }
  };
  const stopTimer = () => {
    setFlag(!flag);
    setTSecond(0);
    setHour("00");
    setMinute("00");
    setSecond("00");
    setTimerVal(0);
  };
  const startTimer = () => {
    const ho = Number(hour);
    const mi = Number(minute);
    const sec = Number(seconds);
    console.log(`Time in ${hour}:${minute}:${seconds}`);
    console.log(`Time in ${typeof ho}:${typeof mi}:${typeof sec}`);

    setTSecond(ho * 60 * 60 + mi * 60 + sec);
  };
  console.log("Time in second", TSecond);
  useEffect(() => {
    if (TSecond > 0) {
      setFlag(!flag);
      setTimerVal(TSecond);
    }
  }, [TSecond]);
  console.log("Timer Value", timerVal);
  return (
    <div className={style.stopwatchMain}>
      <div className={style.CountDown}>
        <CountDown timerVal={timerVal} />
      </div>
      <div className={style.stopWatchContainer}>
        <div className={style.textContaner}>
          <p>Hours</p>
          <p>Minutes</p>
          <p>Second</p>
        </div>
        <div className={style.buttonContainer}>
          <button
            onClick={() => {
              incrementHours();
            }}
          >
            <img src={UpBtn} alt="" srcset="" />
          </button>
          <button
            onClick={() => {
              incrementMinute();
            }}
          >
            <img src={UpBtn} alt="" srcset="" />
          </button>
          <button
            onClick={() => {
              incrementSecond();
            }}
          >
            <img src={UpBtn} alt="" srcset="" />
          </button>
        </div>
        <div className={style.timeTextContainer}>
          <p>{hour}</p>
          <p>:</p>
          <p>{minute}</p>
          <p>:</p>
          <p>{seconds}</p>
        </div>
        <div className={style.buttonContainer}>
          <button
            onClick={() => {
              decrementHours();
            }}
          >
            <img src={DownBtn} alt="" srcset="" />
          </button>
          <button
            onClick={() => {
              decrementMinutes();
            }}
          >
            <img src={DownBtn} alt="" srcset="" />
          </button>
          <button
            onClick={() => {
              decrementSecond();
            }}
          >
            <img src={DownBtn} alt="" srcset="" />
          </button>
        </div>
        <div className={style.startStop}>
          {flag ? (
            <button
              onClick={() => {
                stopTimer();
              }}
            >
              Stop
            </button>
          ) : (
            <button
              onClick={() => {
                startTimer();
              }}
            >
              Start
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timer;
