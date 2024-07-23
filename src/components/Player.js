import React, { useRef, useState } from "react";
import { FaPlay, FaForward, FaBackward, FaPause } from "react-icons/fa";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);

  // state
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  // event
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
    });
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...setSongInfo,
      currentTime: e.target.value,
    })
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          type="range"
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragHandler}
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>

      <div className="player-control">
        <FaBackward />
        {isPlaying ? (
          <FaPause onClick={playSongHandler} />
        ) : (
          <FaPlay onClick={playSongHandler} />
        )}
        <FaForward />
      </div>

      <audio
        src={currentSong.audio}
        ref={audioRef}
        onTimeUpdate={timeUpdateHandler}
      ></audio>
    </div>
  );
};

export default Player;
