

import SectionTransactions from '../../SectionTransactions/SectionTransactions';
import Summary from '../../Summary/Summary';
import TableData from '../../SectionTransactions/TableData/TableData';

import s from './ComposeSection.module.scss';

const ExpensePage = () => {
  

  

  return (
    <div>
      <SectionTransactions>
         {/* <AddDataForm /> */}
        <div className={s.wrapperTables}>
          <TableData
            isExpense={true}
            
          />
          <Summary  />
        </div>
      </SectionTransactions>
    </div>
  );
};

export default ExpensePage;