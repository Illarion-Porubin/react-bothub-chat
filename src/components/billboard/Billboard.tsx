import React from "react";
import style from "./Billboard.module.scss";
import lightsBg from "../../assets/svg/lightsBg.svg";
import lights from "../../assets/svg/lights.svg";
import avatar from "../../assets/png/avatar.png";
import chatIcon from "../../assets/png/chatIcon.png";
import userIcon from "../../assets/png/userIcon.png";
import inputBtn from "../../assets/png/inputBtn.png";
import { Configuration, OpenAIApi } from "openai-edge";
import { motion } from "framer-motion";

interface IMessages {
  role: "user" | "assistant";
  content: string;
}

const Billboard: React.FC = () => {
  const [check, setCheck] = React.useState(false);
  const [messageList, setMessageList] = React.useState<IMessages[]>([]);
  const [text, setText] = React.useState<string>("");

  const configuration = new Configuration({
    apiKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MGE2ZTgxLTRiMDMtNGQxNC1hMGQxLWI3N2RkZjlkMDY2ZiIsImlzRGV2ZWxvcGVyIjp0cnVlLCJpYXQiOjE3MjA1Mjk0NDgsImV4cCI6MjAzNjEwNTQ0OH0.Dm8QJpXfX2ChWcYZ5c0SLNzGpmEmh1dYPAMW3wz4v5M",
    basePath: "https://bothub.chat/api/v2/openai/v1",
  });
  const openai = new OpenAIApi(configuration);

  const prompt = async () => {
    if (text.trim() !== "") {
      setMessageList((prev) => [...prev, { role: "user", content: text }]);
      setText("");
    }
  };

  // Scroll to the bottom of the chat container
  const scrollToBottom = () => {
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  const gemini = async () => {
    try {
      const completion = await openai.createChatCompletion({
        messages: messageList,
        model: "gemini-pro",
      });
      const message = (await completion.json()).choices[0].message
        .content as string;
      setMessageList((prev) => [
        ...prev,
        { role: "assistant", content: message },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (
      messageList.length > 0 &&
      messageList[messageList.length - 1].role === "user"
    ) {
      gemini();
    }
    scrollToBottom();
  }, [messageList]);

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
                  <div className={style.chatDisplay} id="chat-container">
                    <div className={style.chatContent}>
                      <div className={style.chatItems}>
                        {messageList.map((item: IMessages, id) => (
                          <motion.div
                            className={
                              item.role === "user"
                                ? `${style.wrap} ${style.user}`
                                : style.wrap
                            }
                            key={id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className={style.item}>
                              <span className={style.name}>
                                {item.role === "user" ? "" : "Gemini"}
                              </span>
                              <div className={style.infoChat}>
                                <img
                                  className={style.icon}
                                  src={
                                    item.role === "user" ? userIcon : chatIcon
                                  }
                                  alt={
                                    item.role === "user"
                                      ? "chatIcon"
                                      : "userIcon"
                                  }
                                />
                                <p className={style.text}>
                                  {item.content}
                                </p>                       
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={style.chatPrompt}>
                    <textarea
                      className={style.chatInput}
                      placeholder="Спроси о чем-нибудь..."
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      onKeyDown={(e) => e.key === "Enter" && prompt()}
                    />
                    <input className={style.chatInputBtn} type="image" src={inputBtn} alt="inputBtn" onClick={prompt}/>
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
