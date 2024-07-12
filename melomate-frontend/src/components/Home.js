import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const App = () => {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/songs")
      .then((response) => setSongs(response.data))
      .catch((error) => console.error("Error fetching songs:", error));
  }, []);

  const handleSongChange = (event) => {
    setSelectedSong(event.target.value);
  };

  const getRecommendations = () => {
    axios
      .post("http://localhost:5000/recommend", { song: selectedSong })
      .then((response) => setRecommendations(response.data))
      .catch((error) =>
        console.error("Error fetching recommendations:", error)
      );
  };

  return (
    <div className="container">
      <h1>MeloMate - Your Musical Soul Companion</h1>
      <div>
      <select value={selectedSong} onChange={handleSongChange}>
        <option value="" disabled>
          Select a song
        </option>
        {songs.map((song, index) => (
          <option key={index} value={song}>
            {song}
          </option>
        ))}
      </select>
      </div>
      <button type="button" className="btn btn-light" onClick={getRecommendations}>Get Recommendations</button>
      <div className="recommendations">
        {recommendations.map((rec, index) => (
          <div key={index} className="recommendation">
            <img src={rec.album_cover_url} alt={rec.name} />
            <p>{rec.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
