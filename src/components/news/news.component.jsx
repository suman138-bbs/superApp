import style from "./news.module.css";
import { newsApiKey } from "../../utils/apikey";
import { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState("");
  useEffect(() => {
    const getNews = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApiKey}`
      );
      const data = await response.json();
      console.log("News", data);
      setNews(data?.articles[2]);
    };
    getNews();
  }, []);
  console.log(news.urlToImage);
  const containerStyle = {
    backgroundImage: `url(${news.urlToImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "20em",
    width: "27em",
    borderRadius: "1em",
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
  };
  return (
    <div style={{}} className={style.newsContainer}>
      <div style={containerStyle}>
        <h3>{news?.title}</h3>
        <h4>{}</h4>
      </div>
      <div className={style.description}>
        <p>{news?.description}</p>
      </div>
    </div>
  );
};

export default News;
