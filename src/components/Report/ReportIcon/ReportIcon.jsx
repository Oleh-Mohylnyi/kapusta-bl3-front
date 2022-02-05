import icons from "../../../images/sprite.svg";
import s from "./ReportIcon.module.css";

export default function ReportIcon({ id }) {
  return (
    <svg className={s.icon}>
      <use href={`${icons}#icon-${id}`}></use>
    </svg>
  );
}
