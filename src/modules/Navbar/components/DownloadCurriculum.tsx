import cn from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";

type Props = {
  theme?: "dark" | "light";
};

const DownloadCurriculum = (props: Props) => {
  return (
    <Link
      href="/apply-now?download_curriculum=true"
      className={cn(
        "flex-row items-center download_curriculum",
        props.theme === "light" ? "download_light" : "download_dark"
      )}
    >
      <Image
        src="/icons/document-download.png"
        alt="Curriculum Download Icon"
        height={20}
        width={20}
      />
      <span>Download Curriculum</span>
    </Link>
  );
};

export default DownloadCurriculum;
