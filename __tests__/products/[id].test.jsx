import { render, screen } from '@testing-library/react';

import Product, { getServerSideProps } from 'pages/products/[id]';
import mockData from 'pages/api/products/[id].mock';

const successStatus = 200;
const failedStatus = 404;
const givenID = 1;
const successResponse = { status: successStatus, data: { ...mockData, id: givenID } };
const failedResponse = { status: failedStatus, data: {} };

function fetchMock({ status, data }) {
  global.fetch = jest.fn(() => Promise.resolve({
    status,
    json: () => Promise.resolve(data),
  }));
}
function successFetchMock() {
  fetchMock(successResponse);
}
function failedFetchMock() {
  fetchMock(failedResponse);
}

describe('Product Page', () => {
  context('when fetch status is 200', () => {
    it('should getServerSideProps returns status and fetched data', async () => {
      successFetchMock();

      const { props: { res } } = await getServerSideProps({ params: { id: givenID } });

      expect(res.status).toBe(successStatus);
      expect(res.data).not.toEqual({});
    });

    it('should page renders product page', () => {
      successFetchMock();

      render(<Product res={successResponse} />);

      const { data } = successResponse;

      expect(screen.getByText(data.name.main)).toBeInTheDocument();
    });
  });

  context('when fetch status isn\'t 200', () => {
    it('should getServerSideProps returns status and empty data', async () => {
      failedFetchMock();

      const { props: { res } } = await getServerSideProps({ params: { id: givenID } });

      expect(res.status).toBe(failedStatus);
      expect(res.data).toEqual({});
    });

    it('should page renders error page', () => {
      failedFetchMock();

      render(<Product res={failedResponse} />);

      expect(screen.getByText(failedStatus.toString())).toBeInTheDocument();
    });
  });
});
