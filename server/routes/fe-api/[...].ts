import { defineEventHandler, getRequestURL } from 'h3';

export default defineEventHandler((event) => {
  const url = getRequestURL(event);
  console.log('FE API request:', url.href);
  return {
    status: 'ok',
    message: 'Handled by fe-api catch-all',
    path: event.path,
  };
});
