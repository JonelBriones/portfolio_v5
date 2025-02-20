import React, { Fragment, useEffect, useRef, useState } from "react";
import "../App.css";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";

import BasicsOfMotion from "./BasicsOfMotion.js";

type Song = {
  name: string;
  path: string;
  project: {
    name: "notes";
    url: "";
    image: "src/assets/images/notes_dashboard_view.png";
  };

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
    project: {
      name: "notes",
      url: "",
      image: "src/assets/images/notes_dashboard_view.png",
    },
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
    project: {
      name: "notes",
      url: "",
      image: "src/assets/images/projectfeedbackboard_view.png",
    },

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
    name: "Sign / OP 6",
    path: "src/assets/music/Naruto Shippuden Op Opening 6.mp3",
    project: {
      name: "notes",
      url: "",
      image: "src/assets/images/notes_dashboard_view.png",
    },

    bpm: 138,
    mode: {
      beginner: Math.floor(Math.random() * 10),
      basic: Math.floor(Math.random() * 10),
      difficult: Math.floor(Math.random() * 10),
      expert: Math.floor(Math.random() * 10),
      challenge: Math.floor(Math.random() * 10),
    },
    previewStart: "0:33",
    artist: "Naruto Shippuden",
  },
  {
    name: "Hotaru no Hikari / OP 5",
    path: "src/assets/music/Naruto shippuden Op  Opening  5.mp3",
    project: {
      name: "notes",
      url: "",
      image: "src/assets/images/notes_dashboard_view.png",
    },

    bpm: 138,
    mode: {
      beginner: Math.floor(Math.random() * 10),
      basic: Math.floor(Math.random() * 10),
      difficult: Math.floor(Math.random() * 10),
      expert: Math.floor(Math.random() * 10),
      challenge: Math.floor(Math.random() * 10),
    },
    previewStart: "0:33",
    artist: "Naruto Shippuden",
  },
  {
    name: "SONG 5",
    path: "src/assets/music/BOYS (2008 X-edit).mp3",
    project: {
      name: "notes",
      url: "",
      image: "src/assets/images/notes_dashboard_view.png",
    },

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
    project: {
      name: "notes",
      url: "",
      image: "src/assets/images/notes_dashboard_view.png",
    },

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
    project: {
      name: "notes",
      url: "",
      image: "src/assets/images/notes_dashboard_view.png",
    },

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
    project: {
      name: "notes",
      url: "",
      image: "src/assets/images/notes_dashboard_view.png",
    },

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
    project: {
      name: "notes",
      url: "",
      image: "src/assets/images/notes_dashboard_view.png",
    },

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
    name: "BOYS (2008 X-edit)",
    path: "src/assets/music/Naruto Shippuden Op Opening 6.mp3",
    project: {
      name: "notes",
      url: "",
      image: "src/assets/images/projectfeedbackboard_view.png",
    },

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
];
const modes = ["beginner", "basic", "difficult", "expert", "challenge"];

const Main = () => {
  const [previewSong, setPreviewSong] = useState<Song>(songs[0]);
  const [audio] = useState(new Audio(previewSong.path));
  const [audioIsMuted, setAudioIsMuted] = useState(true);
  const [audioIsPaused, setAudioIsPaused] = useState(true);
  const audioRef = useRef(null);
  useEffect(() => {
    if (!audioRef.current) {
      audioRef?.current?.play(previewSong.path);
    }
  }, []);
  const playNextTrack = (song: Song) => {
    if (audio) {
      console.log("next song", audio);
      audio.pause();
      audio.src = song.path;

      audio.play();
      setPreviewSong(song);
    }
  };

  const muteSong = () => {
    audio.muted = true;
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
    <div className="md:flex overflow-auto relative w-full border">
      <div className="absolute text-white  top-0 right-0 m-5 z-10 h-[40px]">
        {}
        {/* {!audioIsPaused  ? (
          <button onClick={() => audio.pause()} className="  p-2 border block">
            PAUSE {audio.duration}
            {audio.paused ? "true" : "false"}
          </button>
        ) : (
          <button onClick={() => audio.play()} className=" p-2 border block">
            Play
          </button>
        )} */}

        {/* {audioIsMuted ? (
          <button
            onClick={() => {
              audio.muted = false;
              audio.play();
              setAudioIsMuted(false);
            }}
            className=" p-2 border block"
          >
            <HiMiniSpeakerXMark size={"2rem"} />
          </button>
        ) : (
          <button
            onClick={() => {
              audio.muted = true;
              setAudioIsMuted(true);
            }}
            className=" p-2 border block"
          >
            <HiMiniSpeakerWave size={"2rem"} />
          </button>
        )} */}
        <button
          onClick={() => {
            if (audioIsMuted) {
              audio.muted = false;
              audio.play();
              setAudioIsMuted(false);
            } else {
              audio.muted = true;
              setAudioIsMuted(true);
            }
          }}
          className="p-2 cursor-pointer"
        >
          {audioIsMuted ? (
            <HiMiniSpeakerXMark size={"2rem"} />
          ) : (
            <HiMiniSpeakerWave size={"2rem"} />
          )}
        </button>
      </div>

      <div className="flex relative text-white">
        <div className="absolute  bg-sky-200 mix-blend-soft-light top-0 bottom-0 left-0 right-0" />
        <div className="mix-blend-hard-light flex">
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex flex-col w-full">
                <div className="flex flex-col p-5">
                  <h1 className="text-4xl uppercase">
                    {previewSong.project.name}
                  </h1>
                  <h4 className="text-3xl">{previewSong?.name}</h4>
                </div>
                <span className="p-2 text-right">
                  1st stage bpm{previewSong.bpm}
                </span>
              </div>
            </div>
            {/* <div className="flex justify-center w">
              <img
                src={`/${previewSong.project.image}`}
                className="w-full bg-cover"
              />
            </div> */}
            <div className="p-5 flex flex-col w-[400px] pl-10 ">
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
                    <span className="flex place-items-center text-2xl text-neutral-300 h-[30px]">
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
      </div>

      {/* MUSIC SELECT */}
      <div className="flex flex-1 md:w-[500px] justify-center relative place-items-center">
        <div className="absolute bg-sky-200 mix-blend-soft-light top-0 bottom-0 left-0 right-0" />
        <div className="z-20 overflow-y-auto flex flex-r md:flex-col scrollbar-hide md:h-[600px]">
          <BasicsOfMotion
            songs={songs}
            playNextTrack={playNextTrack}
            audio={audio}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
