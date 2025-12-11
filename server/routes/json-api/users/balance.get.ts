import { defineEventHandler, getCookie } from "h3"
import { defaultUser, vipUser } from "./_data"

export default defineEventHandler((event) => {
  const token = getCookie(event, "default_token")

  if (token === "testpass@bbq.agency") {
    return vipUser
  }

  return defaultUser
})
