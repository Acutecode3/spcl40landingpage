type Props = {
  isRight?: boolean;
};

const LeftArrow = (props: Props) => {
  return (
    <span className="white_circle">
      <svg
        style={{ transform: props.isRight ? "rotate(180deg)" : "rotate(0)" }}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008"
          stroke="#292D32"
          strokeWidth="2.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default LeftArrow;