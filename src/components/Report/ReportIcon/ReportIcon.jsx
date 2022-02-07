import icons from "../../../images/sprite.svg";
import s from "./ReportIcon.module.scss";

export default function ReportIcon({ name, color, size }) {
  return (
    <svg className={s.icon} fill={color} width={size} height={size}>
      <use href={`${icons}#icon-${name}`}></use>
    </svg>
  );
}
