
//initial state of portfolio
const state = {
    funds: 10000,
    cryptos: []
};

// mutations for state change
const mutations = {
    'BUY_CRYPTO'(state, {cryptoId, quantity, cryptoPrice}) {
        const record = state.cryptos.find(element => element.id == cryptoId);
        if (record) {
            record.quantity += quantity;
        } else {
            state.cryptos.push({
                id: cryptoId,
                quantity: quantity
            });
        }
        state.funds -= cryptoPrice * quantity;
    },
    'SELL_CRYPTO' (state, {cryptoId, quantity, cryptoPrice}) {
        const record = state.cryptos.find(element => element.id == cryptoId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.cryptos.splice(state.cryptos.indexOf(record), 1);
        }
        state.funds += cryptoPrice * quantity;
    },
    'SET_PORTFOLIO' (state, portfolio) {
        state.funds = portfolio.funds;
        state.cryptos = portfolio.cryptoPortfolio ? portfolio.cryptoPortfolio : [];
    }
};

//actions to run asynchronous task and commit to mutations
const actions = {
    sellCrypto({commit}, order) {
        commit('SELL_CRYPTO', order);
    }
};

//getters for portfolio
const getters = {
    cryptoPortfolio (state, getters) {
        return state.cryptos.map(crypto => {
            const record = getters.cryptos.find(element => element.id == crypto.id);
            return {
                id: crypto.id,
                quantity: crypto.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds (state) {
      return state.funds;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}