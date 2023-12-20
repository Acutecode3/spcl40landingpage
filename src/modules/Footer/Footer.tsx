import Image from "next/image";
import Separator from "../FeesFinancing/components/Separator";
import SocialIcons from "../Navbar/components/SocialIcons";
import styles from "./footer.module.sass";
import cn from "@/lib/cn";
import BoxComp from "./components/BoxComp";
import { Mail, Phone } from "./components/Icons";
import Link from "next/link";
import { addrLine1, addrLine2, addrLine3 } from "@/lib/data/data";

const Footer = () => {
  const phNO = process.env.NEXT_PUBLIC_PHNO;
  const email = process.env.NEXT_PUBLIC_EMAIL;
  return (
    <footer className={cn("provide_padding", styles.footer)}>
      <div className={styles.top}>
        <div className={styles.top_left}>
          <Link href="/" aria-label="Special40">
            <Image
              src="/logos/special40-logo-color.png"
              width={200}
              height={54}
              alt="Special40 Logo"
            />
          </Link>
          <div className={cn("flex-col", styles.address)}>
            <span>{addrLine1}</span>
            <span>{addrLine2}</span>
            <span>{addrLine3}</span>
          </div>
        </div>
        <div className={styles.top_right}>
          <div className={styles.help}>Need some Help?</div>
          <div className={styles.reach}>Reach out to us</div>
          <div className={styles.contact}>
            <BoxComp text={phNO} icon={Phone} link={`tel:${phNO}`} />
            <BoxComp text={email} icon={Mail} link={`mailto:${email}`} />
          </div>
        </div>
      </div>
      <br />
      <Separator />
      <br />
      <div
        className={cn("flex-col-mobile gap-1 justify-between", styles.bottom)}
      >
        <SocialIcons />
        <div>Copyright © 2023 | Special40 | All Rights Reserved</div>
        <div className={styles.credits}>
          Designed with <span className={styles.heart}>❤️</span> by Acute Angle
        </div>
      </div>
    </footer>
  );
};

export default Footer;
