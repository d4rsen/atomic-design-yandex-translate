import {CHANGE_LANGUAGES, SAGA_TRANSLATE, TRANSLATE} from '../types/translator';
import {langPair} from '../../models/api';

export const actionTranslate = (word: string, translatedWord: string) => ({
    type: TRANSLATE,
    payload: {word, translatedWord}
})

export const sagaActionTranslate = (word: string, langPair: langPair) => ({
    type: SAGA_TRANSLATE,
    payload: {word, langPair}
})

export const actionChangeLanguages = (languages: langPair) => ({
    type: CHANGE_LANGUAGES,
    payload: languages
})
