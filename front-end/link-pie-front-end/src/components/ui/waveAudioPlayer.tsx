import { useRef, useCallback, useState, useEffect, ChangeEvent } from "react";
import { useWavesurfer } from "@wavesurfer/react";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaStop,
} from "react-icons/fa";
import { AudioPlayerProp } from "@/types/types";
import { Badge } from "@/components/ui/badge";
import ToggleLikeButton from "./toggleLikeButton";

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
    height: 100,
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

  const onStop = () => {
    wavesurfer?.stop();
  };

  return (
    <div className="flex flex-col w-full bg-[#1a1a1a] rounded-lg text-left shadow-md border border-[#2a2a2a] p-5 gap-5 text-sm">
      <div className="flex gap-5">
        <div className="flex-1 rounded-r-lg overflow-hidden min-w-50 min-h-50">
          <img
            src={coverArt}
            alt="cover-art"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col flex-2 pt-3">
          <div className="flex flex-col gap-1 flex-1">
            <h1 className="text-md font-semibold text-white">
              {`${artist.name} - ${songName} (Original Mix)`}
            </h1>
            <p className="text-sm text-gray-400 cursor-pointer">
              {artist.name}
            </p>
            <div className="flex flex-row text-sm text-gray-400 items-center">
              <span>268 streams</span>
              <span className="mx-1 text-xs">•</span>
              <span>1 day ago</span>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-wrap gap-1 text-sm text-gray-400 items-center mt-2.5 mb-1">
                <Badge variant="default">edm</Badge>
                <Badge variant="secondary">house</Badge>
                <Badge variant="destructive">dance</Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={onStop}
                className="bg-[#2a2a2a] rounded-full p-2 shadow-lg hover:text-gray-400 cursor-pointer"
              >
                <FaStop className="w-4 h-4" />
              </button>

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
                className="flex gap-1"
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
                    className="w-18 accent-[#3ae9baff] cursor-pointer"
                  />
                )}
              </div>
            </div>
            <ToggleLikeButton />
          </div>
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
