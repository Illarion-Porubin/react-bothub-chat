import React from "react";
import style from "./Billboard.module.scss";
import lightsBg from "../../assets/svg/lightsBg.svg";
import lights from "../../assets/svg/lights.svg";
import avatar from "../../assets/png/avatar.png";
import chatIcon from "../../assets/png/chatIcon.png";
import userIcon from "../../assets/png/userIcon.png";
import inputBtn from "../../assets/png/inputBtn.png";

const Billboard: React.FC = () => {
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
                      <div className={style.bothubText}>
                        <span className={style.text}>
                          BotHub: ChatGPT & Midjourney
                        </span>
                        <span className={style.text}>bot</span>
                      </div>
                    </div>
                    <div className={style.chatHeadCheck}>
                      <label
                        className={style.saveContent}
                        htmlFor="chatHeadInput"
                      >
                        <input
                          className={style.input}
                          disabled
                          type="checkbox"
                          id="chatHeadInput"
                        />
                        <span className={style.check}>
                          <svg
                            className={style.checkOk}
                            viewBox="0 0 16 17"
                            width="20"
                            height="20"
                            fill="none"
                          >
                            <path
                              d="M12.7908 4.23434C13.0697 4.54679 13.0697 5.05421 12.7908 5.36666L7.07711 11.7657C6.79813 12.0781 6.34505 12.0781 6.06606 11.7657L3.20924 8.56616C2.93025 8.25371 2.93025 7.74629 3.20924 7.43384C3.48823 7.12139 3.9413 7.12139 4.22029 7.43384L6.5727 10.0659L11.7819 4.23434C12.0609 3.92189 12.514 3.92189 12.793 4.23434H12.7908Z"
                              fill="white"
                            ></path>
                          </svg>
                        </span>
                        <span className={style.typography}>
                          Сохранить контекст
                        </span>
                      </label>
                    </div>
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
