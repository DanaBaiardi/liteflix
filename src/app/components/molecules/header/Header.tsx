import React from "react";
import styles from "./header.module.scss";
import Logo from "../../atoms/logo/Logo";
import Button from "../button/Button";
import Icon from "../../atoms/icon/Icon";
import Avatar from "../../atoms/avatar/Avatar";
import defaultAvatar from "../../../assets/images/perfil.png";
import { State, useAppContext } from "@/app/context";

const Header = () => {
  const { setAppState } = useAppContext();

  return (
    <header className={styles.header}>
      <div className={styles.leftWrapper}>
        <Logo />
        <Button
          label="AGREGAR PELÍCULA"
          variant="tertiary"
          bold
          icon="plus"
          onClick={() =>
            setAppState((prevState: State) => ({
              ...prevState,
              displayAddMovie: true,
            }))
          }
        />
      </div>

      <div className={styles.rightWrapper}>
        <Icon
          iconName="menu"
          onClick={() =>
            setAppState((prevState: State) => ({
              ...prevState,
              toggleMenu: true,
            }))
          }
        />

        <Icon iconName="bell" />
        <Avatar imageSrc={defaultAvatar} />
      </div>
    </header>
  );
};

export default Header;
