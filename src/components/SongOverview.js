function SongOverview({ songs, sortByTitle, arrowsTable }) {
  const songList = songs.map((song) => (
    <tr key={song.id} className="song__list">
      <td className="song__item">{song.title} </td>
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
              <button
                name="title"
                onClick={sortByTitle}
                className="sort-button"
              >
                {arrowsTable.title}
              </button>
            </th>
            <th className="song-header__item">
              Artist
              <button
                name="artist"
                onClick={sortByTitle}
                className="sort-button"
              >
                {arrowsTable.artist}
              </button>
            </th>
            <th className="song-header__item">
              Genre
              <button
                name="genre"
                onClick={sortByTitle}
                className="sort-button"
              >
                {arrowsTable.genre}
              </button>
            </th>
            <th className="song-header__item">
              Rating
              <button
                name="rating"
                onClick={sortByTitle}
                className="sort-button"
              >
                {arrowsTable.rating}
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
