import { React, useState } from "react";
import "./styles/app.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import data from "./util";

function App() {
  const [songs, setSong] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>

      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
