import { counterReducer, counterInitialState } from './counter.reducer';

describe('Counter Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = counterReducer(counterInitialState, action);

      expect(result).toBe(counterInitialState);
    });
  });
});
