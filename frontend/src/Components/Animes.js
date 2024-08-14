import Anime from "./Anime";
import { useEffect, useState } from "react";

function Animes() {
  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data

  const API = process.env.REACT_APP_API;

  const [animes, setAnimes] = useState([]);

  //call to API to get all animes
  useEffect(() => {
    fetch(`${API}/animes`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setAnimes(res)
      })
      .catch(error => console.log(error))
  }, []);


  return (
    <section className="index" id="anime-list">
      <div>
        {animes.map(anime => (
          <Anime key={anime.id} anime={anime} />
        ))}
      </div>

    </section>
  );
}

export default Animes;
