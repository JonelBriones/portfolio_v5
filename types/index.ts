export type Song = {
  name: string;
  path: string;
  bpm: number;
  mode: {
    beginner: number;
    basic: number;
    difficult: number;
    expert: number;
    challenge?: number;
  };
  previewStart: string;
  artist: string;
};
