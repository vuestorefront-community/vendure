<template>
  <div>
    <p>{{ userShippingGetters.getFirstName(address) }} {{ userShippingGetters.getLastName(address) }}</p>
    <p>{{ userShippingGetters.getStreetName(address) }} {{ userShippingGetters.getStreetNumber(address) }}</p>

    <p>
      {{ userShippingGetters.getCity(address) }}
      {{ userShippingGetters.getProvince(address) }}
      {{ userShippingGetters.getPostCode(address) }}
    </p>

    <p>{{ userShippingGetters.getCountry(address) }}</p>
    <p class="phone"> {{ userShippingGetters.getPhone(address) }}</p>
  </div>
</template>

<script>
import { userShippingGetters } from '@vue-storefront/vendure';

export default {
  props: {
    address: {
      type: Object,
      required: true
    }
  },

  setup() {
    return {
      userShippingGetters
    };
  }
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
.phone {
  margin-top: var(--spacer-base);
}
</style>
