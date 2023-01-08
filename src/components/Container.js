import React, { useState, useEffect } from "react";
import AddSong from "./AddSong.js";
import SongOverview from "./SongOverview.js";
import Header from "./Header.js";

function Container() {
  const [songs, setSongs] = useState([]);
  const [sorted, setSorted] = useState({ sorted: "default", reversed: false });
  const [arrowsTable, setArrowsTable] = useState({
    title: "-",
    artist: "-",
    genre: "-",
    rating: "-",
  });

  useEffect(() => {
    switch (sorted.sorted) {
      case "title":
        if (sorted.reversed) {
          setArrowsTable({ title: "↓", artist: "-", genre: "-", rating: "-" });
        } else {
          setArrowsTable({ title: "↑", artist: "-", genre: "-", rating: "-" });
        }
        break;
      case "artist":
        if (sorted.reversed) {
          setArrowsTable({ title: "-", artist: "↑", genre: "-", rating: "-" });
        } else {
          setArrowsTable({ title: "-", artist: "↓", genre: "-", rating: "-" });
        }
        break;
      case "genre":
        if (sorted.reversed) {
          setArrowsTable({ title: "-", artist: "-", genre: "↑", rating: "-" });
        } else {
          setArrowsTable({ title: "-", artist: "-", genre: "↓", rating: "-" });
        }
        break;
      case "rating":
        if (sorted.reversed) {
          setArrowsTable({ title: "-", artist: "-", genre: "-", rating: "↑" });
        } else {
          setArrowsTable({ title: "-", artist: "-", genre: "-", rating: "↓" });
        }
        break;
    }
  }, [sorted]);

  function onSubmit(inputData) {
    const newInputData = { ...inputData, id: songs.length + 1 };
    setSongs((prevSongs) => [...prevSongs, newInputData]);
  }

  function sortByTitle(event) {
    const name = event.target.getAttribute("name");
    const songsCopy = [...songs];
    songsCopy.sort((songA, songB) => {
      switch (name) {
        case "title":
          if (sorted.reversed) {
            return songB.title.localeCompare(songA.title);
          }
          return songA.title.localeCompare(songB.title);
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
      }
    });
    setSongs(songsCopy);
    setSorted({ sorted: name, reversed: !sorted.reversed });
  }

  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <AddSong onSubmit={onSubmit} />
        <SongOverview
          songs={songs}
          sortByTitle={sortByTitle}
          arrowsTable={arrowsTable}
        />
      </main>
    </div>
  );
}

export default Container;
