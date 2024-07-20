import React from "react";
import style from "./Footer.module.scss";
import logo from "../../assets/png/logo.png";

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
              <img src="/#" alt="алари" />
            </a>
          </div>
          <nav className={style.menu}>
            <ul className={style.category}>
              <li className={style.item}>
                <p>Информация</p>
              </li>
              <li className={style.item}>
                <a href="/#">Главная страница</a>
              </li>
              <li className={style.item}>
                <a href="/#">Тарифы</a>
              </li>
              <li className={style.item}>
                <a href="/#">Контакты</a>
              </li>
              <li className={style.item}>
                <a href="/#">Наши возможности</a>
              </li>
              <li className={style.item}>
                <a href="/#">Модели нейросетей</a>
              </li>
              <li className={style.item}>
                <a href="/#">О Нас</a>
              </li>
              <li className={style.item}>
                <a href="/#">Для инвесторов</a>
              </li>
            </ul>
            <ul className={style.category}>
              <li className={style.item}>
                <p>Наши продукты</p>
              </li>
              <li className={style.item}>
                <a href="/#">ChatGPT для бизнеса</a>
              </li>
              <li className={style.item}>
                <a href="/#">Агрегатор нейросетей</a>
              </li>
              <li className={style.item}>
                <a href="/#">ChatGPT в Telegram</a>
              </li>
            </ul>
            <ul className={style.category}>
              <li className={style.item}>
                <p>Ссылки</p>
              </li>
              <li className={style.item}>
                <a href="/#">Сообщество в телеграм</a>
              </li>
              <li className={style.item}>
                <a href="/#">Телеграм бот</a>
              </li>
              <li className={style.item}>
                <a href="/#">email@bothub.chat</a>
              </li>
            </ul>
            <ul className={style.category}>
              <ul>
                <li className={style.item}>
                  <p>Блог</p>
                </li>
                <li className={style.item}>
                  <a href="/#">Наш блог</a>
                </li>
                <li className={style.item}>
                  <a href="/#">Habr</a>
                </li>
                <li className={style.item}>
                  <a href="/#">Телеграм</a>
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
