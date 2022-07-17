import {combineReducers} from 'redux';
import {translatorReducer} from './translatorReducer';

export const rootReducer = combineReducers({
    translator: translatorReducer
})
