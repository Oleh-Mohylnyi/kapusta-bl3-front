import ReportList from "../ReportList/ReportList";
import type from "../ReportList/expenses.json";

export default function ReportExpenses({data}) {
  const typesExpenses = type;

  
  let dataItems = [];

  const setDataForRender = () => {
     typesExpenses.forEach(el => {
       data.forEach(dataEl => {
        
         if (el.type.toUpperCase() === dataEl.name.toUpperCase()) {

         el.sum = dataEl.uv
        
         }
        //      
     })
     dataItems.push(el)
       })
    }   

 setDataForRender()
console.log(dataItems);
  return (
    <>{typesExpenses.length > 0 && <ReportList types={typesExpenses} />}</>
  );
}
