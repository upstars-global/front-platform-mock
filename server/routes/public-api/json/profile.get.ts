import { defineEventHandler } from 'h3';
import profile from '../../../mockData/profile';

export default defineEventHandler(() => {
  return profile;
});
