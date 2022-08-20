/**
 * @param {string}
 * @return {ReducerAction}
 */

import { FORM_CONST } from '../action';

export function reducer(state, action) {
  const { type, payload, newState } = action;
  const { field, data, identifier } = payload;

  switch (type) {
    case FORM_CONST.INCREMENT_VALUE:
      return {
        ...state,
        [payload.field]: state[field] + 1,
      };
    case FORM_CONST.DECREMENT_VALUE:
      return {
        ...state,
        [payload.field]: state[field] - 1,
      };

    default:
      throw new Error();
  }
}
