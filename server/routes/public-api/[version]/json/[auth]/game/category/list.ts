import categories from '../../../../../../../mockData/categories';
import { defineEventHandler } from "h3"

export default defineEventHandler(() => {
  return categories;
});
