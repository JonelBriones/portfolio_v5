import React, { Fragment } from "react";
import { motion } from "motion/react";
import { Song } from "../../types/index";
import type { Variants } from "motion/react";

export default function BasicsOfMotion({
  song,
  playNextTrack,
  audio,
}: {
  song: Song;
  playNextTrack: any;
  audio: any;
}) {
  return (
    <motion.div
      className="m-auto text-center"
      initial="off-screen"
      whileInView={{
        opacity: 1,
        width: 420,
        // y: 50,
      }}
      viewport={{
        once: false,
        amount: 0.95,
        margin: "500px 0px 250px 0px",
      }}
      onViewportEnter={() => {
        if (audio) {
          playNextTrack(song);
          console.log(audio);
        }
      }}
    >
      <motion.div
        className="flex flex-col"
        style={card}
        variants={cardVariants}
      >
        <span className="text-white text-2xl font-bold">{song.name}</span>
        <span className="text-white text-2xl font-bold">{song.artist}</span>
      </motion.div>
    </motion.div>
  );
}
const card: React.CSSProperties = {
  fontSize: 32,
  width: 500,
  height: 200,
  // marginBlock: 50,
  display: "flex",
  justifyContent: "center",
  border: "2px solid blue",
  // marginTop: 150,
  // paddingTop: 150,
  // background:
  //   "linear-gradient(90deg, rgba(0,235,255,0.5195567810457516) 0%, rgba(221,21,238,0.48687704248366015) 51%, rgba(6,5,11,0.4999489379084967) 100%)",
};

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    width: 400,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    // border: "2px solid yellow",
    transition: {
      type: "spring",
      visualDuration: 0.5,
      bounce: 0.25,
    },
  },
};
