// import ReportExpenses from "../ReportExpenses/ReportExpenses";
// import ReportIncome from "../ReportIncome/ReportIncome";
import sprite from "../../../images/sprite/report_sprite.svg";
import s from "./Report.module.scss";

// export default function Report({ month, year, typesIncome, typesExpenses }) {
//   return (
//     <>
//       <ReportIncome month={month} year={year} typesIncome={typesIncome} />
//       <ReportExpenses month={month} year={year} typesExpenses={typesExpenses} />
//     </>
//   );
// }

export default function Report() {
  return (
    <section className={s.section}>
      <div className={s.tab}>
        <button className={s.arrow_left}></button>
        <h2 className={s.title}>Расходы</h2>
        <button className={s.arrow_right}></button>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <p className={s.text}>5000.00</p>
          <svg className={s.icon}>
            <use href={sprite + `#icon-products`}></use>
          </svg>
          <p className={s.text}>Продукты</p>
        </li>

        <li className={s.item}>
          <p className={s.text}>5000.00</p>
          <svg className={s.icon}>
            <use href={sprite + `#icon-products`}></use>
          </svg>
          <p className={s.text}>Продукты</p>
        </li>

        <li className={s.item}>
          <p className={s.text}>5000.00</p>
          <svg className={s.icon}>
            <use href={sprite + `#icon-products`}></use>
          </svg>
          <p className={s.text}>Продукты</p>
        </li>

        <li className={s.item}>
          <p className={s.text}>5000.00</p>
          <svg className={s.icon}>
            <use href={sprite + `#icon-products`}></use>
          </svg>
          <p className={s.text}>Продукты</p>
        </li>

        <li className={s.item}>
          <p className={s.text}>5000.00</p>
          <svg className={s.icon}>
            <use href={sprite + `#icon-products`}></use>
          </svg>
          <p className={s.text}>Продукты</p>
        </li>

        <li className={s.item}>
          <p className={s.text}>5000.00</p>
          <svg className={s.icon}>
            <use href={sprite + `#icon-products`}></use>
          </svg>
          <p className={s.text}>Продукты</p>
        </li>

        <li className={s.item}>
          <p className={s.text}>5000.00</p>
          <svg className={s.icon}>
            <use href={sprite + `#icon-products`}></use>
          </svg>
          <p className={s.text}>Продукты</p>
        </li>

        <li className={s.item}>
          <p className={s.text}>5000.00</p>
          <svg className={s.icon}>
            <use href={sprite + `#icon-products`}></use>
          </svg>
          <p className={s.text}>Продукты</p>
        </li>

        <li className={s.item}>
          <p className={s.text}>5000.00</p>
          <svg className={s.icon}>
            <use href={sprite + `#icon-products`}></use>
          </svg>
          <p className={s.text}>Продукты</p>
        </li>

        <li className={s.item}>
          <p className={s.text}>5000.00</p>
          <svg className={s.icon}>
            <use href={sprite + `#icon-products`}></use>
          </svg>
          <p className={s.text}>Продукты</p>
        </li>

        <li className={s.item}>
          <p className={s.text}>5000.00</p>
          <svg className={s.icon}>
            <use href={sprite + `#icon-products`}></use>
          </svg>
          <p className={s.text}>Продукты</p>
        </li>
      </ul>
    </section>
  );
}
