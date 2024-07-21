import React from "react";
import s from "./MobileMenuNav.module.scss";

interface Props {
  menuList: { value: string; link: string }[];
  active: boolean;
}

export const MobileMenuNav: React.FC<Props> = ({ menuList, active }) => {
  const menuActive = active ? `${s.mainClassName} ${s.active} ` : `${s.mainClassName}`;
  
  return (
    <div className={ menuActive } style={{zIndex: active ? -1 : 9}}>
      <nav className={s.menu}>
        <ul className={s.list}>
          {menuList.map((item, id: number) => (
            <li className={s.item} key={id}>
              <a className={s.link} href={item.link}>
                {item.value}
              </a> 
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
