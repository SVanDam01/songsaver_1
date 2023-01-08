import React, { useState } from "react";
import AddSong from "./AddSong.js";
import SongOverview from "./SongList.js";
import Header from "./Header.js";

function Container() {
  const [songs, setSongs] = useState([]);

  function onSubmit(inputData) {
    setSongs((prevSongs) => [...prevSongs, inputData]);
  }

  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <AddSong songs={songs} onSubmit={onSubmit} />
        <SongOverview songs={songs} />
      </main>
    </div>
  );
}

export default Container;
