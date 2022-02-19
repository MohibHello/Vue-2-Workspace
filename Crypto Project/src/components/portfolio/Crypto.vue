<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ crypto.name }}
                    <small>(Price: {{ crypto.price }} | Quantity: {{ crypto.quantity }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input
                            type="number"
                            class="form-control"
                            placeholder="Quantity"
                            v-model="quantity"
                            :class="{danger: insufficientQuantity}"
                    >
                </div>
                <div class="pull-right">
                    <button
                            class="btn btn-success"
                            @click="sellCrypto"
                            :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
                    >{{ insufficientQuantity ? 'Not enough' : 'Sell' }}
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
    import {mapActions} from 'vuex';

    export default {
        props: ['crypto'],
        data() {
            return {
                quantity: 100
            }
        },
        computed: {
          insufficientQuantity() {
              return this.quantity > this.crypto.quantity;
          }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellCrypto'
            }),
            sellCrypto() {
                const order = {
                    cryptoId: this.crypto.id,
                    cryptoPrice: this.crypto.price,
                    quantity: this.quantity
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }
    }
</script>