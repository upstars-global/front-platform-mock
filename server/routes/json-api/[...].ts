import { defineEventHandler, getRequestURL } from "h3"

export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  console.log('JSON API request:', url.href)
  return {
    status: 'ok',
    message: 'Handled by json-api catch-all',
    path: event.path
  }
})
