import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://dummyjson.com/todos', () => {
    return HttpResponse.json(
      {
        todos: [
          {
            id: 1,
            todo: 'Do something nice for someone you care about',
            completed: false,
            userId: 152,
          },
        ],
      },
      { status: 200 },
    );
  }),
];
