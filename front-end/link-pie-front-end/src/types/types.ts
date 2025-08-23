export interface FloatingImage {
  src: string;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export interface AudioPlayerProp {
  src: string;
  songName: string;
  coverArt: string;
  artist: string;
  genre?: string[];
}
