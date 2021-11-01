<template>
  <div>
    <p>{{ userBillingGetters.getFirstName(address) }} {{ userBillingGetters.getLastName(address) }}</p>
    <p>{{ userBillingGetters.getStreetName(address) }} {{ userBillingGetters.getStreetNumber(address) }}</p>

    <p>
      {{ userBillingGetters.getCity(address) }}
      {{ userBillingGetters.getProvince(address) }}
      {{ userBillingGetters.getPostCode(address) }}
    </p>

    <p>{{ userBillingGetters.getCountry(address) }}</p>
    <p class="phone"> {{ userBillingGetters.getPhone(address) }}</p>
  </div>
</template>

<script>
import { userBillingGetters } from '@vue-storefront/vendure';

export default {
  props: {
    address: {
      type: Object,
      required: true
    }
  },

  setup() {
    return {
      userBillingGetters
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
