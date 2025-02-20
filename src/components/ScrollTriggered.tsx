import type React from "react";
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import { Song } from "../../types";

export default function ScrollTriggered({
  songs,
  playNextTrack,
}: {
  songs: Song[];
  playNextTrack: any;
}) {
  return (
    <div style={container} className="z-10">
      {songs.map((song, idx) => (
        <Card i={idx} song={song} key={idx} playNextTrack={playNextTrack} />
      ))}
    </div>
  );
}

interface CardProps {
  playNextTrack: (song: Song) => void;
  i: number;
  song: Song;
}

function Card({ song, i, playNextTrack }: CardProps) {
  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.5 }}
      onViewportEnter={() => {
        playNextTrack(song);
        console.log("playing", song.name);
      }}
    >
      {/* <div style={{ ...splash, background }} /> */}
      <motion.div
        style={card}
        variants={cardVariants}
        // className="border-b border"
      >
        <span className="text-white">{song.name}</span>
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 100,
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

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
  margin: "100px auto",
  maxWidth: 500,
  paddingBottom: 100,
  width: "100%",
  marginTop: 200,
};

const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  border: "2px solid red",
  marginBottom: -120,
};

const splash: React.CSSProperties = {
  // position: "absolute",
  // top: 0,
  // left: 0,
  // right: 0,
  // bottom: 0,
};
const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

const card: React.CSSProperties = {
  fontSize: 32,
  width: 1000,
  height: 200,
  // marginBlock: 50,
  display: "flex",
  justifyContent: "center",
  border: "2px solid blue",
  marginTop: 150,
  // paddingTop: 150,
  // background:
  //   "linear-gradient(90deg, rgba(0,235,255,0.5195567810457516) 0%, rgba(221,21,238,0.48687704248366015) 51%, rgba(6,5,11,0.4999489379084967) 100%)",
};
