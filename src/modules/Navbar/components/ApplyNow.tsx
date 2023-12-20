import Link from "next/link";
import ArrowSVG from "./ArrowSVG";

type Props = {
  text?: "Enroll Now" | "Apply Now";
};

const ApplyNow = (props: Props) => {
  let { text } = props;
  if (!text) text = "Apply Now";
  return (
    <Link className="apply_now" href="/apply-now">
      <span>{text}</span>
      <span className="apply_now_arrow">
        <ArrowSVG />
      </span>
    </Link>
  );
};

export default ApplyNow;
