import { reducer } from '../state-management';
import { useAugmentedThunkReducer } from './thunk-reducer';

export function useFormReducer(args) {
  const { initialState } = args;
  const [state, dispatch] = useAugmentedThunkReducer(reducer, initialState);
  return [state, dispatch];
}
