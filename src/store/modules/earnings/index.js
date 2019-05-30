import { createReducer } from 'redux-starter-kit'
import { createSelector, createStructuredSelector } from 'reselect'

const earnings = createReducer({
  totalIncome: 12890.50,
  totalSpent: 2711.90,
  incomeByService: [
    { label: 'Banho & Tosa', total: 6445.25, color: '#CC2AD7', value: 50 },
    { label: 'Consultas', total: 3867.15, color: '#792AD5', value: 30 },
    { label: 'Medicamentos', total: 2578.10, color: '#3A86FE', value: 20 }
  ]
}, {})

const totalIncomeSelector = state => state.earnings.totalIncome
const totalSpentSelector = state => state.earnings.totalSpent
const incomeByServiceSelector = state => state.earnings.incomeByService

const totalSelector = createSelector(
  totalIncomeSelector,
  totalSpentSelector,
  (income, spent) => income - spent
)

export const mapEarnings = createStructuredSelector({
  totalIncome: totalIncomeSelector,
  totalSpent: totalSpentSelector,
  total: totalSelector,
  incomeByService: incomeByServiceSelector
})

export const reducers = earnings
