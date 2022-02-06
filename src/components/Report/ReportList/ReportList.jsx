import ReportItem from "../ReportItem/ReportItem";
import s from "./ReportList.module.css";

export default function ReportList({ types }) {
  return (
    <section>
      <ul className={s.list}>
        {types
          .map
          // { id, type, sum }
          ()}
        <ReportItem
        // key={id}
        // name={type}
        // sum={sum}

        />
      </ul>
    </section>
  );
}
