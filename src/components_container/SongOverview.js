function SongOverview({ songs, sortByTitle, sorted }) {
  // ** SET HEADERNAMES ** //
  const headers = ["song", "artist", "genre", "rating"];

  // ** SET HEADERNAMES FOR EACH COLUMN ** //
  const headerList = headers.map((header) => (
    <th key={header.toString()} className="song-header__item">
      {header}
      <button name={header} onClick={sortByTitle} className="sort-button">
        {sorted.name === header ? sorted.arrow : "-"}
      </button>
    </th>
  ));

  // ** SET SONGS FOR EACH ROW ** //
  const songList = songs.map((song) => (
    <tr key={song.id} className="song__list">
      <td className="song__item">{song.song} </td>
      <td className="song__item">{song.artist} </td>
      <td className="song__item">{song.genre} </td>
      <td className="song__item">{song.rating} </td>
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
