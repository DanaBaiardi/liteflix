import styles from "./hero.module.scss";
import Button from "../../molecules/button/Button";
import Heading from "../../atoms/heading/Heading";
import { useEffect, useState } from "react";

interface HeroProps {
  titles: string[];
}

const Hero = ({ titles }: HeroProps) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 20000);

    return () => clearInterval(intervalId);
  }, [titles.length]);

  return (
    <div className={styles.hero}>
      <p className={styles.text20}>
        original de <b>liteflix</b>
      </p>

      <Heading
        title={titles[currentTitleIndex]}
        size={"h1"}
        className={`${styles.title}`}
      />

      <div className={styles.buttonsWrapper}>
        <Button label={"reproducir"} icon="play" />
        <Button label={"mi lista"} icon="plus" variant="secondary" />
      </div>
    </div>
  );
};

export default Hero;
