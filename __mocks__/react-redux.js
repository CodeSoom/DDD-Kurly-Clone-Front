import { Children } from 'react';

export const Provider = jest.fn(({ children }) => Children.only(children));

export const useDispatch = jest.fn(() => () => {});

export const useSelector = jest.fn((selector) => selector({}));
