import icons from "../../../images/sprite.svg";
import s from "./ReportIcon.module.scss";

export default function ReportIcon({ name }) {
  return (
    <svg className={s.icon}>
      <use href={`${icons}#icon-${name}`}></use>
    </svg>
  );
}
