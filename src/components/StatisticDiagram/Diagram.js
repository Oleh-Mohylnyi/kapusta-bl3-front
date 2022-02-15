import React, {  useEffect, useState } from "react";
import s from "./Diagram.module.scss";
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
import {
  customLabelListName,
  customBarLabelPrice,
  customLabelListNameMobile,
  customBarLabelPriceMobile
} from "./repository";



const Diagram = ({ mobile, dataArr }) => {
//Пока что дефолтное значение data, когда значение dataArr не равно undefined
  // значение data перезаписывается useEffect-ом
  const [data, setData]= useState([
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
  ])
  useEffect(() => {
    if (dataArr !== void 0) {
    setData(dataArr)
  }
},[dataArr])

  return (  
   <>
    <ResponsiveContainer
      width="100%"
      hight="100%"
      minWidth={mobile ? 282 : 605}
      minHeight={mobile ? 480 : 380}
    >
      <BarChart
        width={mobile ? 282 : 605}
        hide={mobile ? 480 : 380}
        margin={{ top: 0, right: 0, bottom: 30, left: 0 }}
        data={data}
        layout={mobile ? "vertical" : "horizontal"}
        barSize={mobile ? 15 : 38}
      >
        <CartesianGrid vertical={false} horizontal={mobile ? false : true} />
        <YAxis
          hide={true}
          type={mobile ? "category" : "number"}
          dataKey={mobile ? "name" : "uv"}
          axisLine={false}
          tickLine={false}
          tickCount={9}
          orientation={"left"}
        />

        <XAxis
          hide={true}
          type={mobile ? "number" : "category"}
          dataKey={mobile ? "uv" : "name"}
          axisLine={false}
          tickLine={false}
          minTickGap={0}
          padding={{ top: 20, bottom: 20 }}
        />
        <Bar
          label={mobile ? customBarLabelPriceMobile : customBarLabelPrice}
          dataKey="uv"
          radius={mobile ? [0, 10, 10, 0] : [10, 10, 0, 0]}
          minPointSize={mobile ? 50 : 20}
          maxBarSize="100%"
        >
          <LabelList
            dataKey="name"
            content={mobile ? customLabelListNameMobile : customLabelListName}
          />
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
      </>)
};

export default Diagram;
