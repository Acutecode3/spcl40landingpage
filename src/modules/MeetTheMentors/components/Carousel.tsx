"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../meet.module.sass";
import {
  LeftArrow,
  RightArrow,
} from "@/modules/Testimonials/Carousel/Icons/Arrows";
import Indicator from "@/modules/Testimonials/Carousel/Indicator";
import MentorCard from "./MentorCard";
import { mentors } from "../MeetTheMentors";

const Carousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const gap = 25; // 25px in css
  const count = mentors.length; // number of videos

  // each video width finding using useRef
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    if (videoRef.current && width === 0) {
      setWidth(videoRef.current.clientWidth);
    }
  }, [width]);

  // currently playing video index state. causes to scroll the div
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number>(0);
  const [scrolledVideo, setScrolledVideo] = useState<number>(0);
  const goLeft = (isMobile?: boolean) => {
    if (scrollRef.current && width !== 0) {
      const next = scrolledVideo == 0 ? 0 : scrolledVideo - 1;
      let added = width + gap;
      if (isMobile) added += 40;
      scrollRef.current.scrollTo({
        left: next * added,
        behavior: "smooth",
      });
    }
  };
  const goRight = (isMobile: boolean) => {
    if (scrollRef.current && width !== 0) {
      const next = scrolledVideo == count - 1 ? 0 : scrolledVideo + 1;
      let added = width + gap;
      if (isMobile) added += 40;
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
          {mentors.map((mentor, i) => (
            <MentorCard key={i} {...mentor} videoRef={videoRef} />
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