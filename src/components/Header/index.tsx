import React, {useState} from 'react';

import style from "./style.module.scss"


export const Header: React.FC = () => {
  const [isMenuOpen, changeMenuState] = useState(false)


  return (
    <>
      <header className={style.header}>
        <div className={style.desktopMenu}></div>
        <div className={style.mobileMenu}>
          <div onClick={() => changeMenuState(isMenuOpen)} >
            <div className={style.burgerMenu} />
          </div>
          <div>fdsalk</div>
        </div>
      </header>
    </>
  );
};
