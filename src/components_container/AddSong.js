import React, { useState } from "react";

function AddSong({ onSubmit, handleFilter }) {
  // ** SET STATE FOR INPUT SONG ** //
  const [inputData, setInputData] = useState({
    id: "",
    song: "",
    artist: "",
    genre: "",
    rating: "",
    delete: "delete",
  });

  // ** SET STATE FOR FILTER SONG ** //
  const [filterGenre, setFilterGenre] = useState("");

  // ** SET FUNCTION FOR COLLECT ALL INPUTFIELDS OF THE SONG ** //
  function handleChange(event) {
    const { name, value } = event.target;
    setInputData((prevInputData) => ({
      ...prevInputData,
      [name]: value,
    }));
  }

  // ** SET FUNCTION FOR CHECKING ALL INPUTFIELDS FOR INPUT, SUBMIT THE INPUT & RESET STATE OF THE INPUT ** //
  function onButtonPress(event) {
    event.preventDefault();
    if (
      inputData.song === "" ||
      inputData.artist === "" ||
      inputData.genre === "" ||
      inputData.rating === ""
    ) {
      alert("All fields are required");
    } else {
      onSubmit(inputData);
      setInputData({
        id: "",
        song: "",
        artist: "",
        genre: "",
        rating: "",
        delete: "delete",
      });
    }
  }

  // ** SET FUNCTION FOR SUBMITING FILTER  ** //
  function inputFilter(event) {
    event.preventDefault();
    const filter = event.target.value;
    handleFilter(filter);
    setFilterGenre(filter);
  }

  function handleReset() {
    handleFilter("");
    setFilterGenre("");
  }

  return (
    // ** SET INPUTFIELDS ** //
    <div>
      <form className="input-bar">
        <input
          type="text"
          name="song"
          placeholder="Title of the song"
          value={inputData.song}
          onChange={handleChange}
        />
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          value={inputData.artist}
          onChange={handleChange}
        />
        <select
          name="genre"
          id="genre"
          value={inputData.genre}
          onChange={handleChange}
        >
          <option value="">Choose a genre</option>
          <option value="rock">Rock</option>
          <option value="jazz">Jazz</option>
          <option value="pop">Pop</option>
          <option value="dance">Dance</option>
        </select>
        <select
          name="rating"
          id="rating"
          value={inputData.rating}
          onChange={handleChange}
        >
          <option value="">Choose a rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="button" id="addButton" onClick={onButtonPress}>
          Add song
        </button>
      </form>
      <div className="filterFunction">
        <label name="filter">Filter genre:</label>
        <select
          value={filterGenre}
          name="filter"
          id="filter"
          onChange={inputFilter}
        >
          <option value="">filter a genre</option>
          <option value="rock">Rock</option>
          <option value="jazz">Jazz</option>
          <option value="pop">Pop</option>
          <option value="dance">Dance</option>
        </select>
        <button type="button" id="addButton" onClick={handleReset}>
          Reset filter
        </button>
      </div>
    </div>
  );
}

export default AddSong;
