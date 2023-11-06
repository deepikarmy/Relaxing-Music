import React, { useState } from "react";

function Card(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  function pauseAllAudio() {
    const allAudioElements = document.querySelectorAll("audio");
    allAudioElements.forEach((audioElement) => {
      if (audioElement !== audioRef.current) {
        audioElement.pause();
      }
    });
  }

  function handlePlay() {
    console.log("handlePlay called");
    pauseAllAudio();

    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }

  function handlePause() {
    console.log("handlePause called");
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }

  return (
    <div className="row">
      <div className="col px-1">
        <div className="card">
          <div className="card text-bg-dark">
            <div className="image-container">
              <img className="my-image" src={props.image} alt="" />
              <center>
                <button
                  onClick={isPlaying ? handlePause : handlePlay}
                  className="btn btn-outline-info btn-sm"
                >
                  <h1
                    style={{
                      fontFamily: "Microsoft Sans Serif",
                      fontSize: "3vw",
                    }}
                  >
                    {props.heading}
                    {isPlaying && audioRef.current ? (
                      <i className="bi bi-pause-fill"></i>
                    ) : (
                      <i className="bi bi-play-fill"></i>
                    )}
                  </h1>
                  <audio ref={audioRef} src={props.audio} loop></audio>
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
