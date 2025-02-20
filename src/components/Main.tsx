import React, { Fragment, useEffect, useRef, useState } from "react";
import "../App.css";
import { motion } from "motion/react";

import BasicsOfMotion from "./BasicsOfMotion.js";
import ScrollTriggered from "./ScrollTriggered.js";
type Song = {
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

const songs: Song[] = [
  {
    name: "Big Girls Don't Cry",
    path: "src/assets/music/Big Girls Don't Cry.mp3",
    bpm: 125,
    mode: {
      beginner: 2,
      basic: 4,
      difficult: 7,
      expert: 9,
      //   challenge: 0,
    },
    previewStart: "0:33",
    artist: "Purefocus",
  },
  {
    name: "BOYS (2008 X-edit)",
    path: "src/assets/music/BOYS (2008 X-edit).mp3",
    bpm: 138,
    mode: {
      beginner: 2,
      basic: 5,
      difficult: 6,
      expert: 10,
      challenge: 5,
    },
    previewStart: "0:33",
    artist: "Smile. dk",
  },
  {
    name: "SONG 3",
    path: "src/assets/music/BOYS (2008 X-edit).mp3",
    bpm: 138,
    mode: {
      beginner: Math.floor(Math.random() * 10),
      basic: Math.floor(Math.random() * 10),
      difficult: Math.floor(Math.random() * 10),
      expert: Math.floor(Math.random() * 10),
      challenge: Math.floor(Math.random() * 10),
    },
    previewStart: "0:33",
    artist: "Smile. dk",
  },
  {
    name: "SONG 4",
    path: "src/assets/music/BOYS (2008 X-edit).mp3",
    bpm: 138,
    mode: {
      beginner: Math.floor(Math.random() * 10),
      basic: Math.floor(Math.random() * 10),
      difficult: Math.floor(Math.random() * 10),
      expert: Math.floor(Math.random() * 10),
      challenge: Math.floor(Math.random() * 10),
    },
    previewStart: "0:33",
    artist: "Smile. dk",
  },
  {
    name: "SONG 5",
    path: "src/assets/music/BOYS (2008 X-edit).mp3",
    bpm: 138,
    mode: {
      beginner: Math.floor(Math.random() * 10),
      basic: Math.floor(Math.random() * 10),
      difficult: Math.floor(Math.random() * 10),
      expert: Math.floor(Math.random() * 10),
      challenge: Math.floor(Math.random() * 10),
    },
    previewStart: "0:33",
    artist: "Smile. dk",
  },
  {
    name: "SONG 6",
    path: "src/assets/music/BOYS (2008 X-edit).mp3",
    bpm: 138,
    mode: {
      beginner: Math.floor(Math.random() * 10),
      basic: Math.floor(Math.random() * 10),
      difficult: Math.floor(Math.random() * 10),
      expert: Math.floor(Math.random() * 10),
    },
    previewStart: "0:33",
    artist: "Smile. dk",
  },
  {
    name: "SONG 7",
    path: "src/assets/music/BOYS (2008 X-edit).mp3",
    bpm: 138,
    mode: {
      beginner: Math.floor(Math.random() * 10),
      basic: Math.floor(Math.random() * 10),
      difficult: Math.floor(Math.random() * 10),
      expert: Math.floor(Math.random() * 10),
    },
    previewStart: "0:33",
    artist: "Smile. dk",
  },
  {
    name: "SONG 8",
    path: "src/assets/music/BOYS (2008 X-edit).mp3",
    bpm: 138,
    mode: {
      beginner: Math.floor(Math.random() * 10),
      basic: Math.floor(Math.random() * 10),
      difficult: Math.floor(Math.random() * 10),
      expert: Math.floor(Math.random() * 10),
      challenge: Math.floor(Math.random() * 10),
    },
    previewStart: "0:33",
    artist: "Smile. dk",
  },
  {
    name: "SONG 9",
    path: "src/assets/music/BOYS (2008 X-edit).mp3",
    bpm: 138,
    mode: {
      beginner: Math.floor(Math.random() * 10),
      basic: Math.floor(Math.random() * 10),
      difficult: Math.floor(Math.random() * 10),
      expert: Math.floor(Math.random() * 10),
      challenge: Math.floor(Math.random() * 10),
    },
    previewStart: "0:33",
    artist: "Smile. dk",
  },
  {
    name: "SONG 10",
    path: "src/assets/music/BOYS (2008 X-edit).mp3",
    bpm: 138,
    mode: {
      beginner: Math.floor(Math.random() * 10),
      basic: Math.floor(Math.random() * 10),
      difficult: Math.floor(Math.random() * 10),
      expert: Math.floor(Math.random() * 10),
      challenge: Math.floor(Math.random() * 10),
    },
    previewStart: "0:33",
    artist: "Smile. dk",
  },
];
const modes = ["beginner", "basic", "difficult", "expert", "challenge"];

const Main = () => {
  const [previewSong, setPreviewSong] = useState<Song>(songs[0]);
  const [audio, setAudio] = useState(new Audio(previewSong.path));
  const audioRef = useRef(null);

  //   const playAudio = () => {
  //     const audio = new Audio(previewSong.path);
  //     console.log("playing audio", audio);
  //     audio.play();
  //   };

  //   useEffect(() => {
  //     const handleInteraction = () => {
  //       playAudio();
  //       document.removeEventListener("click", handleInteraction);
  //     };

  //     document.addEventListener("click", handleInteraction);
  //     return () => document.removeEventListener("click", handleInteraction);
  //   }, []);

  const playNextTrack = (song: Song) => {
    console.log("next song", audio);
    if (audio) {
      console.log("next song", audio);
      audio.pause();
      audio.src = song.path;
      audio.play();
      setPreviewSong(song);
    }
  };

  const modeBars = (value: number) => {
    return Array(10)
      .fill(null)
      .map((bar, idx) => (
        <div
          key={idx}
          className={`w-[15px]  drop-shadow-sm drop-shadow-black ${
            idx + 1 <= value ? "bg-[#FFEA00]" : "bg-slate-400 opacity-70"
          }`}
        />
      ));
  };

  return (
    <div className="flex ">
      <div className="absolute top-0 right-0 m-5">
        {/* <button onClick={play} className="p-2">
          START
        </button> */}
        <button
          onClick={() => audio.pause()}
          className=" text-white p-2 border block"
        >
          PAUSE
        </button>

        <button
          onClick={() => audio.play()}
          className=" text-white p-2 border block"
        >
          PLAY
        </button>
        {/* <button onClick={playNextTrack} className="p-2 border">
          HOVER SONG
        </button> */}
      </div>
      <div className="flex justify-between p-5 h-[700px] flex-1">
        <div className="flex flex-col gap-2 pl-10 relative text-white">
          <div className="absolute  bg-sky-200 mix-blend-soft-light top-0 bottom-0 left-0 right-0" />
          <div className="mix-blend-hard-light">
            <div className="p-5">select music</div>
            <div className="flex flex-col w-full">
              <div className="flex flex-col p-5">
                <h1 className="text-4x1"> project name</h1>
                <h4 className="text-lg">{previewSong?.name}</h4>
              </div>
              <span className="p-2 text-right">
                1st stage bpm{previewSong.bpm}
              </span>
            </div>
            <div className="flex justify-center">
              <div className="rounded-full w-[100px] h-[100px] border m-5">
                wheel stats
              </div>
            </div>
            <div className="p-5 flex flex-col w-full">
              {modes.map((mode) => (
                <div className="flex justify-between" key={mode}>
                  <p
                    className={`flex-1 tracking-widest ${
                      previewSong.mode[mode] == null ? "opacity-50" : ""
                    }`}
                  >
                    {mode.toUpperCase()}
                  </p>
                  <div className="flex flex-1 gap-2 place-items-center justify-between">
                    <span className="text-2xl text-neutral-300 h-[30px]">
                      {previewSong.mode[mode]}
                    </span>
                    <div className="flex gap-1 h-[24px]">
                      {modeBars(previewSong.mode[mode])}
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-center bg-red-100">OPTIONS</div>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden relative flex-1">
          <div className="absolute bg-sky-200 mix-blend-soft-light top-0 bottom-0 left-0 right-0" />
          <div className="z-10 overflow-auto w-full">
            {/* <ScrollTriggered songs={songs} playNextTrack={playNextTrack} /> */}
            {songs.map((song, idx) => (
              <Fragment key={idx}>
                <BasicsOfMotion
                  song={song}
                  playNextTrack={playNextTrack}
                  audio={audio}
                />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
