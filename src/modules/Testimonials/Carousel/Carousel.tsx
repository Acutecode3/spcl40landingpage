"use client";

import { useEffect, useRef, useState } from "react";
import EachVideo from "./EachVideo";
import Indicator from "./Indicator";
import styles from "../testimonials.module.sass";
import { LeftArrow, RightArrow } from "./Icons/Arrows";
import { testimonialVideos } from "@/lib/data/data";

const Carousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const gap = 25; // 25px in css
  const count = testimonialVideos.length; // number of videos

  // each video width finding using useRef
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    if (videoRef.current && width === 0) {
      setWidth(videoRef.current.clientWidth);
    }
  }, [width]);

  // currently playing video index state. causes to scroll the div
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number>(-1);
  const [scrolledVideo, setScrolledVideo] = useState<number>(0);
  const [stuck, setStuck] = useState({ stuck: false, prev: -1 });
  const getBack = () => (scrolledVideo === 0 ? 0 : scrolledVideo - 1);
  const getNext = () => (scrolledVideo >= count - 1 ? 0 : scrolledVideo + 1);

  const goLeft = (isMobile?: boolean) => {
    if (scrollRef.current && width !== 0) {
      let next = getBack();
      let added = width + gap;
      if (isMobile && typeof window !== "undefined") {
        added = window.outerWidth - 2;
      }

      if (stuck.prev === next) {
        setScrolledVideo(next - 1);
        next -= 1;
      }
      setStuck({ ...stuck, prev: next });

      scrollRef.current.scrollTo({
        left: next * added,
        behavior: "smooth",
      });
    }
  };

  const goRight = (isMobile: boolean) => {
    if (scrollRef.current && width !== 0) {
      let next = getNext();
      let added = width + gap;
      if (isMobile && typeof window !== "undefined") {
        added = window.outerWidth + 2;
      }
      if (stuck.prev === next) {
        setScrolledVideo(next + 1);
        next += 1;
      }
      setStuck({ ...stuck, prev: next });

      scrollRef.current.scrollTo({
        left: next * added,
        behavior: "smooth",
      });
    }
  };

  // scrolling changes the currently visible index
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const scrollLeft = target.scrollLeft;
    const scrolled = Math.floor(scrollLeft / width);
    setScrolledVideo(scrolled);
  };
  return (
    <>
      <div className="relative">
        <div className={styles.videos} onScroll={handleScroll} ref={scrollRef}>
          {testimonialVideos.map((link, i) => (
            <EachVideo
              key={i}
              index={i}
              link={link}
              videoRef={videoRef}
              currentlyPlaying={currentlyPlaying}
              setCurrentlyPlaying={setCurrentlyPlaying}
            />
          ))}
        </div>
        <div className={styles.shifters_mobile}>
          <div className={styles.left} onClick={() => goLeft(true)}>
            <LeftArrow />
          </div>
          <div className={styles.right} onClick={() => goRight(true)}>
            <RightArrow />
          </div>
        </div>
      </div>
      <div className={styles.controls}>
        <Indicator totalCount={count} currentlyVisible={scrolledVideo} />
        <div className={styles.shifters}>
          <div className={styles.left} onClick={() => goLeft(false)}>
            <LeftArrow />
          </div>
          <div className={styles.right} onClick={() => goRight(false)}>
            <RightArrow />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
