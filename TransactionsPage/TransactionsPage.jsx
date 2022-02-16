import React from 'react';
import TransactionsNav from '../src/components/SectionTransactions/TransactionsNav';
import TransactionForm from '../src/components/TransactionForm';


function TransactionsPage(props) {
  return (
    <div>
      <TransactionsNav />
      <div>
        <TransactionForm/>
      </div>
    </div>
  );
}

export default TransactionsPage;