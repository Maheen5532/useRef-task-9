import { useRef } from "react";
import "./App.css"; // External CSS for styling

export default function CustomVideoPlayer() {
  const videoRef = useRef(null); // Reference to the video element

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="video-container">
      <h2>Custom Video Player</h2>
      <video ref={videoRef} className="video" width="600" controls>
        <source src="video/Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="controls">
        <button className="button play" onClick={handlePlay}>Play</button>
        <button className="button pause" onClick={handlePause}>Pause</button>
      </div>
    </div>
  );
}
