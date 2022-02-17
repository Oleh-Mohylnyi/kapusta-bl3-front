import ReportList from "../ReportList/ReportList";
import type from "../ReportList/income.json";
import s from "../../StatisticDiagram/Diagram.module.scss";

export default function ReportIncome({data}) {
  const typesIncome = type;
    let dataItems = [];

    const setDataForRender = () => {
     data.forEach(el => {
       typesIncome.forEach(dataEl => {
       if (el.name === dataEl.type) {
         el.icon = dataEl.icon;
         el.type = dataEl.type;
         el.sum = el.uv;
       }        
     })
     dataItems.push(el)
       })
    }  

 setDataForRender()
  return <>{data.length>0?<ReportList types={dataItems} />: (<p className={s.notification}>В этом месяце нет прибыли.</p>)} </>;
}
