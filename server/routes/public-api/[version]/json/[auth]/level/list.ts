import { defineEventHandler } from "h3"

// Shared handler for both `anon` and `secured` namespaces
export default defineEventHandler((event) => {
  return {
    levels: [
      { id: 1, name: "Level 1" },
      { id: 2, name: "Level 2" }
    ]
  }
})
