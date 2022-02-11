const getBalance = (state) => state.reports.balance;
const getTotalIncomes = () => (state) => state.reports.totalIncomes;
const getTotalExpenses = () => (state) => state.reports.totalExpenses;

export { getBalance, getTotalIncomes, getTotalExpenses };
