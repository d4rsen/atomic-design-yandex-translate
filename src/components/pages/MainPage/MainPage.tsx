import React, {FC, memo} from 'react'
import './MainPage.scss'
import Translator from '../../organisms/Translator/Translator';

const MainPage: FC = () => {

    return (
        <>
            <Translator/>
        </>
    )
}

export default memo(MainPage)

