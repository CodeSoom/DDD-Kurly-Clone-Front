import { render, screen, fireEvent } from '@testing-library/react';

import { useAppSelector, useAppDispatch } from '../../common/hooks';

import OrderPage from './OrderPage';

jest.mock('../../common/hooks');

describe('Order Page', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useAppSelector.mockImplementation((selector) => selector({
      order: {
        error: given.error,
        completion: given.completion,
      },
    }));

    useAppDispatch.mockImplementation(() => dispatch);
  });

  context('with error', () => {
    given('error', () => true);
    given('completion', () => false);

    it('renders error message', () => {
      render(<OrderPage />);

      expect(screen.getByText('주문 과정 중 오류가 발생했습니다.'))
        .toBeInTheDocument();
    });
  });

  context('when ordering products is complete', () => {
    given('error', () => false);
    given('completion', () => true);

    it('renders complete message', () => {
      render(<OrderPage />);

      expect(screen.getByText('주문이 완료되었습니다.'))
        .toBeInTheDocument();
    });
  });

  context('when ordering products is not complete', () => {
    given('error', () => false);
    given('completion', () => false);

    it('renders order title', () => {
      render(<OrderPage />);

      expect(screen.getByText('주문서')).toBeInTheDocument();
    });

    it('listens to handleClick click event to process order transaction', () => {
      render(<OrderPage />);

      fireEvent.click(screen.getByRole('button', {
        name: /주문 하기/,
      }));

      expect(dispatch).toBeCalled();
    });
  });
});
