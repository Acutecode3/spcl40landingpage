"use client";

import ReactPlayer from "react-player";
import styles from "./carousel.module.sass";
import { useEffect, useState } from "react";
import PlayButton from "./Icons/PlayButton";
import PauseButton from "./Icons/PauseButton";

type Props = {
  link: string;
  index: number;
  currentlyPlaying: number;
  videoRef: React.RefObject<HTMLDivElement>;
  setCurrentlyPlaying: React.Dispatch<React.SetStateAction<number>>;
};

const EachVideo = (props: Props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!loaded) setLoaded(true);
    else {
      if (props.currentlyPlaying === props.index) setIsPlaying(true);
      else setIsPlaying(false);
    }
  }, [props.currentlyPlaying, props.index, loaded]);

  useEffect(() => {
    if (isPlaying) props.setCurrentlyPlaying(props.index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  const playToggle = () => setIsPlaying(!isPlaying);
  const CustomPlayer = () => {
    return (
      <button className={styles.video_button} onClick={playToggle}>
        {isPlaying ? <PauseButton /> : <PlayButton />}
      </button>
    );
  };
  return (
    <div className={styles.mobile_spacer} ref={props.videoRef}>
      <div
        className={
          styles.video_container + " " + (isPlaying && styles.isPlaying)
        }
      >
        <CustomPlayer />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=zElQWXVFb4Y"
          playing={isPlaying}
          height={isMobile ? 553 : 422}
          width={isMobile ? 310 : 236}
          style={{ borderRadius: "10px" }}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        />
      </div>
    </div>
  );
};

export default EachVideo;
