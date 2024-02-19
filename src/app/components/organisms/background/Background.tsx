import Image from "next/image";
import styles from "./background.module.scss";
import React, { useEffect, useState } from "react";

interface BackgroundProps {
  children: React.ReactNode;
  backgrounds: string[];
}

const Background = ({ children, backgrounds }: BackgroundProps) => {

  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % backgrounds.length
      );
    }, 20000);

    return () => clearInterval(intervalId);
  }, [backgrounds.length]);

  return (
    <div className={styles.backgroundContainer}>
      <>
        {backgrounds?.map((background: string, index: number) => (
          <Image
            key={index}
            src={background}
            alt="background"
            fill
            className={`${styles.backgroundImage} ${
              currentBackgroundIndex === index ? styles.fadeIn : styles.fadeOut
            }`}
          />
        ))}
        <div className={styles.body}>{children}</div>
      </>
    </div>
  );
};

export default Background;
