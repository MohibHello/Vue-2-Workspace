<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ crypto.name }}
                    <small>(Price: {{ crypto.price }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input
                            type="number"
                            class="form-control"
                            placeholder="Quantity"
                            v-model="quantity"
                            :class="{danger: insufficientFunds}"
                    >
                </div>
                <div class="pull-right">
                    <button
                            class="btn btn-success"
                            @click="buyCrypto"
                            :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
                    >{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>

<script>
    export default {
        props: ['crypto'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            insufficientFunds() {
                return this.quantity * this.crypto.price > this.funds;
            }
        },
        methods: {
            buyCrypto() {
                const order = {
                    cryptoId: this.crypto.id,
                    cryptoPrice: this.crypto.price,
                    quantity: this.quantity
                };
                this.$store.dispatch('buyCrypto', order);
                this.quantity = 0;
            }
        }
    }
</script>