const getBalance = state => state.reports.balance;
const getTotalIncomes =  state => state.reports.totalIncomes;
const getTotalExpenses = state => state.reports.totalExpenses;
const getMonthlyIncomes = state => state.reports.monthlyIncome;
const getMonthlyExpenses = state => state.reports.monthlyExpenses;
const getDetails =  state => state.reports.details;

export {
  getBalance,
  getTotalIncomes,
  getTotalExpenses,
  getMonthlyIncomes,
  getMonthlyExpenses,
  getDetails,
};

