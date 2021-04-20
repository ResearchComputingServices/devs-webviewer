import NotFound from '../components/NotFound';
import Diagram from '../components/Diagram';
//import Viewer from '../components/Viewer';

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
