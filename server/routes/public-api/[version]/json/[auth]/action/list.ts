import { defineEventHandler } from 'h3'
import actions from '../../../../../../mockData/actions'

export default defineEventHandler(() => {
  return actions
})
