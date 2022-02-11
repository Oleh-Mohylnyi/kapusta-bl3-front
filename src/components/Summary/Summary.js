import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import s from "./summary.module.scss";

const Summary = () => {
  const viewPort = useWindowDimensions();
  return (
    <>
      {viewPort.width > 768 && (
        <div className={s.summary}>
          <h4>Сводка</h4>
          <ul className={s.summary_list}>
            <li className={s.summary_item}>
              <span>Ноябрь</span>
              <span>1 000.00</span>
            </li>
            <li className={s.summary_item}>
              <span>Октябрь</span>
              <span>1 000.00</span>
            </li>
            <li className={s.summary_item}>
              <span>Сентябрь</span>
              <span>1 000.00</span>
            </li>
            <li className={s.summary_item}>
              <span>Август</span>
              <span>1 000.00</span>
            </li>
            <li className={s.summary_item}>
              <span>Июль</span>
              <span>1 000.00</span>
            </li>
            <li className={s.summary_item}>
              <span>Июнь</span>
              <span>1 000.00</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
export default Summary;
