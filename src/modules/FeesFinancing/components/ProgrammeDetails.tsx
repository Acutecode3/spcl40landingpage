import ApplyNow from "@/modules/Navbar/components/ApplyNow";
import Point from "./Point";
import Separator from "./Separator";
import styles from "../feesFinancing.module.sass";
import {
  admissionFee,
  discountPrice,
  markedPrice,
  tuitionFee,
} from "@/lib/data/data";
import { CardPoints } from "@/lib/data/feesNdFinancing";

const ProgrammeDetails = () => {
  return (
    <>
      <span className={styles.detail_heading}>Total Programme Fee</span>
      <div className="flex-row items-center">
        <span className={styles.red_price}>INR {markedPrice}</span>
        <span className={styles.green_price}>INR {discountPrice}/-</span>
        <span className={styles.grey_text}>{"(excluding GST)"}</span>
      </div>
      <Separator />
      <div className="flex-col gap-1">
        <span className={styles.small_heading}>
          Fee Advance {"(Non-Refundable)"}
        </span>
        <span className={styles.price}>INR {admissionFee}/-</span>
        <span className={styles.small_heading}>
          * This payment is mandatory for reserving a slot in the programme.
        </span>
      </div>
      <Separator />
      {CardPoints.map((point, index) => (
        <Point key={index} text={point} />
      ))}
      <ApplyNow />
    </>
  );
};

export default ProgrammeDetails;
