import { useRef, useCallback, useState, useEffect } from "react";
import { useWavesurfer } from "@wavesurfer/react";
import { FiHeart, FiEye } from "react-icons/fi";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { AudioPlayerProp } from "@/types/types";
import { ChangeEvent } from "react";

const formatTime = (seconds: number) =>
  [seconds / 60, seconds % 60]
    .map((v) => `0${Math.floor(v)}`.slice(-2))
    .join(":");

const WaveAudioPlayer = ({
  src,
  songName,
  coverArt,
  artist,
}: AudioPlayerProp) => {
  const containerRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showVolume, setShowVolume] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    if (!isMuted) {
      wavesurfer?.setVolume(0);
      setIsMuted(true);
    } else {
      wavesurfer?.setVolume(volume);
      setIsMuted(false);
    }
  };

  const handleChangeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    if (isMuted) {
      setVolume(vol);
    } else {
      setVolume(vol);
      wavesurfer?.setVolume(vol);
    }
  };

  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    height: 90,
    waveColor: "#707171ff",
    progressColor: "#3ae9baff",
    barWidth: 2,
    barRadius: 2,
    cursorWidth: 0,
    url: src,
  });

  // Set duration once decoded
  useEffect(() => {
    if (!wavesurfer) return;

    const handler = (dur: number) => setDuration(dur);
    wavesurfer.on("decode", handler);

    wavesurfer.setVolume(volume);

    return () => {
      wavesurfer.un("decode", handler);
    };
  }, [wavesurfer]);

  const onPlayPause = useCallback(() => {
    wavesurfer?.playPause();
  }, [wavesurfer]);

  return (
    <div className="flex flex-col w-full bg-[#1a1a1a] rounded-lg text-left shadow-md border border-[#2a2a2a] p-5 gap-5 text-sm">
      <div className="flex gap-4">
        <div className="flex flex-col flex-2">
          <div className="flex flex-col gap-1 flex-1">
            <h1 className="text-md font-semibold text-white">
              {`${artist} - ${songName} (Original Mix)`}
            </h1>
            <p className="text-sm text-gray-400 cursor-pointer">{artist}</p>
            <div className="flex flex-row text-sm text-gray-400 items-center gap-4">
              <div className="flex items-center gap-1">
                <FiEye className="w-4 h-4 " />
                <span>654</span>
              </div>
              <div className="flex items-center gap-1">
                <FiHeart className="w-4 h-4 " />
                <span className="text-sm">311</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm">2 days ago</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onPlayPause}
              className="bg-[#2a2a2a] rounded-full p-4 shadow-lg hover:text-gray-400 cursor-pointer"
            >
              {isPlaying ? (
                <FaPause className="w-6 h-6" />
              ) : (
                <FaPlay className="pl-1 w-6 h-6" />
              )}
            </button>
            <div
              className="relative"
              onMouseEnter={() => setShowVolume(true)}
              onMouseLeave={() => setShowVolume(false)}
            >
              <button
                onClick={toggleMute}
                className="bg-[#2a2a2a] rounded-full p-2 shadow-md hover:text-gray-400 cursor-pointer"
              >
                {isMuted ? (
                  <FaVolumeMute className="w-4 h-4" />
                ) : (
                  <FaVolumeUp className="w-4 h-4" />
                )}
              </button>
              {showVolume && (
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleChangeVolume}
                  className="w-24 accent-[#3ae9baff] cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-r-lg overflow-hidden min-w-50 min-h-50">
          <img
            src={coverArt}
            alt="cover-art"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div ref={containerRef} className="relative cursor-pointer text-[11px]">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-black/80 px-0.5">
          {formatTime(currentTime)}
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-black/80 px-0.5">
          {formatTime(duration)}
        </div>
      </div>
    </div>
  );
};

export default WaveAudioPlayer;
