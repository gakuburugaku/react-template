import {combineReducers} from 'redux';
import home from '~/src/redux/modules/home';
import UI from '~/src/redux/modules/UI';

const reducer = combineReducers({
  home,
  UI
});

export default reducer;
