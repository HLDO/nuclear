import { store, getOption, setOption } from '../persistence/store';

export const READ_SETTINGS = 'READ_SETTINGS';
export const SET_BOOLEAN_OPTION = 'SET_BOOLEAN_OPTION';

export function readSettings() {
  let settings = store.get('settings');
  return {
    type: READ_SETTINGS,
    payload: settings
  };
}

export function setBooleanOption(option, state) {
  setOption(option, state);

  return {
    type: SET_BOOLEAN_OPTION,
    payload: {option, state}
  };
}

export function toggleOption(option, state) {
  let optionState = state[option.name];
  return optionState !==undefined
  ? setBooleanOption(option.name, !optionState)
  : setBooleanOption(option.name, !option.default);
}
