import styles from "../home-hero.module.sass";

type Props = {
  link: string;
};

const IntroVideo = (props: Props) => {
  const videoLink = props.link;
  return (
    <div className={styles.section3}>
      <iframe
        src={videoLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default IntroVideo;
