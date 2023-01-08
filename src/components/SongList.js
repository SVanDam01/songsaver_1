function SongOverview({ songs }) {
  const songList = songs.map((song) => (
    <tr key={song.id}>
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
            <th className="song-header__item">Song</th>
            <th className="song-header__item">Artist</th>
            <th className="song-header__item">Genre</th>
            <th className="song-header__item">Rating</th>
          </tr>
        </thead>
        <tbody>{songList}</tbody>
      </table>
    </div>
  );
}

export default SongOverview;
