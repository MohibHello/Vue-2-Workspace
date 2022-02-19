<template>
    <div>
        <app-crypto v-for="crypto in cryptos" :crypto="crypto" :key="crypto.id"></app-crypto>
    </div>
</template>

<script>
    import Crypto from "./Crypto.vue";

    export default {
        components: {
            appCrypto: Crypto
        },
        computed: {
            cryptos() {
                return this.$store.getters.cryptos;
            }
        }
    }
</script>