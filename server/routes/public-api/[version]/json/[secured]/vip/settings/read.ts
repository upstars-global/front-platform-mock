import { defineEventHandler } from 'h3';
import userStatus from '../../../../../../../mockData/user-status';

export default defineEventHandler(() => {
  return userStatus;
});
