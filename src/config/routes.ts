import IRoute from "../interfaces/IRoute";


import Home from '../pages/Home';
import Article from "../pages/Article";

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Cerca parola',
        component: Home,
        exact: true
    },
    {
        path: '/article/:term',
        name: 'Articolo',
        component: Article,
        exact: true
    }
]

export default routes;