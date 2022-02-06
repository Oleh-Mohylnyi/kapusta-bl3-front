import ReportIcon from "../ReportIcon/ReportIcon";
import s from "./ReportItem.module.css";

export default function ReportItem({ sum, id, name }) {
  return (
    <article>
      <p className={s.text}>{sum}</p>
      <ReportIcon id={id} />
      <p className={s.text}>{name}</p>
    </article>
  );
}
