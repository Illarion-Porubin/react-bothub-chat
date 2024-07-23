import React from "react";
import s from "./MobileMenuNav.module.scss";
import { motion } from "framer-motion";
import popupIcon1 from "../../../assets/png/popupIcon1.png";
import popupIcon2 from "../../../assets/png/popupIcon2.png";
import popupIcon3 from "../../../assets/png/popupIcon3.png";

interface Props {
  menuList: { value: string; link: string }[];
  active: boolean;
}

export const MobileMenuNav: React.FC<Props> = ({ menuList, active }) => {
  const [popup, setPopup] = React.useState(false);

  const menuActive = active
    ? `${s.mainClassName} ${s.active} `
    : `${s.mainClassName}`;

  const popupList = [
    {
      img: popupIcon1,
      title: "Агрегатор нейросетей BotHub",
      text: "ChatGPT на базе 3.5 и 4.0 версии OpenAI",
    },
    {
      img: popupIcon2,
      title: "Telegram бот",
      text: "Удобный бот в Telegram который всегда под рукой",
    },
    {
      img: popupIcon3,
      title: "Бизнес бот",
      text: "ChatGPT для эффективного решения бизнес задач",
    },
  ];

  return (
    <div className={menuActive} style={{ zIndex: active ? -1 : 9 }}>
      <nav className={s.menu}>
        <ul className={s.list}>
          {menuList.map((item, id: number) =>
            item.value === "Продукты" ? (
              <div className={s.popupWrap} key={id}>
                <div className={s.popup}>
                  <button className={s.item}>{item.value}</button>
                  <button
                    className={s.popupArrow}
                    key={id}
                    onClick={() => setPopup(!popup)}
                  >
                    <span className={s.arrow}>
                      <svg
                        viewBox="0 0 16 16"
                        width="16"
                        height="16"
                        fill="none"
                        style={{
                          transition: `all .3s`,
                          transform: popup
                            ? `rotateZ(0deg)`
                            : `rotateZ(180deg)`,
                        }}
                      >
                        <path
                          d="M3 6L8 10L13 6"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
                <motion.div
                  className={s.popupContentWrap}
                  animate={{
                    opacity: popup ? 1 : 0,
                    visibility: popup ? "visible" : "hidden",
                    width: popup ? "100%" : "100%",
                    height: popup ? "auto" : "0",
                    position: popup ? "relative" : "inherit",
                    top: popup ? "-30px" : "0",
                  }}
                >
                  <div className={s.popupContent}>
                    {popupList.map((item, id) => (
                      <div className={s.popupItem} key={id}>
                        <img
                          className={s.popupIcon}
                          src={item.img}
                          alt={item.title}
                        />
                        <div className={s.popupInfo}>
                          <p className={s.popupTitle}>{item.title}</p>
                          <p className={s.popupText}>{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            ) : (
              <a className={s.item} href={item.link} key={id}>
                {item.value}
              </a>
            )
          )}
          <button className={s.auth}>aвторизация</button>
        </ul>
      </nav>
    </div>
  );
};
