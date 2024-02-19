import classNames from "classnames";
import styles from "./button.module.scss";
import Plus from "@/app/assets/icons/Plus";
import Icon from "../../atoms/icon/Icon";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "tertiary" | "white";
  icon?: string;
  bold?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  label,
  variant = "primary",
  bold = false,
  icon,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        styles.button,
        { [styles.bold]: bold },
        styles[variant], {[styles.disabled]: disabled}
      )}
      disabled={disabled}
      onClick={onClick}
    >
       {icon && <Icon iconName={icon} color="#fff" />}
      {label}
    </button>
  );
};

export default Button;
