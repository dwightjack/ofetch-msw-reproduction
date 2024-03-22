import { setupServer } from 'msw/node';
import { handlers } from '../msw/handlers';

export default defineNuxtPlugin({
  name: 'msw:server',
  hooks: {
    "app:created": () => {
      setupServer(...handlers).listen({onUnhandledRequest: 'bypass'});
      console.log('MSW started')
    }
  },
});
