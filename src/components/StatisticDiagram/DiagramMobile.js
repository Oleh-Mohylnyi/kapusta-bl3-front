import s from "./Diagram.module.css";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  ResponsiveContainer,
} from "recharts";

// данные для отрисовки
const data = [
  { name: "Мясо", uv: 1500, id: 0 },
  { name: "Сладости", uv: 1050, id: 3 },
  { name: "Чай", uv: 660, id: 1 },
  { name: "Овощи", uv: 600, id: 1 },
  { name: "Сухофрукты", uv: 530, id: 4 },
  { name: "Макароны", uv: 500, id: 3 },
  { name: "Кофе", uv: 400, id: 0 },
  { name: "Крупы", uv: 300, id: 2 },
  { name: "Молочка", uv: 150, id: 4 },
  { name: "Хлеб", uv: 50, id: 2 },
];

// const showId = (e) => {
//   console.log(e);
//   console.log(e.uv);
// };

//получаю sortedData
const DiagramMobile = ({ sortedData }) => {
  return (
    <ResponsiveContainer
      width="100%"
      hight="100%"
      minWidth={282}
      minHeight={480}
    >
      <BarChart data={data} layout="vertical" barSize={15}>
        <CartesianGrid vertical={false} horizontal={false} />

        <XAxis hide={true} type="number" />

        <YAxis hide={true} dataKey="name" type="category" />

        <Bar
          dataKey="uv"
          // onClick={showId}
          className={s.bar}
          radius={[0, 10, 10, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DiagramMobile;
