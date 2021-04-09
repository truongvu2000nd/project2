import React from "react";

export default function SearchTable({ songs, addSong2Queue }) {
  /*const songs = [
    {
      id: 1,
      title: "Trying",
      artist: "Leo",
      file: "http://localhost:8000/media/musics/Leo_-_Trying.mp3",
      image: "http://localhost:8000/media/imgs/trying-album-cover_A6ClXRl.jpg",
      genre: "Pop",
    },
    {
      id: 2,
      title: "Rock Star",
      artist: "Post Malone",
      file:
        "http://localhost:8000/media/musics/Post_Malone_-_rockstar_ft._21_Savage_1_PtrFFys.mp3",
      image: "http://localhost:8000/media/imgs/postmalone_mKFCSuO.jpg",
      genre: "Rock",
    },
  ]; */

  const songList = songs.map((song) => (
    <tr className="search-song" onClick={() => addSong2Queue(song)}>
      <td>{song.title}</td>
      <td>{song.artist}</td>
      <td>n/a</td>
    </tr>
  ));

  return (
    <table className="search-table">
      <tr>
        <th>TITLE</th>
        <th>ARTIST</th>
        <th>DURATION</th>
      </tr>
      {songList}
    </table>
  );
}
