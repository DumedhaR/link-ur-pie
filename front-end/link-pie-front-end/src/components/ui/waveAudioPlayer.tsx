import { useRef, useCallback, useState } from "react";
import { useWavesurfer } from "@wavesurfer/react";

const formatTime = (seconds: number) =>
  [seconds / 60, seconds % 60]
    .map((v) => `0${Math.floor(v)}`.slice(-2))
    .join(":");

// A React component that will render wavesurfer
const WaveAudioPlayer = () => {
  const containerRef = useRef(null);
  const [duration, setDuration] = useState(0);

  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    height: 100,
    waveColor: "rgb(200, 0, 200)",
    progressColor: "rgb(100, 0, 100)",
    url: "/demo_track_avicii.wav",
  });

  wavesurfer?.on("decode", (dur: number) => {
    setDuration(dur);
  });

  const onPlayPause = useCallback(() => {
    wavesurfer?.playPause();
  }, [wavesurfer]);

  return (
    <>
      <div ref={containerRef} />

      <p>Current time: {formatTime(currentTime)}</p>
      <p>Duration: {formatTime(duration)}</p>

      <div style={{ margin: "1em 0", display: "flex", gap: "1em" }}>
        <button onClick={onPlayPause} style={{ minWidth: "5em" }}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </>
  );
};

export default WaveAudioPlayer;
