export type Song = {
  name: string;
  path: string;
  project: {
    name: string;
    url: string;
    image: string;
  };
  bpm: number;
  mode: {
    beginner: number;
    basic: number;
    difficult: number;
    expert: number;
    challenge?: number | null;
  };
  previewStart: string;
  artist: string;
};
