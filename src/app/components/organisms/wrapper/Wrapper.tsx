import { ReactElement, useState, useEffect } from "react";
import styles from "./wrapper.module.scss";
import Icon from "../../atoms/icon/Icon";
import { State, useAppContext } from "@/app/context";

interface WrapperProps {
  children: ReactElement;
}

const Wrapper = ({ children }: WrapperProps) => {
  const { setAppState } = useAppContext();
  const [isShown, setIsShown] = useState(false);

  const handleCloseWrapper = () => {
    setAppState((prevState: State) => ({
      ...prevState,
      displayAddMovie: false,
    }));
  };

  return (
    <section className={`${styles.wrapperContainer}`}>
      <div className={`${styles.wrapper} ${isShown ? styles.shown : ""}`}>
        <div className={styles.wrapperHeader}>
          <Icon iconName="close" onClick={handleCloseWrapper} />
        </div>
        {children}
      </div>
    </section>
  );
};

export default Wrapper;
