import { defineEventHandler } from "h3"

// routes/users.get.ts
export default defineEventHandler((event) => {
  return [
    { id: 1, name: "Олександр", role: "admin" },
    { id: 2, name: "Марія", role: "user" },
    { id: 3, name: "Іван", role: "guest" },
  ]
})
