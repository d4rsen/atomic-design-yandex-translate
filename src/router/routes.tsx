import MainPage from '../components/pages/MainPage/MainPage'
import {Navigate} from 'react-router-dom';

interface Route {
    path: string
    element: JSX.Element
}

export const publicRoutes: Route[] = [
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '*',
        element: <Navigate to="/"/>
    },
]
