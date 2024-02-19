import Avatar from "../../atoms/avatar/Avatar";
import Icon from "../../atoms/icon/Icon";
import styles from "./menuList.module.scss";
import defaultAvatar from "../../../assets/images/perfil.png";
import { MENU_OPTIONS } from "./options";
import Button from "../button/Button";
import { State, useAppContext } from "@/app/context";
import {  useState } from "react";

const MenuList = () => {
  const { setAppState } = useAppContext();
  const [closing, setClosing] = useState(false);

  const handleCloseMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setAppState((prevState: State) => ({
        ...prevState,
        toggleMenu: false,
      }));
    }, 500);
  };

  const handleAddMovie = () => {
    setAppState((prevState: State) => ({
      ...prevState,
      displayAddMovie: true,
    }));

    handleCloseMenu();
  };

  return (
    <section className={`${styles.menuListContainer}`}>
      <aside className={`${styles.sidedrawer} ${closing && styles.closing}`}>
        <div className={styles.listContainer}>
          <header className={styles.asideHeader}>
            <Icon iconName="close" onClick={handleCloseMenu} />
            <div className={styles.rightWrapper}>
              <Icon iconName="bell" />
              <Avatar imageSrc={defaultAvatar} />
            </div>
          </header>

          <ul className={styles.optionsList}>
            {MENU_OPTIONS.map((option, index) => (
              <li key={index}>
                <Button
                  variant="tertiary"
                  label={option.title}
                  icon={option.icon && option.icon}
                  bold={!!option.icon}
                  onClick={!!option.icon ? handleAddMovie : undefined}
                />
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
};

export default MenuList;
