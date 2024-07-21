import React from "react";
import style from "./OppItem.module.scss";
import { IItem } from "../../types";

interface Props {
  item: IItem;
}

const OppItem: React.FC<Props> = ({ item }) => {
  return (
    <div className={style.item}>
      <div className={style.itemWrap}>
        <div className={style.itemContent}>
          <h1 className={style.title}>{item.title}</h1>
          <p className={style.desc}>{item.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default OppItem;
