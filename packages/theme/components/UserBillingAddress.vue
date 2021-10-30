<template>
  <div>
    <p>{{ address.firstName }} {{ address.lastName }}</p>
    <p>{{ street }}</p>

    <p>
      {{ address.city }}
      {{ address.state }}
      {{ address.postalCode }}
    </p>

    <p>{{ country }}</p>
    <p v-if="address.phone" class="phone">{{ address.phone }}</p>
  </div>
</template>

<script>
import { toRef, computed } from '@vue/composition-api';
import { COUNTRIES } from '~/helpers'

export default {
  props: {
    address: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const address = toRef(props, 'address');

    const street = computed(() => {
      const { streetName, streetNumber, apartment } = address.value;
      const parts = [
        streetName,
        streetNumber && ` ${ streetNumber }`,
        apartment && `, Apartment ${ apartment }`
      ];

      return parts.filter(Boolean).join('');
    });

    const country = computed(() => {
      const { country } = address.value;
      return COUNTRIES.find(c => c.label === country)?.label || country;
    });

    return {
      street,
      country
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
