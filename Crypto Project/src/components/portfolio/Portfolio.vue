<template>
    <div>
        <app-crypto v-for="crypto in cryptos" :crypto="crypto" :key="crypto.id"></app-crypto>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Crypto from './Crypto.vue';

    export default {
        computed: {
            ...mapGetters({
                cryptos: 'cryptoPortfolio'
            })
        },
        components: {
            appCrypto: Crypto
        }
    }
</script>