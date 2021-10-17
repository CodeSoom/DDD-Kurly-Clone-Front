import mockData from 'pages/api/products/[id].mock';
import { getProductDetail } from '../api';

const okStatus = 200;
const notFoundStatus = 404;

function fetchMock({ status, data }) {
  global.fetch = jest.fn(() => Promise.resolve({
    status,
    json: () => Promise.resolve(data),
  }));
}
function successFetchMock() {
  fetchMock({ status: okStatus, data: mockData });
}
function failedFetchMock() {
  fetchMock({ status: notFoundStatus, data: {} });
}

describe('products API', () => {
  context('when fetch status is 200', () => {
    it('should getProductDetail returns filled data', async () => {
      successFetchMock();

      const { data } = await getProductDetail();

      expect(data).not.toEqual({});
    });
  });

  context('when fetch status isn\'t 200', () => {
    it('should getProductDetail returns empty data', async () => {
      failedFetchMock();

      const { data } = await getProductDetail();

      expect(data).toEqual({});
    });
  });
});
