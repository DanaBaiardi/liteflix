import { ReactNode, useState } from "react";
import styles from "./dropdown.module.scss";

interface DropDownProps {
  element: ReactNode;
  children: ReactNode;
}

const Dropdown = ({ element, children }: DropDownProps) => {
  const [display, setDisplay] = useState(false);
  return (
    <div
      className={styles.dropdownContainer}
      onClick={() => setDisplay(!display)}
    >
      {element}
      {display && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default Dropdown;
