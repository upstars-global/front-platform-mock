import { defineEventHandler } from 'h3';
import payload from '../../../mockData/payout-gift-count';

export default defineEventHandler(() => {
  return payload;
});
