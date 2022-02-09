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
  LabelList
} from "recharts";

// // данные для отрисовки
const data = [
  { name: "Мясо", uv: 1500, id: 0 },
  { name: "Сладости", uv: 1050, id: 1 },
  { name: "Чай", uv: 660, id: 2 },
  { name: "Овощи", uv: 600, id: 3 },
  { name: "Фастфуд", uv: 530, id: 4 },
  { name: "Макароны", uv: 500, id: 5 },
  { name: "Кофе", uv: 400, id: 6 },
  { name: "Крупы", uv: 300, id: 7 },
  { name: "Молочка", uv: 150, id: 8 },
  { name: "Хлеб", uv: 50, id: 9 },
];
//label
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
const DiagramTablet = ({ sortedData }) => {
  return (
    <ResponsiveContainer
      width="100%"
      hight="100%"
      minWidth={605}
      minHeight={380}     
    >
      <BarChart data={data} barSize={38}  margin={{ top: 0, right: 0, bottom: 30, left: 0 }}>
        <CartesianGrid vertical={false} />
        <YAxis
          type="number"
          dataKey="uv"
          hide={true}
          axisLine={false}
          tickLine={false}
          tickCount={9}          
        />

        <XAxis
          type="category"
          dataKey="name"
          axisLine={false}
          tickLine={false}
          hide={true}
          minTickGap={0}
          padding={{ top: 20, bottom: 20 }}
        />
        <Bar
          
          dataKey="uv"
          id="id"
          label={customBarLabelPrice}
          radius={[10, 10, 0, 0]}
        >
           <LabelList dataKey="name" content={customLabelListName} /> 
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
            }           
          )}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DiagramTablet;
