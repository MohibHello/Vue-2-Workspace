import Vue from 'vue';
import Vuex from 'vuex';

import todos from "./modules/todos";

Vue.use(Vuex);

// vuex store setup here
// if you application have multipke modules 
// add them here
export default new Vuex.Store({
    modules: {
        todos
    }
});