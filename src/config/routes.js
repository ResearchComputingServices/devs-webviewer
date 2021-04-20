import NotFound from '../components/NotFound';
import Diagram from '../components/Diagram';

export default [
    {
        path: '/',
        component: Diagram,
    },
    {
        path: '*',
        component: NotFound,
    },
];
