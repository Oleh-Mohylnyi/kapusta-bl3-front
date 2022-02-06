import ReportIcon from "../ReportIcon/ReportIcon";
import s from "./ReportItem.module.css";

export default function ReportItem({ key, name, sum }) {
  return (
    <li key={key}>
      <p className={s.text}>{sum}</p>
      <ReportIcon name={name} />
      <p className={s.text}>{name}</p>
    </li>
  );
}
