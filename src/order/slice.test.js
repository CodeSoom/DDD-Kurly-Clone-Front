import reducer, {
  complete,
} from './slice';

describe('complete', () => {
  it('sets completion is true', () => {
    const state = reducer({
      completion: false,
    }, complete());

    expect(state.completion).toBeTruthy();
  });
});
