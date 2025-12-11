import { defineEventHandler } from 'h3';
import levels from '../../../../../../mockData/levels';

export default defineEventHandler(() => {
  return levels;
});
