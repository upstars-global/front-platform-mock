import { defineEventHandler } from 'h3'
import currencyRates from '../../../../../../mockData/currency-rates'

export default defineEventHandler(() => {
  return currencyRates
})
