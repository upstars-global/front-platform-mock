import { defineEventHandler } from 'h3';
import topLeaders from '../../mockData/topLeaders';

export default defineEventHandler(() => {
  return topLeaders;
});
