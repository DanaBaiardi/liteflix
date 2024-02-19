import React, { HTMLAttributes } from "react";
import styles from "./dialog.module.scss";

interface DialogProps extends HTMLAttributes<HTMLElement> {
  id: string;
  ariaLabel: string;
  open: boolean;
}

const Dialog: React.FC<DialogProps> = ({ id, ariaLabel, children, open, ...rest }) => {
  return (
    <section className={styles.dialog} id={id} aria-labelledby={ariaLabel} {...rest}>
      <div>{children}</div>
    </section>
  );
};

export default Dialog;