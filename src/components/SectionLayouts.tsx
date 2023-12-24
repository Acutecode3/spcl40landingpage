"use client";

import { useNavbarContext } from "@/contexts/ActiveNavbarContext";
import cn from "@/lib/cn";
import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  id: string;
  providePadding: boolean;
};

const SectionLayouts = (props: Props) => {
  const { setActiveSection } = useNavbarContext();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(props.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, [setActiveSection, props.id]);

  return (
    <section
      className={cn(
        props.providePadding ? "provide_padding" : "",
        props.className || "",
      )}
      id={props.id}
      onMouseEnter={() => setActiveSection(props.id)}
      ref={sectionRef}
    >
      {props.children}
    </section>
  );
};

export default SectionLayouts;
