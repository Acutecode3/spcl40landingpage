import BrushStroke from "./BrushStroke";

type Props = {
  blackText: string;
  yellowText?: string;
  whiteText?: string;
  blueText?: string;
  stroke: boolean;
  size: string;
};
const SubHeading = (props: Props) => {
  return (
    <div className="sub-heading">
      <h2
        className="text-black"
        style={{
          fontSize: props.size,
        }}
      >
        {props.blackText} <span className="text-white">{props.whiteText}</span>{" "}
        <span className="text-accent">{props.yellowText}</span>{" "}
        <span className="text-blue">{props.blueText}</span>
      </h2>
      {props.stroke && <BrushStroke />}
    </div>
  );
};

export default SubHeading;
