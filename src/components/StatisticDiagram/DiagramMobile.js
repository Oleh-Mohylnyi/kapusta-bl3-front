import React from "react";
import s from "./Diagram.module.css";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  ResponsiveContainer,
  Cell,
} from "recharts";

// // данные для отрисовки
const data = [
  { name: "Мясо", uv: 1500, id: 0 },
  { name: "Сладости", uv: 1050, id: 1 },
  { name: "Чай", uv: 660, id: 2 },
  { name: "Овощи", uv: 600, id: 3 },
  { name: "Сухофрукты", uv: 530, id: 4 },
  { name: "Макароны", uv: 500, id: 5 },
  { name: "Кофе", uv: 400, id: 6 },
  { name: "Крупы", uv: 300, id: 7 },
  { name: "Молочка", uv: 150, id: 8 },
  { name: "Хлеб", uv: 50, id: 9 },
];

// // const showId = (e) => {
// //   console.log(e);
// //   console.log(e.uv);
// // };

// //получаю sortedData
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

        <XAxis hide={true} type="number" dataKey="uv" />

        <YAxis
          type="category"
          dataKey="name"
          axisLine={false}
          tickLine={false}
          orientation="left"
        />

        <Bar
            label={{
            position: "top",
          }}
          dataKey="uv"
          radius={[0, 10, 10, 0]}
        >
          {data.map((el) => {
            console.log(el.name);
            if (el.id === 0 || el.id === 3 || el.id === 6 || el.id === 9) {
              return <Cell key="id" className={s.bar__accent} />;
            }
            return <Cell key="id" className={s.bar} />;
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DiagramMobile;
