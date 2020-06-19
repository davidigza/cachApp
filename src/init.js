import { Router } from '@vaadin/router';
import './pages/home-page.js';

const outlet = document.getElementById('outlet');
const router = new Router(outlet);

router.setRoutes([
    { path: '/', component: 'home-page' },

    { path: '(.*)', component: 'home-page' },
]);