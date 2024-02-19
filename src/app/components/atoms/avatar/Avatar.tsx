import Image, { StaticImageData } from "next/image";
import styles from "./avatar.module.scss";

interface AvatarProps {
  imageSrc: StaticImageData;
}
const Avatar = ({ imageSrc }: AvatarProps) => {
  return (
    <Image className={styles.avatar} src={imageSrc} alt="foto de perfil" />
  );
};

export default Avatar;
