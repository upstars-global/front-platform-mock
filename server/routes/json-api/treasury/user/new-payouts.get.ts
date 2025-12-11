import { defineEventHandler } from "h3"
import { useRuntimeConfig } from "#imports"

export default defineEventHandler((event) => {
  const temp = useRuntimeConfig().apiToken
  return {
    payouts: [
      { id: 1, amount: 100, status: "pending", temp },
      { id: 2, amount: 250, status: "processed" },
    ],
  }
})
