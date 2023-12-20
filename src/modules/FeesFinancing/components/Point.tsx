import styles from "../feesFinancing.module.sass";

type Props = {
  text: string;
};
const Point = (props: Props) => {
  return (
    <div className="flex-row gap-1 items-center">
      <span className={styles.shieldIcon}>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="vuesax/bulk/shield-tick">
            <g id="shield-tick">
              <path
                id="Vector"
                opacity="0.4"
                d="M11.654 2.66018L6.15402 4.72018C5.10402 5.12018 4.24402 6.36018 4.24402 7.49018V15.5902C4.24402 16.4002 4.77402 17.4702 5.42402 17.9502L10.924 22.0602C11.894 22.7902 13.484 22.7902 14.454 22.0602L19.954 17.9502C20.604 17.4602 21.134 16.4002 21.134 15.5902V7.49018C21.134 6.37018 20.274 5.12018 19.224 4.73018L13.724 2.67018C13.164 2.45018 12.224 2.45018 11.654 2.66018Z"
                fill="#FF9005"
              />
              <path
                id="Vector_2"
                d="M11.354 14.8302C11.164 14.8302 10.974 14.7602 10.824 14.6102L9.21396 13.0002C8.92396 12.7102 8.92396 12.2302 9.21396 11.9402C9.50396 11.6502 9.98396 11.6502 10.274 11.9402L11.354 13.0202L15.124 9.25021C15.414 8.96021 15.894 8.96021 16.184 9.25021C16.474 9.54021 16.474 10.0202 16.184 10.3102L11.884 14.6102C11.734 14.7602 11.544 14.8302 11.354 14.8302Z"
                fill="#FF9005"
              />
            </g>
          </g>
        </svg>
      </span>
      <p className={styles.point}>{props.text}</p>
    </div>
  );
};

export default Point;
