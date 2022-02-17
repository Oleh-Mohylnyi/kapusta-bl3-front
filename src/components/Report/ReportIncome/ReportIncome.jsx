import ReportList from "../ReportList/ReportList";
import type from "../ReportList/income.json";

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
  return <> <ReportList types={data.length>0&&dataItems} /></>;
}
