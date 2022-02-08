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

const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
  return (
    <text
      x={x / 2 + width}
      y={y}
      fill="#52555f"
      fontSize={10}
      textAnchor="start"
      dy={-4}
    >{`${value}грн`}</text>
  );
};

const renderCustomAxisTick = ({ x, y, payload }) => {
  return (
    <text
      x={x}
      y={y}
      fill="#52555f"
      fontSize={10}
      textAnchor="start"
      dy={+20}
      dx={+8}
    >{`${payload.value}`}</text>
  );
};
const DiagramMobile = ({ sortedData }) => {
  return (
    <ResponsiveContainer
      width="100%"
      hight="100%"
      minWidth={282}
      minHeight={480}
    >
      <BarChart
        width={282}
        hide={480}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        data={data}
        layout="vertical"
        barSize={15}
      >
        <CartesianGrid vertical={false} horizontal={false} />

        <XAxis hide={true} type="number" dataKey="uv" axisLine={false} />

        <YAxis
          // hide={true}
          type="category"
          dataKey="name"
          axisLine={false}
          tickLine={false}
          orientation="left"
          tick={renderCustomAxisTick}
        />
        <Bar
          label={renderCustomBarLabel}
          dataKey="uv"
          radius={[0, 10, 10, 0]}
          minPointSize={50}
          maxBarSize="100%"
        >
          {data.map((el) => {
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
