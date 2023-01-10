import React, { useState } from "react";
import AddSong from "../components_container/AddSong.js";
import SongOverview from "../components_container/SongOverview.js";
import Header from "../components_container/Header.js";

function Container({ onSubmit, songs, setSongs }) {
  // ** SET STATE FOR THE LAYOUT SORTING COLUMN ** //
  const [sorted, setSorted] = useState({
    name: "id",
    arrow: "-",
    reversed: false,
  });

  // ** SET FUNCTION FOR SORTING CLICKED COLUMN ** //
  function sortByTitle(event) {
    const columnName = event.target.getAttribute("name");
    const songsCopy = [...songs];
    songsCopy.sort((songA, songB) => {
      if (sorted.reversed) {
        return songB[columnName].localeCompare(songA[columnName]);
      }
      return songA[columnName].localeCompare(songB[columnName]);
    });
    function sortingSongs(songsCopy) {
      setSongs(songsCopy);
    }
    sortingSongs(songsCopy);
    defaultReversed(columnName);
  }

  // ** SET FUNCTION FOR CHECK PREVIOUS & CURRENT STATE ClICKED COLUMN ** //
  function defaultReversed(columnName) {
    const name = columnName;
    if (name === sorted.name) {
      setArrow(name);
    } else {
      setSorted({ name: name, arrow: "-", reversed: false });
      setArrow(name);
    }
  }

  // ** SET FUNCTION FOR DETERMINE STATE & ARROW TYPE FOR ClICKED COLUMN ** //
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
