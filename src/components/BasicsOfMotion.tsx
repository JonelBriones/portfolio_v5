import React, { Fragment } from "react";
import { motion } from "motion/react";
import { Song } from "../../types/index";
import type { Variants } from "motion/react";

export default function BasicsOfMotion({
  songs,
  playNextTrack,
}: {
  songs: Song[];
  playNextTrack: any;
  audio: any;
}) {
  return (
    <div
      style={{
        paddingBottom: 200,
        width: "100%",
        marginBlock: 300,
        // border: "2px solid red",
      }}
      className="overflow-hidde z-10 w-full flex flex-col place-items-end gap-2 "
    >
      {songs.map((song, idx) => (
        <Card song={song} key={idx} playNextTrack={playNextTrack} />
      ))}
    </div>
  );
}

function Card({ song, playNextTrack }) {
  return (
    <motion.div
      className="overflow-auto flex justify-center md:justify-left"
      style={{
        opacity: 0.7,
        // border: "2px solid red",
        width: 600,
        margin: "150px",
      }}
      whileInView={{
        // width: 500,
        flexGrow: 1,
        opacity: 1,
        // border: "2px solid red",
      }}
      onViewportEnter={() => {
        playNextTrack(song);
        console.log("playing song:", song.name);
      }}
      transition={{
        visualDuration: 1,
      }}
      layout
      viewport={{
        margin: "-500px 0px -500px 0px",
        amount: 1,
      }}
    >
      <div className="flex flex-col">
        <div>
          {/* <span className="text-white text-2xl font-bold">{song.name}</span>
          <span className="pl-5 text-white text-2xl font-bold">
            {song.artist}
          </span> */}
        </div>
        <img src={`/${song.project.image}`} className="w-full bg-cover" />
      </div>
    </motion.div>
  );
}
