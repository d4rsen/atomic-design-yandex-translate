import {AnyAction} from 'redux';
import {initialState} from '../init/initialState';
import {CHANGE_LANGUAGES, TRANSLATE} from '../types/translator';

export const translatorReducer = (state = initialState.translator, action: AnyAction) => {
    switch (action.type) {
        case TRANSLATE:
            return {...state, word: action.payload.word, translatedWord: action.payload.translatedWord}

        case CHANGE_LANGUAGES:
            return {...state, languages: action.payload}

        default:
            return state
    }
}
