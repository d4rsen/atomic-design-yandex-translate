import React, {memo} from 'react';
import './Translator.scss'
import Translations from '../../molecules/Translations/Translations';
import TranslationHeader from '../../molecules/TranslationHeader/TranslationHeader';

const Translator = () => {

    return (
        <div className="homepage">
            <div className="translator">
                <TranslationHeader/>
                <Translations/>
            </div>
        </div>
    );
}

export default memo(Translator);
