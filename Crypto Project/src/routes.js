import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Cryptos from './components/cryptos/Cryptos.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/cryptos', component: Cryptos }
];