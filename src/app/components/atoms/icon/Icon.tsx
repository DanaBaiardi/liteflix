import React from "react";
import PlusIcon from "@/app/assets/icons/Plus";
import AttachIcon from "@/app/assets/icons/Attach";
import MenuIcon from "@/app/assets/icons/Menu";
import BellIcon from "@/app/assets/icons/Bell";
import PlayIcon from "@/app/assets/icons/Play";
import PlaySmallIcon from "@/app/assets/icons/PlaySmall";
import ArrowIcon from "@/app/assets/icons/Arrow";
import HeartIcon from "@/app/assets/icons/Heart";
import CheckIcon from "@/app/assets/icons/Check";
import StarIcon from "@/app/assets/icons/Star";
import CloseIcon from "@/app/assets/icons/Close";
import styles from "./icon.module.scss";

interface IconProps {
  iconName: string;
  color?: string;
  isActive?: boolean;
  borderColor?: string;
  onClick?: (prev: any) => void;
}

const Icon = ({
  iconName,
  color = "#fff",
  onClick,
  isActive,
  borderColor,
}: IconProps) => {
  // Función para renderizar el icono basado en el nombre proporcionado
  const renderIcon = () => {
    switch (iconName) {
      case "plus":
        return <PlusIcon color={color} />;

      case "attach":
        return <AttachIcon color={color} />;

      case "menu":
        return <MenuIcon color={color} />;

      case "bell":
        return <BellIcon color={color} />;

      case "play":
        return <PlayIcon color={color} />;

      case "arrowUp":
        return <ArrowIcon color={color} />;

      case "arrowDown":
        return <ArrowIcon className={styles.rotate180} color={color} />;

      case "heart":
        return <HeartIcon isActive={isActive} color={color} />;

      case "check":
        return <CheckIcon color={color} />;

      case "star":
        return <StarIcon color={color} />;

      case "close":
        return <CloseIcon color={color} />;

      case "playSmall":
        return <PlaySmallIcon color={color} borderColor={borderColor} />;

      default:
        return null;
    }
  };

  return (
    <div onClick={onClick} className={onClick ? styles.cursorPointer : ""}>
      {renderIcon()}
    </div>
  );
};

export default Icon;
