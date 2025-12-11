import { defineEventHandler } from "h3"

// Shared handler for both `anon` and `secured` namespaces
export default defineEventHandler((event) => {
  return {
    producers: [
      { id: 101, name: "Producer A" },
      { id: 102, name: "Producer B" },
    ],
  }
})
