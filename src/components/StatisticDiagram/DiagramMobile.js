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
  LabelList,
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

const customBarLabelPriceMobile = ({ payload, x, y, width, height, value }) => {
  return (
    <text
      x={width - 30}
      y={y}
      fill="#52555f"
      fontSize={10}
      textAnchor="start"
      dy={-5}
    >{`${value}грн`}</text>
  );
};

const customLabelListNameMobile = ({ payload, x, y, width, height, value }) => {
  return (
    <text
      x={x}
      y={y}
      fill="#52555f"
      fontSize={10}
      textAnchor="bottom"
      dy={+26}
    >{`${value}`}</text>
  );
};

const DiagramMobile = ({ isMobile, sortedData }) => {
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
        margin={{ top: 0, right: 0, bottom: 30, left: 0 }}
        data={data}
        layout="vertical"
        barSize={15}
      >
        <CartesianGrid vertical={false} horizontal={false} />

        <XAxis hide={true} type="number" dataKey="uv" axisLine={false} />

        <YAxis
          hide={true}
          type="category"
          dataKey="name"
          axisLine={false}
          tickLine={false}
           orientation="left"
        />
        <Bar
          label={customBarLabelPriceMobile}
          dataKey="uv"
          radius={[0, 10, 10, 0]}
          minPointSize={50}
          maxBarSize="100%"
        >
          <LabelList dataKey="name" content={customLabelListNameMobile} />          
          {data.map((el, index) => {
            return (
              <Cell
                key={index}
                className={
                  index === 0 || index === 3 || index === 6 || index === 9
                    ? s.bar__accent
                    : s.bar
                }
              />
            );
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DiagramMobile;
