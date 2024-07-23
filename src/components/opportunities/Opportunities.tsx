import React from "react";
import OppItem from "../oppItem/OppItem";
import style from "./Opportunities.module.scss";
import items from "../../Opportunities.json";
import { IItem } from "../../types";

const Opportunities: React.FC = () => {
  const itemList = items;
  return (
    <section>
      <div className="container">
        <div className={style.opp}>
          <h1 className={style.title}>Возможности ChatGPT</h1>
          <div className={style.list}>
            {itemList.items.map((item: IItem, id) => (
              <OppItem item={item} key={id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
