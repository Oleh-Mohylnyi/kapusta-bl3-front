import ReportList from "../ReportList/ReportList";
import type from "../ReportList/income.json";

export default function ReportIncome({data}) {
  const typesIncome = type;
    let dataItems = [];

  const setDataForRender = () => {
     typesIncome.forEach(el => {
       data.forEach(dataEl => {
       if (el.type.toUpperCase() === dataEl.name.toUpperCase()) {
         el.sum = dataEl.uv
        
       } else if (el.type.toUpperCase() !== dataEl.name.toUpperCase())
         el.sum = 0;       
     })
     dataItems.push(el)
       })
    }   

 setDataForRender()
  return <>{typesIncome.length > 0 && <ReportList types={dataItems} />}</>;
}
