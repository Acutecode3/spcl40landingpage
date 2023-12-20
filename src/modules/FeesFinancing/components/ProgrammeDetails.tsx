import ApplyNow from "@/modules/Navbar/components/ApplyNow";
import Point from "./Point";
import Separator from "./Separator";
import styles from "../feesFinancing.module.sass";

const ProgrammeDetails = () => {
  return (
    <>
      <span className={styles.detail_heading}>Total Programme Fee</span>
      <div className="flex-row items-center">
        <span className={styles.red_price}>INR 75000</span>
        <span className={styles.green_price}>INR 40000/-</span>
        <span className={styles.grey_text}>{"(All Inclusive)"}</span>
      </div>
      <Separator />
      <div className="flex-col-mobile gap-1">
        <span className={styles.small_heading}>
          Admission Fee {"(Non-Refundable)"}
        </span>
        <span className={styles.price}>INR 5000/-</span>
      </div>
      <Separator />
      <div className="flex-col-mobile gap-1">
        <span className={styles.small_heading}>
          Tuition Fee {"(Non-Refundable)"}
        </span>
        <span className={styles.price}>INR 35000/-</span>
      </div>
      <Separator />
      <Point text="Two weeks of office training (“Tax Camp”) where students will work on actual client files and their accounts." />
      <Point text="Interview training, soft skills development, and mock interviews" />
      <Point text="Placement assistance" />
      <Point text="Access lifelong membership in the Special 40 Alumni Community for continuous career support, job updates, and mutual assistance." />
      <Point text="Unrestricted access to Special 40 faculty for insights or advice to resolve speedbumps at work or in their careers at any time." />
      <ApplyNow />
    </>
  );
};

export default ProgrammeDetails;
