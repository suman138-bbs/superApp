import React from "react";
import style from "./dashbord.module.css";
import Profile from "../../components/profile/profile.component";
import Weather from "../../components/weather/weather.component";
import News from "../../components/news/news.component";
import Note from "../../components/note/note.component";
import Timer from "../../components/timer/timer.component";
import { Link } from "react-router-dom";
const Dashbord = () => {
  return (
    <>
      <div className={style.dashbordContainer}>
        <div className={style.first}>
          <Profile />
        </div>
        <div className={style.second}>
          <Note />
        </div>
        <div className={style.third}>
          <News />
        </div>
        <div className={style.fourth}>
          <Timer />
        </div>
        <div className={style.fifth}>
          <Weather />
        </div>
      </div>
      <div className={style.browseBtn}>
        <Link to="/entertainment">
          <button>Browse</button>
        </Link>
      </div>
    </>
  );
};

export default Dashbord;
