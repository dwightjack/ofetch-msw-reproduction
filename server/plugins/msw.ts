import { setupServer } from 'msw/node';
import { handlers } from '../../msw/handlers';

export default defineNitroPlugin((nitroApp) => {
  setupServer(...handlers).listen({ onUnhandledRequest: 'bypass'})
  console.log('MSW nitro plugin started...')
})