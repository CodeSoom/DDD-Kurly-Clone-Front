import request from 'supertest';
import http from 'http';

import handler from 'pages/api/products/[id]';
import requestListener from '__tests__/api/utils';

describe('products api', () => {
  describe('[GET] /products/1', () => {
    const givenID = 1;
    const givenPath = `/api/products/${givenID}`;

    it('responds with json', async () => {
      const server = http.createServer(requestListener({
        query: {
          id: givenID,
        },
        handler,
      }));
      const agent = await request.agent(server).get(givenPath);

      expect(agent.body).toHaveProperty('id', givenID);
      expect(agent.body).toHaveProperty('name');
    });
  });
});
