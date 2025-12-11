import { defineEventHandler } from 'h3'
import appGlobalConfig from '../../mockData/appGlobalConfig'

export default defineEventHandler(() => {
  return appGlobalConfig
})
