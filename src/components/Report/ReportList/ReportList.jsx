import ReportItem from "../ReportItem/ReportItem";

import s from "./ReportList.module.scss";

export default function ReportList({ types }) {
  return (
    <section>
      <ul className={s.list}>
        {types.map(({ id, type, icon, sum }) => (
          <ReportItem key={id} type={type} icon={icon} sum={sum} />
        ))}
      </ul>
    </section>

    // <ul className={s.list}>
    //   <li className={s.item}>
    //     <p className={s.text}>5000.00</p>
    //     <svg className={s.icon}>
    //       <use href={sprite + `#icon-products`}></use>
    //     </svg>
    //     <p className={s.text}>Продукты</p>
    //   </li>

    //   <li className={s.item}>
    //     <p className={s.text}>5000.00</p>
    //     <svg className={s.icon}>
    //       <use href={sprite + `#icon-products`}></use>
    //     </svg>
    //     <p className={s.text}>Продукты</p>
    //   </li>

    //   <li className={s.item}>
    //     <p className={s.text}>5000.00</p>
    //     <svg className={s.icon}>
    //       <use href={sprite + `#icon-products`}></use>
    //     </svg>
    //     <p className={s.text}>Продукты</p>
    //   </li>

    //   <li className={s.item}>
    //     <p className={s.text}>5000.00</p>
    //     <svg className={s.icon}>
    //       <use href={sprite + `#icon-products`}></use>
    //     </svg>
    //     <p className={s.text}>Продукты</p>
    //   </li>

    //   <li className={s.item}>
    //     <p className={s.text}>5000.00</p>
    //     <svg className={s.icon}>
    //       <use href={sprite + `#icon-products`}></use>
    //     </svg>
    //     <p className={s.text}>Продукты</p>
    //   </li>

    //   <li className={s.item}>
    //     <p className={s.text}>5000.00</p>
    //     <svg className={s.icon}>
    //       <use href={sprite + `#icon-products`}></use>
    //     </svg>
    //     <p className={s.text}>Продукты</p>
    //   </li>

    //   <li className={s.item}>
    //     <p className={s.text}>5000.00</p>
    //     <svg className={s.icon}>
    //       <use href={sprite + `#icon-products`}></use>
    //     </svg>
    //     <p className={s.text}>Продукты</p>
    //   </li>

    //   <li className={s.item}>
    //     <p className={s.text}>5000.00</p>
    //     <svg className={s.icon}>
    //       <use href={sprite + `#icon-products`}></use>
    //     </svg>
    //     <p className={s.text}>Продукты</p>
    //   </li>

    //   <li className={s.item}>
    //     <p className={s.text}>5000.00</p>
    //     <svg className={s.icon}>
    //       <use href={sprite + `#icon-products`}></use>
    //     </svg>
    //     <p className={s.text}>Продукты</p>
    //   </li>

    //   <li className={s.item}>
    //     <p className={s.text}>5000.00</p>
    //     <svg className={s.icon}>
    //       <use href={sprite + `#icon-products`}></use>
    //     </svg>
    //     <p className={s.text}>Продукты</p>
    //   </li>

    //   <li className={s.item}>
    //     <p className={s.text}>5000.00</p>
    //     <svg className={s.icon}>
    //       <use href={sprite + `#icon-products`}></use>
    //     </svg>
    //     <p className={s.text}>Продукты</p>
    //   </li>
    // </ul>
  );
}
