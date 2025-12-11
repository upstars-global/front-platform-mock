import { defineEventHandler } from 'h3';
import banners from '../../../../../../mockData/banners';

export default defineEventHandler(() => {
  return banners;
});
