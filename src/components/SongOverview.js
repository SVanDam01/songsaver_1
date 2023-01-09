function SongOverview({ songs, sortByTitle, sorted }) {
  const songList = songs.map((song) => (
    <tr key={song.id} className="song__list">
      <td className="song__item">{song.song} </td>
      <td className="song__item">{song.artist} </td>
      <td className="song__item">{song.genre} </td>
      <td className="song__item">{song.rating} </td>
    </tr>
  ));

  return (
    <div>
      <table>
        <thead>
          <tr className="song-header">
            <th className="song-header__item">
              Song
              <button name="song" onClick={sortByTitle} className="sort-button">
                {sorted.name === "song" ? sorted.arrow : "-"}
              </button>
            </th>
            <th className="song-header__item">
              Artist
              <button
                name="artist"
                onClick={sortByTitle}
                className="sort-button"
              >
                {sorted.name === "artist" ? sorted.arrow : "-"}
              </button>
            </th>
            <th className="song-header__item">
              Genre
              <button
                name="genre"
                onClick={sortByTitle}
                className="sort-button"
              >
                {sorted.name === "genre" ? sorted.arrow : "-"}
              </button>
            </th>
            <th className="song-header__item">
              Rating
              <button
                name="rating"
                onClick={sortByTitle}
                className="sort-button"
              >
                {sorted.name === "rating" ? sorted.arrow : "-"}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>{songList}</tbody>
      </table>
    </div>
  );
}

export default SongOverview;
