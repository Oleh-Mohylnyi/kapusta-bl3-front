import ReportIcon from "../ReportIcon/ReportIcon";
import s from "./ReportItem.module.scss";

export default function ReportItem({ type, icon, sum }) {
  return (
    <li  className={s.item}>
      <p className={s.text}>{sum}</p>
      <ReportIcon name={icon} />
      <p className={s.text}>{type}</p>
    </li>
  );
}
