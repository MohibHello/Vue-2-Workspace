import Vue from 'vue';
import Vuex from 'vuex';

import cryptos from './modules/cryptos';
import portfolio from './modules/portfolio';

import * as actions from './actions';

Vue.use(Vuex);

// vuex store setup here
// if you application have multipke modules 
// add them here
export default new Vuex.Store({
    actions,
    modules: {
        cryptos,
        portfolio
    }
});