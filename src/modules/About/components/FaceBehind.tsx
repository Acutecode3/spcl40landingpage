import Image from "next/image";
import styles from "../about.module.sass";
import cn from "@/lib/cn";
import Numbers from "./Numbers";

const FaceBehind = () => {
  const logos = [
    { name: "deloitte_logo.png", h: 40, w: 85 },
    { name: "grant_thornton_logo.png", h: 36, w: 108 },
    { name: "ey_logo.png", h: 30, w: 30 },
    { name: "kpmg_logo.png", h: 41, w: 84 },
  ];
  return (
    <>
      <p>
        The idea of Special 40 was developed by Sreejith Kuniyil, who, besides
        being a Chartered Accountant and Entrepreneur, is also a passionate
        Career Guidance Mentor. He has over 23 years of experience in
        International Taxation and Business Consulting, secured from nearly all
        the Big Four firms and several ventures of his own. His other ventures
        include CAPITAIRE, PravasiTax, Fintaxman, and FintaxJob.
      </p>
      <Numbers />
      <div className={styles.worked_at}>
        <h2 className={styles.worked_heading}>Previously worked at</h2>
        <div className={cn("flex-row justify-between", styles.logos)}>
          {logos.map((logo) => (
            <Image
              key={logo.name}
              width={logo.w}
              height={logo.h}
              src={`/logos/${logo.name}`}
              alt={`Worked at ${logo.name}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FaceBehind;
