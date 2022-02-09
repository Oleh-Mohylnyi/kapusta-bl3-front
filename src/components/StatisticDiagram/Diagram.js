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


const customBarLabelPrice = ({ payload, x, y, width, height, value }) => {  
 
  return <text x={x} y={y} fill="#52555f" fontSize={12} textAnchor="top" dy={-10}>{`${value} грн`}</text>;
};

const customLabelListName = ({ payload, x, y, width, height, value }) => {
  return (
    <text
      x={x}
      y={y}
      fill="#52555f"
      fontSize={12}
      textAnchor="middle"
      dx={+width/2}
      dy={height+20}
    >{`${value}`}</text>
  );
};
const Diagram = ({ mobile, sortedData }) => {
  return (
    <ResponsiveContainer
      width="100%"
      hight="100%"
      minWidth={mobile?282:605}
      minHeight={mobile?480:380}
    >
      <BarChart
        width={mobile?282:605}
        hide={mobile?480:380}
        margin={{ top: 0, right: 0, bottom: 30, left: 0 }}
        data={data}
        layout={mobile?"vertical":"horizontal"}
        barSize={mobile?15:38}
      >
        <CartesianGrid
          vertical={false}
          horizontal={mobile ? false : true} />
        <YAxis
          hide={true}
          type={mobile?"category":"number"}
          dataKey={mobile?"name":"uv"}
          axisLine={false}
          tickLine={false}
          tickCount={9}
          orientation={"left"}
        />

        <XAxis
          hide={true}
          type={mobile?"number":"category"}
          dataKey={mobile?"uv":"name"}
          axisLine={false}
          tickLine={false}
          minTickGap={0}
          padding={{ top: 20, bottom: 20 }}
        />
        <Bar
          label={mobile?customBarLabelPriceMobile:customBarLabelPrice}
          dataKey="uv"
          radius={mobile?[0, 10, 10, 0]:[10, 10, 0, 0]}
          minPointSize={mobile?50:20}
          maxBarSize="100%"
        >
          <LabelList
            dataKey="name"
            content={mobile?customLabelListNameMobile:customLabelListName} />          
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

export default Diagram;
