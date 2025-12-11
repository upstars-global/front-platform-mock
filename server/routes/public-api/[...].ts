import { defineEventHandler, getRequestURL } from "h3"

export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  console.log("Public API request:", url.href)
  return {
    status: "ok",
    message: "Handled by public-api catch-all",
    path: event.path,
  }
})
