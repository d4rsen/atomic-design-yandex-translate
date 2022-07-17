import {langPair} from '../../models/api';

export const initialState = {
    translator: {
        word: '',
        translatedWord: '',
        languages: langPair.EN_RUS
    }
}

