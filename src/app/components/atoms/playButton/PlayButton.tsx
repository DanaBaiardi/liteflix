import classNames from "classnames";
import Icon from "../icon/Icon";
import styles from "./playButton.module.scss";

interface PlayButtonProps {
  size: "small" | "big";
  borderColor?: string;
  color?: string;
}

const PlayButton = ({ size, borderColor, color }: PlayButtonProps) => {
  return (
    <button className={classNames(styles.playButton, styles[size])}>
      <Icon
        color={color}
        borderColor={borderColor}
        iconName={size === "big" ? "play" : "playSmall"}
      />
    </button>
  );
};

export default PlayButton;
