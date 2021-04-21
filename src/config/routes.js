import NotFound from '../components/NotFound';
import Viewer from '../components/Viewer';

export default [

    {
        path: '/',
        component: Viewer,
    },
    {
        path: '*',
        component: NotFound,
    },
];
