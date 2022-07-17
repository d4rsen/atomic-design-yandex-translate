import {delay, put, takeLatest} from 'redux-saga/effects'
import {SAGA_TRANSLATE} from '../types/translator';
import {TranslateService} from '../../services/translate.service';
import {AnyAction} from 'redux';
import {actionTranslate} from '../actions/translateActions';

export function* translateWorker(action: AnyAction) {
    yield delay(500)
    // @ts-ignore
    const translated = yield TranslateService.translate(action.payload.word, action.payload.langPair)
    yield put(actionTranslate(action.payload.word, translated))
}

export function* translateWatcher() {
    yield takeLatest(SAGA_TRANSLATE, translateWorker)
}
