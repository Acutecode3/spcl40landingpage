"use client";

import cn from "@/lib/cn";
import { curriculumLink } from "@/lib/data/data";
import Image from "next/image";
import { useState } from "react";

type Props = {
  theme?: "dark" | "light";
};

const DownloadCurriculum = (props: Props) => {
  const link = curriculumLink;
  const [isDownloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);

    if (typeof window === "undefined") return setDownloading(false);

    const downloadLink = document.createElement("a");
    downloadLink.target = "_blank";
    downloadLink.href = link;
    downloadLink.download = "curriculum.pdf";
    setTimeout(() => {
      downloadLink.click();
      setDownloading(false);
    }, 2000);
  };

  return (
    <button
      className={cn(
        "flex-row items-center download_curriculum",
        props.theme === "light" ? "download_light" : "download_dark"
      )}
      onClick={handleDownload}
    >
      <Image
        src="/icons/document-download.png"
        alt="Curriculum Download Icon"
        height={20}
        width={20}
      />
      <span>{isDownloading ? "Downloading..." : "Download Curriculum"}</span>
    </button>
  );
};

export default DownloadCurriculum;
