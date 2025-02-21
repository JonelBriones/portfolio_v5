import { motion } from "motion/react";
import { Song } from "../../types/index";

export default function BasicsOfMotion({
  songs,
  playNextTrack,
  setMouseHover,
}: {
  songs: Song[];
  playNextTrack: any;
  setMouseHover: any;
}) {
  return (
    <div
      style={{
        width: "100%",
        marginBlock: 400,
      }}
      className="z-10 w-full flex flex-col place-items-end gap-2 "
    >
      {songs.map((song, idx) => (
        <Card
          song={song}
          key={idx}
          playNextTrack={playNextTrack}
          setMouseHover={setMouseHover}
        />
      ))}
    </div>
  );
}

function Card({
  song,
  playNextTrack,
  setMouseHover,
}: {
  song: Song;
  playNextTrack: any;
  setMouseHover: any;
}) {
  return (
    <motion.div
      className="overflow-auto flex justify-center md:justify-left scrollSnap"
      style={{
        opacity: 0.7,
        margin: "50px",
        scrollSnapAlign: "start",
      }}
      whileInView={{
        // width: 500,
        flexGrow: 1,
        opacity: 1,
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
        margin: "-400px 0px",
        amount: 0.6,
      }}
      onMouseEnter={() => {
        setMouseHover(true);
        console.log("mouse on image");
      }}
      onMouseLeave={() => {
        setMouseHover(false);
        console.log("mouse left image");
      }}
    >
      <div className="flex flex-col">
        <a href={song?.project?.url} target="_blank">
          <img src={`/${song.project.image}`} className="w-full bg-cover" />
        </a>
      </div>
    </motion.div>
  );
}
