import { useState, useEffect } from "react";
import style from "./entertainment.module.css";
import Rounded from "../../assets/Rounded.png";
import { Link } from "react-router-dom";

const Entertainment = () => {
  const [selectedItem, setSelectedItem] = useState([]);
  const [genreData, setGenreData] = useState({});

  useEffect(() => {
    const storedItem = localStorage.getItem("selectedItem");
    if (storedItem) {
      setSelectedItem(JSON.parse(storedItem));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "43dcdfb63ef043263b51235b65fbf1a8";
      const genreDataObject = {};

      for (const item of selectedItem) {
        const genreId = item.id;
        const data = await getData(apiKey, genreId);
        genreDataObject[genreId] = data.results.slice(0, 4);
      }

      setGenreData(genreDataObject);
    };

    fetchData();
  }, [selectedItem]);

  const getData = async (apiKey, genreId) => {
    try {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("An error occurred:", error);
      return { results: [] };
    }
  };
  console.log(genreData);
  return (
    <div className={style.entertainContainer}>
      <div className={style.headerContainer}>
        <p>Super app</p>
        <div>
          <Link to="/dashbord">
            <img src={Rounded} alt="" srcSet="" />
          </Link>
        </div>
      </div>
      <div className={style.heroContainer}>
        <p>Entertainment according to your choice</p>
        <div>
          {selectedItem.map((item) => (
            <div key={item.id}>
              <h3 className={style.nameHeader}>{item.name}</h3>
              <div className={style.movieItemContainer}>
                {genreData[item.id]?.map(({ original_title, poster_path }) => (
                  <div>
                    <p key={original_title}>{original_title}</p>
                    <div>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
