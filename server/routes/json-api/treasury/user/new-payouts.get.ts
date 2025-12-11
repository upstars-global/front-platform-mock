import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  return {
    payouts: [
      { id: 1, amount: 100, status: 'pending' },
      { id: 2, amount: 250, status: 'processed' },
    ],
  };
});
