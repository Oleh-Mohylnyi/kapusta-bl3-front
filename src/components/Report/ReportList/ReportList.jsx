import ReportItem from "../ReportItem/ReportItem";

import s from "./ReportList.module.scss";

export default function ReportList({ types }) {

  return (
    <ul className={s.list}>
      {types.length>0 && types.map(({ type, icon, sum }, index) => {
        return <ReportItem key={index} type={type} icon={icon} sum={sum} />;
      })}
    </ul>
  );
}
