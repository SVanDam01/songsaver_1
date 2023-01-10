import React, { useState } from "react";
import Container from "./pages/Container.js";
import { Route, Routes, NavLink } from "react-router-dom";
import About from "./pages/About.js";
import NotFound from "./pages/NotFound.js";

function App() {
  // ** SETSTATE HERE TO PREFEND LOSING STATE WHEN NAVIGATE ** //
  const [songs, setSongs] = useState([]);

  function onSubmit(inputData) {
    const newInputData = { ...inputData, id: songs.length + 1 };
    setSongs((prevSongs) => [...prevSongs, newInputData]);
  }

  return (
    // ** SETUP NAVBAR & ROUTE ** //
    <>
      <nav>
        <ul className="flex">
          <li>
            <NavLink to="/">Home</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Container songs={songs} setSongs={setSongs} onSubmit={onSubmit} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
