import {$api} from './api.service'
import {ApiResponse, langPair} from '../models/api';

export class TranslateService {

    static async translate(word: string, langpair: langPair) {
        const options = {params: {langpair, q: word, mt: '1', onlyprivate: '0'}}
        const response = await $api.request<ApiResponse>(options)
        return response.data.responseData.translatedText
    }
}
