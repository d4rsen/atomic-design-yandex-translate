import Header from '../components/organisms/Header/Header'
import Router from '../router/Router'
import './App.scss'
import {FC, memo} from 'react';

const App: FC = () => {

    return (
        <>
            <Header/>
            <div className="wrapper">
                <Router/>
            </div>
        </>
    )
}

export default memo(App)
