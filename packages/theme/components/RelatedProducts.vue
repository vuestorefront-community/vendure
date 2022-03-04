<template>
  <SfSection :title-heading="title" class="section">
    <SfLoader :class="{ loading }" :loading="loading">
      <SfCarousel
        :settings="{ peek: 16, breakpoints: { 1023: { peek: 0, perView: 2 } } }"
        class="carousel"
      >
        <SfCarouselItem class="carousel__item" v-for="(product, i) in products" :key="i">
          <SfProductCard
            :title="product.productName"
            :image="product.productAsset.preview"
            :regular-price="$n(getCalculatedPrice(product.price.max), 'currency')"
            :link="localePath(`/p/${product.productId}/${product.slug}`)"
            class="carousel__item-image"
          />
        </SfCarouselItem>
      </SfCarousel>
    </SfLoader>
  </SfSection>
</template>

<script lang="ts">

import {
  SfCarousel,
  SfProductCard,
  SfSection,
  SfLoader
} from '@storefront-ui/vue';

import { getCalculatedPrice } from '~/helpers';

export default {
  name: 'RelatedProducts',
  setup() {
    return { getCalculatedPrice };
  },
  components: {
    SfCarousel,
    SfProductCard,
    SfSection,
    SfLoader
  },
  props: {
    title: String,
    products: Array,
    loading: Boolean
  }
};
</script>

<style lang="scss" scoped>
.section {
  margin-top: var(--spacer-base);
}

.carousel {
    margin: 0 calc(-1 * var(--spacer-sm)) 0 0;
  @include for-desktop {
    margin: 0;
  }
  &__item {
    margin: 1.9375rem 0 2.4375rem 0;
  }
  ::v-deep .sf-product-card__image .sf-image {
    --image-height: 230px;
    --image-width: 150px;
    object-fit: cover;
    @include for-desktop {
      --image-width: 210px;
      --image-height: 340px;
    }
  }
}

</style>
