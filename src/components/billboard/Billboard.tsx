import React from "react";
import style from "./Billboard.module.scss";
import lightsBg from "../../assets/svg/lightsBg.svg";
import lights from "../../assets/svg/lights.svg";
import avatar from "../../assets/png/avatar.png";
import chatIcon from "../../assets/png/chatIcon.png";
import userIcon from "../../assets/png/userIcon.png";
import inputBtn from "../../assets/png/inputBtn.png";

const Billboard: React.FC = () => {
  const [check, setCheck] = React.useState(false);

  return (
    <section className={style.section} id="started">
      <div className={style.bg}></div>
      <div className="container">
        <div className={style.billboard}>
          <div className={style.info}>
            <h1 className={style.title}>ChatGPT: ваш умный помощник</h1>
            <p className={style.desc}>
              Экспериментируйте с ChatGPT-4, Midjourney и Claude в одном месте.
              Без VPN и абонентской платы. Создавайте контент, обрабатывайте
              данные и получайте ответы на вопросы через удобный интерфейс!
            </p>
            <button className={style.btn}>Начать работу</button>
          </div>
          <div className={style.chatWrap}>
            <div className={style.chat}>
              <div className={style.lightsBgWrap}>
                <img className={style.lightsBg} src={lightsBg} alt="lightsBg" />
              </div>
              <div className={style.lightsWrap}>
                <img className={style.lights} src={lights} alt="lights" />
              </div>
              <div className={style.chatMain}>
                <div className={style.chatHead}>
                  <div className={style.chatHeadContent}>
                    <div className={style.chatHeadInfo}>
                      <div className={style.bothubLogoWrap}>
                        <img
                          className={style.bothubLogo}
                          src={avatar}
                          alt="avatar"
                        />
                      </div>
                      <div className={style.bothubInfo}>
                        <p className={style.bothubText}>
                          BotHub: ChatGPT & Midjourney
                        </p>
                        <span className={style.bothubText}>bot</span>
                      </div>
                    </div>
                    <label
                        className={style.saveContent}
                        htmlFor="chatHeadInput"
                      >
                        Сохранить контекст
                        <input
                          className={style.saveContentCheck}
                          checked={check}
                          onChange={() => setCheck(!check)}
                          type="checkbox"
                          id="chatHeadInput"
                        />
                      </label>
                  </div>
                </div>
                <div className={style.chatBody}>
                  <div className={style.chatDisplay}>
                    <div className={style.chatContent}>
                      <div className={style.chatItems}>
                        {new Array(10).fill("").map((_, id) => (
                          <React.Fragment key={id}>
                            <div className={style.wrap}>
                              <div className={style.item}>
                                <span className={style.name}>Gemini</span>
                                <div className={style.infoChat}>
                                  <img
                                    className={style.icon}
                                    src={chatIcon}
                                    alt="chatIcon"
                                  />
                                  <p className={style.text}>
                                    Привет! Чем я могу помочь?
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className={`${style.wrap} ${style.user}`}>
                              <div className={style.item}>
                                <span className={style.name}>Gemini</span>
                                <div className={style.infoChat}>
                                  <img
                                    className={style.icon}
                                    src={userIcon}
                                    alt="chatIcon"
                                  />
                                  <p className={style.text}>Привет бот?</p>
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={style.chatPrompt}>
                    <input
                      className={style.chatInput}
                      type="text"
                      placeholder="Спроси о чем-нибудь..."
                    />
                    <button className={style.chatInputBtn}>
                      <img src={inputBtn} alt="inputBtn" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billboard;
