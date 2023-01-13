function SongOverview({ displaySongs, sortColumn, sorted, handleDelete }) {
  // ** SET HEADERNAMES ** //
  const headers = ["Song", "Artist", "Genre", "Rating", "Delete"];

  // ** SET HEADERNAMES FOR EACH COLUMN ** //
  const headerList = headers.map((header) => (
    <th key={header.toString()} className="song-header__item">
      {header}
      <button
        name={header.toLowerCase()}
        onClick={sortColumn}
        className="sort-button"
      >
        {sorted.name === header.toLowerCase() ? sorted.arrow : "-"}
      </button>
    </th>
  ));

  // ** SET SONGS FOR EACH ROW ** //
  const songList = displaySongs.map((song) => (
    <tr key={song.id} className="song__list">
      <td className="song__item">{song.song} </td>
      <td className="song__item">{song.artist} </td>
      <td className="song__item">{song.genre} </td>
      <td className="song__item">{song.rating} </td>
      <td className="flex-del">
        <button
          onClick={() => handleDelete(song.id, song.genre)}
          name="delete"
          type="button"
          id="delButton"
        >
          delete
        </button>
      </td>
    </tr>
  ));

  return (
    // ** SET TABLE ** //
    <div>
      <table>
        <thead className="song-header">
          <tr>{headerList}</tr>
        </thead>
        <tbody>{songList}</tbody>
      </table>
    </div>
  );
}

export default SongOverview;
