import React from "react";
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
  { name: "Фастфуд", uv: 530, id: 4 },
  { name: "Макароны", uv: 500, id: 3 },
  { name: "Кофе", uv: 400, id: 0 },
  { name: "Крупы", uv: 300, id: 2 },
  { name: "Молочка", uv: 150, id: 4 },
  { name: "Хлеб", uv: 50, id: 2 },
];

// получаю sortedData
const DiagramTablet = ({ sortedData }) => {
  return (
    <ResponsiveContainer
      width="100%"
      hight="100%"
      minWidth={630}
      minHeight={380}
    >
      <BarChart data={data} barSize={38}>
        <CartesianGrid vertical={false} />

        <YAxis
          type="number"
          dataKey="uv"
          hide={true}
          axisLine={false}
          tickLine={false}
        />
        <XAxis
          type="category"
          dataKey="name"
          axisLine={false}
          tickLine={false}
        />
        <Bar
          dataKey="uv"
          id="id"
          className={s.bar}
          label={{
            fill: "#52555F",
            position: "top",
          }}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DiagramTablet;
