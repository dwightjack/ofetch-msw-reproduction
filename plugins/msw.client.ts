import { setupWorker } from 'msw/browser';
import { handlers } from '../msw/handlers';

export default defineNuxtPlugin({
  name: 'msw:client',
  async setup() {
    await setupWorker(...handlers).start({onUnhandledRequest: 'bypass'});
  },
});
