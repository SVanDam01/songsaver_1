import React, { useState } from "react";
import { nanoid } from "nanoid";
import AddSong from "../components_container/AddSong.js";
import SongOverview from "../components_container/SongOverview.js";
import Header from "../components_container/Header.js";

function Container({ songs, setSongs }) {
  // ** SET STATE FOR THE LAYOUT SORTING COLUMN ** //
  const [sorted, setSorted] = useState({
    name: "id",
    arrow: "-",
    reversed: false,
  });

  // // ** SET STATE FOR FILTERED & SORTING SONGS ** //
  const [filterGenre, setFilteredGenre] = useState("");
  const [columnName, setcolumnName] = useState("id");

  const filteredSongs = songs.filter((song) => {
    if (filterGenre === "") {
      return songs;
    }
    return song.genre === filterGenre;
  });

  const displaySongs = filteredSongs.sort((songA, songB) => {
    if (sorted.reversed) {
      return songB[columnName].localeCompare(songA[columnName]);
    }
    return songA[columnName].localeCompare(songB[columnName]);
  });

  // ** SET FUNCTION FOR ADDING SONG ** //
  function onSubmit(inputData) {
    const newInputData = { ...inputData, id: nanoid() };
    const newSongs = [...songs, newInputData];
    setSongs(newSongs);
  }

  // ** SET FUNCTION FOR SORTING CLICKED COLUMN ** //
  function sortColumn(event) {
    const columnName = event.target.getAttribute("name").toLowerCase();
    setcolumnName(columnName);
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

  // ** SET FUNCTION FOR DELETING SONG ** //
  function handleDelete(songid) {
    const newSongs = [...songs];
    const index = newSongs.findIndex((song) => song.id === songid);
    newSongs.splice(index, 1);
    setSongs(newSongs);
  }

  // ** SET FUNCTION FOR FILTER GENRE ** //
  function handleFilter(genre) {
    setFilteredGenre(genre);
    setSorted({ name: "", arrow: "-", reversed: false });
  }

  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <AddSong onSubmit={onSubmit} handleFilter={handleFilter} />
        <SongOverview
          displaySongs={displaySongs}
          sortColumn={sortColumn}
          sorted={sorted}
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
}

export default Container;
