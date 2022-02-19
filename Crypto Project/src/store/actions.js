import Vue from 'vue';
import data from "../data/crypto";

export const loadData = ({commit}) => {
    // Vue.http.get('data.json')
    //     .then(response => response.json())
    //     .then(data => {
    //         if (data) {
    //             const cryptos = data.cryptos;
    //             const funds = data.funds;
    //             const cryptoPortfolio = data.cryptoPortfolio;

    //             const portfolio = {
    //                 cryptoPortfolio,
    //                 funds
    //             };

    //             commit('SET_CRYPTOS', cryptos);
    //             commit('SET_PORTFOLIO', portfolio);
    //         }
    //     });
    commit('SET_CRYPTOS', data);
    commit('SET_PORTFOLIO', {cryptoPortfolio:data,funds:'10000'});
};