export interface ResponseData {
    translatedText: string;
    match: number;
}

export interface Match {
    id: string;
    segment: string;
    translation: string;
    source: string;
    target: string;
    quality: string;
    reference?: any;
    'usage-count': number;
    subject: string;
    'created-by': string;
    'last-updated-by': string;
    'create-date': string;
    'last-update-date': string;
    match: number;
}

export interface ApiResponse {
    responseData: ResponseData;
    quotaFinished: boolean;
    mtLangSupported?: any;
    responseDetails: string;
    responseStatus: number;
    responderId: string;
    exception_code?: any;
    matches: Match[];
}

export enum langPair {
    EN_RUS = 'en|rus',
    RUS_EN = 'rus|en'
}
