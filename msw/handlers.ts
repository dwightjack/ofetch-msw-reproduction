import { HttpResponse, http } from 'msw'
export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/posts', () => {
    return HttpResponse.json([
      { data: "This is a mock from MSW"}
    ])
  }),
];
