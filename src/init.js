import { Router } from '@vaadin/router';
import './pages/home-page.js';
import './pages/dashboard-page.js';
import './pages/test-page.js';


const outlet = document.getElementById('outlet');
const router = new Router(outlet);

router.setRoutes(
    [{
        path: '/',
        animate: true,
        children: [
            { path: '', component: 'home-page' },
            { path: '/dashboard', component: 'dashboard-page' },
            { path: '/test', component: 'test-page' },
        ]
    }]
);

outlet.addEventListener('navigation-to', ({ detail }) => {
    Router.go(`/${detail}`)
});