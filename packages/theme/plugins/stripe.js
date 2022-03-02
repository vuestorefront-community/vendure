import Vue from 'vue';
import {
  StripeCheckout,
  StripeElementCard
} from '@vue-stripe/vue-stripe';

export default () => {
  Vue.component('StripeCheckout', StripeCheckout);
  Vue.component('StripeElementCard', StripeElementCard);
};
