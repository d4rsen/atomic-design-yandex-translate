import React, {memo, useCallback} from 'react';
import {langPair} from '../../../models/api';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {actionChangeLanguages} from '../../../redux/actions/translateActions';

const TranslationHeader = () => {
    const dispatch = useAppDispatch()
    const {languages} = useAppSelector(s => s.translator)

    const switchHandler = useCallback(() => {
        if (languages === langPair.RUS_EN) {
            dispatch(actionChangeLanguages(langPair.EN_RUS))
        } else {
            dispatch(actionChangeLanguages(langPair.RUS_EN))
        }
    }, [dispatch, languages])

    return (
        <div className="translator__top">
            <span className="translator__lang translator__lang_left">
                {languages === langPair.EN_RUS ? 'АНГЛИЙСКИЙ' : 'РУССКИЙ'}
            </span>
            <div className="translator__img">
                <img onClick={switchHandler} src="assets/svg/swap.svg" alt="swap"/>
            </div>
            <span className="translator__lang translator__lang_right">
                {languages === langPair.RUS_EN ? 'АНГЛИЙСКИЙ' : 'РУССКИЙ'}
            </span>
        </div>
    );
};

export default memo(TranslationHeader);
