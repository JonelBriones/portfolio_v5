import { useEffect, useState } from "react";
import "../App.css";
import { motion, useMotionValue } from "motion/react";

import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";

import BasicsOfMotion from "./BasicsOfMotion.js";
import { Song } from "../../types/index.js";
type ModeType = "beginner" | "basic" | "difficult" | "expert" | "challenge";

const songs: Song[] = [
  {
    name: "Big Girls Don't Cry",
    path: "music/Big Girls Don't Cry.mp3",
    project: {
      name: "Noted",
      url: "https://noted-ebon.vercel.app",
      image: "images/notes_dashboard_view.png",
    },
    bpm: 125,
    mode: {
      beginner: 2,
      basic: 4,
      difficult: 7,
      expert: 9,
    },
    previewStart: "0:33",
    artist: "Purefocus",
  },
  {
    name: "BOYS (2008 X-edit)",
    path: "music/BOYS (2008 X-edit).mp3",
    project: {
      name: "Project Feedback Board",
      url: "https://project-feedback-board.vercel.app",
      image: "images/projectfeedbackboard_view.png",
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
    path: "music/Naruto Shippuden Op Opening 6.mp3",
    project: {
      name: "Gymualizer",
      url: "https://github.com/JonelBriones/gymualizer.io",
      image: "images/gymualizer.png",
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
    artist: "FLOW",
  },
  {
    name: "Hero's Come Back / OP 1",
    path: "music/Naruto Shippuden - Opening 1 (HD - 60 fps).mp3",
    project: {
      name: "Chatters",
      url: "https://chatters-sigma.vercel.app",
      image: "images/chatters.png",
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
    artist: "nobodyknows+",
  },
];
const modes = ["beginner", "basic", "difficult", "expert", "challenge"];

const Main = () => {
  const [previewSong, setPreviewSong] = useState<Song>(songs[0]);
  const [audio] = useState(new Audio(previewSong.path));
  const [audioIsMuted, setAudioIsMuted] = useState(true);

  const playNextTrack = (song: Song) => {
    if (audio) {
      console.log("next song", audio);
      audio.pause();
      audio.src = song.path;

      audio.play();
      setPreviewSong(song);
    }
  };

  const modeBars = (value: number | null) => {
    const modeValue = value ? value : 0;
    return Array(10)
      .fill(null)
      .map((_, idx) => (
        <div
          key={idx}
          className={`w-[15px]  drop-shadow-sm drop-shadow-black ${
            idx + 1 <= modeValue ? "bg-[#FFEA00]" : "bg-slate-400 opacity-70"
          }`}
        />
      ));
  };
  const [hoverAudio, setHoverAudio] = useState(false);
  const [projectHover, setMouseHover] = useState(false);
  const mousePosition = { x: useMotionValue(0), y: useMotionValue(0) };
  const cursorSize = 50;
  const handleMouseMove = (e: MouseEvent) => {
    mousePosition.x.set(e.clientX - cursorSize / 2);
    mousePosition.y.set(e.clientY - cursorSize / 2);
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const mouseStyle: React.CSSProperties = {
    border: "2px solid white",
    borderRadius: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    pointerEvents: "none",
  };
  return (
    <div className="md:flex overflow-auto   w-full h-[60vh]">
      <motion.div
        style={{
          ...mouseStyle,
          x: mousePosition.x,
          y: mousePosition.y,
          width: cursorSize,
          height: cursorSize,
        }}
        animate={{
          scale: projectHover ? 1.5 : 1,
        }}
      >
        <div className="cursor"></div>
      </motion.div>

      <div className="absolute text-white  top-0 right-0 m-5 z-10 h-[40px]">
        <button
          onMouseEnter={() => {
            setHoverAudio(true);
          }}
          onMouseLeave={() => {
            setHoverAudio(false);
          }}
          onClick={() => {
            if (audioIsMuted) {
              audio.muted = false;
              audio.play();
              setAudioIsMuted(false);
              setHoverAudio(false);
            } else {
              audio.muted = true;
              setAudioIsMuted(true);
              setHoverAudio(false);
            }
          }}
          className="p-2 cursor-pointer"
        >
          {audioIsMuted ? (
            hoverAudio ? (
              <HiMiniSpeakerWave
                size={"2rem"}
                color={hoverAudio ? "green" : ""}
              />
            ) : (
              <HiMiniSpeakerXMark
                size={"2rem"}
                color={hoverAudio ? "red" : ""}
              />
            )
          ) : hoverAudio ? (
            <HiMiniSpeakerXMark size={"2rem"} color={hoverAudio ? "red" : ""} />
          ) : (
            <HiMiniSpeakerWave
              size={"2rem"}
              color={hoverAudio ? "green" : ""}
            />
          )}
        </button>
      </div>

      <div className="flex relative text-white w-[500px]">
        <div className="mix-blend-hard-light flex">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col p-5">
              <h1 className="text-4xl uppercase text-wrap">
                {previewSong.project.name}
              </h1>
              <h4 className="text-3xl">{previewSong?.name}</h4>
            </div>

            <div className="p-5 flex flex-col w-[400px] pl-10 select-none">
              {modes.map((mode) => (
                <div className="flex justify-between" key={mode}>
                  <p
                    className={`flex-1 tracking-widest ${
                      previewSong?.mode?.[mode as ModeType] == null
                        ? "opacity-50"
                        : ""
                    }`}
                  >
                    {mode.toUpperCase()}
                  </p>
                  <div className="flex flex-1 gap-2 place-items-center justify-between">
                    <span className="flex place-items-center text-2xl text-neutral-300 h-[30px]">
                      {previewSong?.mode?.[mode as ModeType]}
                    </span>
                    <div className="flex gap-1 h-[24px]">
                      {modeBars(previewSong?.mode?.[mode as ModeType] || null)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MUSIC SELECT */}
      <div className="flex flex-1 md:w-[500px] justify-center relative place-items-center">
        <div className="z-20 overflow-y-auto flex flex-r md:flex-col scrollbar-hide md:h-[600px] scrollSnapContainer overflow-x-hidden">
          <BasicsOfMotion
            songs={songs}
            playNextTrack={playNextTrack}
            setMouseHover={setMouseHover}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
