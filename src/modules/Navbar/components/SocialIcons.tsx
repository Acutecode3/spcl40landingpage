import cn from "@/lib/cn";
import Link from "next/link";
import { FB, IG, LI } from "./Icons";
import styles from "@/modules/Navbar/navbar.module.sass";
import { fbLink, igLink, linkedInLink } from "@/lib/data/data";

const SocialIcons = () => {
  return (
    <div className={cn("flex-row", styles.social_links)}>
      <Link
        href={fbLink}
        className={styles.link_button}
        target="_blank"
        aria-label="Special40 Facebook"
      >
        <FB />
      </Link>
      <Link
        href={igLink}
        className={styles.link_button}
        target="_blank"
        aria-label="Special40 Instagram"
      >
        <IG />
      </Link>
      <Link
        href={linkedInLink}
        className={styles.link_button}
        target="_blank"
        aria-label="Special40 LinkedIn"
      >
        <LI />
      </Link>
    </div>
  );
};

export default SocialIcons;
