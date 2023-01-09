import React, { useState } from "react";
import AddSong from "./AddSong.js";
import SongOverview from "./SongOverview.js";
import Header from "./Header.js";

function Container() {
  const [songs, setSongs] = useState([]);
  const [sorted, setSorted] = useState({
    name: "id",
    arrow: "-",
    reversed: false,
  });

  function onSubmit(inputData) {
    const newInputData = { ...inputData, id: songs.length + 1 };
    setSongs((prevSongs) => [...prevSongs, newInputData]);
  }

  function sortByTitle(event) {
    const columnName = event.target.getAttribute("name");
    const songsCopy = [...songs];
    songsCopy.sort((songA, songB) => {
      switch (columnName) {
        case "song":
          if (sorted.reversed) {
            return songB.song.localeCompare(songA.song);
          }
          return songA.song.localeCompare(songB.song);
        case "artist":
          if (sorted.reversed) {
            return songB.artist.localeCompare(songA.artist);
          }
          return songA.artist.localeCompare(songB.artist);
        case "genre":
          if (sorted.reversed) {
            return songB.genre.localeCompare(songA.genre);
          }
          return songA.genre.localeCompare(songB.genre);
        case "rating":
          if (sorted.reversed) {
            return songB.rating.localeCompare(songA.rating);
          }
          return songA.rating.localeCompare(songB.rating);
        default:
      }
    });
    setSongs(songsCopy);
    defaultReversed(columnName);
  }

  function defaultReversed(columnName) {
    const name = columnName;
    if (name === sorted.name) {
      setArrow(name);
    } else {
      setSorted({ name: name, arrow: "-", reversed: false });
      setArrow(name);
    }
  }

  function setArrow(name) {
    if (sorted.reversed) {
      setSorted({ name: name, arrow: "↑", reversed: !sorted.reversed });
    } else {
      setSorted({ name: name, arrow: "↓", reversed: !sorted.reversed });
    }
  }

  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <AddSong onSubmit={onSubmit} />
        <SongOverview songs={songs} sortByTitle={sortByTitle} sorted={sorted} />
      </main>
    </div>
  );
}

export default Container;
