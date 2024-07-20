import React from "react";
import style from "./Header.module.scss";
import logo from "../../assets/png/logo.png";

const Header: React.FC = () => {
  return (
    <div className={style.wrap}>
      <div className="container fix">
        <div className={style.header}>
          <div className={style.menuWrap}>
            <a className={style.logoWrap} href="/#">
              <img className={style.logo} src={logo} alt="logo" />
            </a>
            <nav className={style.menu}>
              <button className={style.item}>
                <a className={style.link} href="/#">
                  Продукты
                </a>
                <span className={style.arrow}>
                  <svg
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="none"
                    style={{ transform: `rotateZ(0deg)` }}
                  >
                    <path
                      d="M3 6L8 10L13 6"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
              </button>
              <a className={style.item} href="/#">
                Пакеты
              </a>
              <a className={style.item} href="/#">
                API
              </a>
              <a className={style.item} href="/#">
                Блог
              </a>
            </nav>
          </div>
          <div className={style.buttons}>
            <button className={style.headerLang}>
              <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.4986 11.961C17.8311 11.0092 18.0006 10.0082 18 9C18.0008 7.96298 17.8216 6.9337 17.4703 5.958C16.2206 2.48786 12.8957 0 9 0C5.10429 0 1.77943 2.48786 0.529717 5.958C0.178416 6.9337 -0.000817117 7.96298 2.80037e-06 9C-0.000765055 10.037 0.178466 11.0663 0.529717 12.042C1.77943 15.5121 5.10429 18 9 18C12.8957 18 16.2206 15.5121 17.4703 12.042C17.4816 12.0157 17.4911 11.9886 17.4986 11.961ZM9 16.7104C8.65671 16.7104 8.10514 16.0894 7.64229 14.7047C7.40274 13.9621 7.22514 13.2009 7.11129 12.429H10.89C10.7601 13.266 10.5814 14.0349 10.359 14.7047C9.89614 16.0894 9.34329 16.7104 9.00129 16.7104H9ZM6.95571 11.1394C6.8273 9.71603 6.8273 8.28397 6.95571 6.86057H11.0443C11.1719 8.284 11.1719 9.71599 11.0443 11.1394H6.95571ZM1.28829 9C1.28829 8.25814 1.39372 7.53943 1.59172 6.86057H5.65972C5.53769 8.28425 5.53769 9.71575 5.65972 11.1394H1.593C1.39152 10.4442 1.28936 9.72388 1.28957 9H1.28829ZM9 1.28957C9.34329 1.28957 9.89486 1.91057 10.3577 3.29529C10.5801 3.96386 10.7589 4.734 10.8887 5.571H7.11C7.23986 4.73271 7.41857 3.96386 7.641 3.29529C8.10386 1.91057 8.65671 1.28957 8.99871 1.28957H9ZM12.339 6.86057H16.407C16.8119 8.25812 16.8119 9.74187 16.407 11.1394H12.339C12.461 9.71575 12.461 8.28425 12.339 6.86057ZM15.903 5.56971H12.1911C11.9623 3.98829 11.5676 2.56757 11.016 1.55829C12.0669 1.84553 13.0454 2.35129 13.8875 3.04253C14.7297 3.73377 15.4164 4.59492 15.903 5.56971ZM6.984 1.55829C6.43114 2.56757 6.03772 3.98829 5.80886 5.56971H2.09572C2.58228 4.59492 3.26906 3.73377 4.11118 3.04253C4.95329 2.35129 5.93178 1.84553 6.98272 1.55829H6.984ZM2.097 12.4303H5.80886C6.03772 14.0117 6.43243 15.4324 6.984 16.4417C5.9331 16.1544 4.95464 15.6486 4.11254 14.9574C3.27044 14.2661 2.58363 13.405 2.097 12.4303ZM11.016 16.4417C11.5689 15.4324 11.9623 14.0117 12.1911 12.4303H15.903C15.4164 13.405 14.7296 14.2661 13.8875 14.9574C13.0454 15.6486 12.0669 16.1544 11.016 16.4417Z"
                  fill="#FFFFFF"
                ></path>
              </svg>
              <span>ru</span>
              <svg
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="none"
                style={{ transform: `rotateZ(0deg)` }}
              >
                <path
                  d="M3 6L8 10L13 6"
                  stroke="#FFFFFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <button className={style.authBtn}>Авторизация</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;