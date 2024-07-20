import React from "react";
import style from "./Generation.module.scss";
import image from "../../assets/png/block.png";

const Generation: React.FC = () => {
  return (
    <div className="container">
      <div className={style.generation}>
        <img
          className={style.image}
          src={image}
          alt="Генерация Изображений Через Midjourney и DALL-e"
        />
        <div className={style.info}>
          <h2 className={style.title}>
            Генерация Изображений Через Midjourney
          </h2>
          <p className={style.desc}>
            MidJourney - инструмент для создания уникальных изображений. Наши
            алгоритмы помогут вам воплотить в жизнь вашу идею. Начните
            генерировать изображения с MidJourney прямо сейчас! Кликните на
            кнопку ниже, чтобы начать творить.
          </p>
          <button className={style.btn}>Попробовать Midjourney</button>
        </div>
      </div>
    </div>
  );
};

export default Generation;
