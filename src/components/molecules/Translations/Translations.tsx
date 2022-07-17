import React, {ChangeEvent, FC, memo, useCallback, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import TextArea from '../../atoms/TextArea/TextArea';
import {sagaActionTranslate} from '../../../redux/actions/translateActions';

const Translations: FC = () => {
    const {translatedWord, languages} = useAppSelector(s => s.translator)
    const dispatch = useAppDispatch()
    const [input, setInput] = useState('')

    const inputHandler = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value)
        dispatch(sagaActionTranslate(input, languages))
    }, [dispatch, input, languages])

    return (
        <div className="translator__bottom">
            <TextArea input={input} inputHandler={inputHandler}/>
            <div
                className={
                    `translator__textarea translator__textarea_active ${!translatedWord && 'translator__textarea_hidden'}`
                }
            >
                {translatedWord ? translatedWord : 'Тут будет перевод'}
            </div>
        </div>
    );
};

export default memo(Translations);
