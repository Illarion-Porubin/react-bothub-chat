import React from "react";
import style from "./Footer.module.scss";
import logo from "../../assets/png/logo.png";
import alari from "../../assets/png/alri.png";

const Footer: React.FC = () => {
  return (
    <footer className={style.wrap}>
      <div className="container">
        <div className={style.footer}>
          <div className={style.info}>
            <a href="/#">
              <img className={style.image} src={logo} alt="logo" />
            </a>
            <p className={style.text}>ООО «Ботхаб» ОГРН 1236300016259</p>
            <p className={style.text}>@BotHub 2023</p>
            <a className={style.text} href="/#">
              Пользовательское соглашение
            </a>
            <a href="/#">
              <img src={alari} alt="alari" />
            </a>
          </div>
          <nav className={style.menu}>
            <ul className={style.category}>
              <li className={style.item}>
                <p className={style.title}>Информация</p>
              </li>
              <li className={style.item}>
                <a className={style.link} href="/#">Главная страница</a>
              </li>
              <li className={style.item}>
                <a className={style.link} href="/#">Тарифы</a>
              </li>
              <li className={style.item}>
                <a className={style.link} href="/#">Контакты</a>
              </li>
              <li className={style.item}>
                <a className={style.link} href="/#">Наши возможности</a>
              </li>
              <li className={style.item}>
                <a className={style.link} href="/#">Модели нейросетей</a>
              </li>
              <li className={style.item}>
                <a className={style.link} href="/#">О Нас</a>
              </li>
              <li className={style.item}>
                <a href="/#">Для инвесторов</a>
              </li>
            </ul>
            <ul className={style.category}>
              <li className={style.item}>
                <p className={style.title}>Наши продукты</p>
              </li>
              <li className={style.item}>
                <a className={style.link} href="/#">ChatGPT для бизнеса</a>
              </li>
              <li className={style.item}>
                <a className={style.link} href="/#">Агрегатор нейросетей</a>
              </li>
              <li className={style.item}>
                <a className={style.link} href="/#">ChatGPT в Telegram</a>
              </li>
            </ul>
            <ul className={style.category}>
              <li className={style.item}>
                <p className={style.title}>Ссылки</p>
              </li>
              <li className={style.item}>
                <a className={style.link} href="/#">Сообщество в телеграм</a>
              </li>
              <li className={style.item}>
                <a className={style.link} href="/#">Телеграм бот</a>
              </li>
              <li className={style.item}>
                <a className={style.link} href="/#">email@bothub.chat</a>
              </li>
            </ul>
            <ul className={style.category}>
              <ul>
                <li className={style.item}>
                  <p className={style.title}>Блог</p>
                </li>
                <li className={style.item}>
                  <a className={style.link} href="/#">Наш блог</a>
                </li>
                <li className={style.item}>
                  <a className={style.link} href="/#">Habr</a>
                </li>
                <li className={style.item}>
                  <a className={style.link} href="/#">Телеграм</a>
                </li>
              </ul>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
