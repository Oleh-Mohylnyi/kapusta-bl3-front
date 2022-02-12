import sprite from "../../images/sprite.svg";
import moment from "moment";
import "moment/locale/ru";
import s from "./Period.module.css";

function Period() {
//   const [value, onChange] = useState(new Date());

  return (
    <div className={s.container}>
      <p className={s.title}>Текущий период:</p>
      <div className={s.dateWrapper}>
      <button  type="button" onClick={()=> console.log("butoon")} className={`${s.button} ${s.buttonLeft}`}>
          <svg width="8.21" height="18.24" className={`${s.icon} ${s.iconLeft}`}>
              <use href={`${sprite}#icon-arrow-left`}></use>
          </svg>
      </button>

      <p className={s.date}>{moment(moment().format()).format('MMMM YYYY')}</p>

      <button  type="button" onClick={()=> console.log("butoon")} className={`${s.button} ${s.buttonRight}`}>
          <svg width="8.21" height="18.24" className={`${s.icon} ${s.iconRight}`}>
              <use href={`${sprite}#icon-arrow-right`}></use>
          </svg>
      </button>
      </div>
      
    </div>
  );
}

export default Period;