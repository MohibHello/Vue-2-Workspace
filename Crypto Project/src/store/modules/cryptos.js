import cryptos from '../../data/crypto';

// initial state of crypto module
const state = {
    cryptos: []
};

// Repsonsible for state change similar to reducer in redux
const mutations = {
    'SET_CRYPTOS' (state, cryptos) {
        state.cryptos = cryptos;
    },
    'RND_CRYPTOS' (state) {
        state.cryptos.forEach(crypto => {
            crypto.price = Math.round(crypto.price * (1 + Math.random() - 0.5));
        });
    }
};

// Actions Will call Mutations (Asynchronous code goes here since Mutation should run sunchronously)
//  once Actions are Dispatched we can use commit method to call Mutations
const actions = {
    buyCrypto: ({commit}, order) => {
        commit('BUY_CRYPTO', order);
    },
    initCryptos: ({commit}) => {
        debugger
        commit('SET_CRYPTOS', cryptos);
    },
    randomizeCryptos: ({commit}) => {
        commit('RND_CRYPTOS');
    }
};

// getters of state 
const getters = {
    cryptos: state => {
        return state.cryptos;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};