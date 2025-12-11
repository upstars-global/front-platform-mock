import { defineEventHandler } from 'h3';

// Shared handler for both `anon` and `secured` namespaces
export default defineEventHandler(() => {
  return {
    games: [
      { id: 201, name: 'Game X', phase: 'final' },
      { id: 202, name: 'Game Y', phase: 'qualifier' },
    ],
  };
});
