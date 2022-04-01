<template>
<!-- TODO: create logic with isActive prop for BottomNavigationItems -->
  <SfBottomNavigation class="navigation-bottom smartphone-only">
      <SfBottomNavigationItem
        :class="$route.path == '/' ? 'sf-bottom-navigation__item--active' : ''"
        :isActive="itemActive === 'home'"
        icon="home"
        size="20px"
        label="Home"
        @click="handleClick('home')"
      />
    <SfBottomNavigationItem icon="menu" size="20px" :label="$t('Menu')" @click="toggleMobileMenu"/>
    <SfBottomNavigationItem icon="heart" size="20px" :label="$t('Wishlist')" @click="toggleWishlistSidebar"/>
    <SfBottomNavigationItem icon="profile" size="20px" :label="$t('Account')" :isActive="itemActive === 'account'" @click="handleClick('account')"/>
    <!-- TODO: add logic for label - if on Home then Basket, if on PDC then AddToCart etc. -->
    <SfBottomNavigationItem
      :label="$t('Basket')"
      icon="add_to_cart"
      @click="toggleCartSidebar"
    >
      <template #icon>
        <SfCircleIcon aria-label="Add to cart">
          <SfIcon
            icon="add_to_cart"
            color="white"
            size="25px"
            :style="{margin: '0 0 0 -2px'}"
          />
        </SfCircleIcon>
      </template>
    </SfBottomNavigationItem>
  </SfBottomNavigation>
</template>

<script>
import { SfBottomNavigation, SfIcon, SfCircleIcon } from '@storefront-ui/vue';
import { useUiState } from '~/composables';
import { useUser } from '@vue-storefront/vendure';
import { ref, computed } from '@vue/composition-api';

export default {
  components: {
    SfBottomNavigation,
    SfIcon,
    SfCircleIcon
  },
  setup(props, { root }) {
    const { toggleCartSidebar, toggleWishlistSidebar, toggleLoginModal, toggleMobileMenu, isMobileMenuOpen } = useUiState();
    const { isAuthenticated } = useUser();

    const handleClick = (item) => {  
      const itemActive = computed(() => item);
      console.log(itemActive)
      if (item === 'account') {        
        async () => {
          if (isAuthenticated.value) {
            return root.$router.push('/my-account');
          }
          toggleLoginModal();
        };
      } else if (item === 'home') { 
          () => {          
          isMobileMenuOpen.value ? toggleMobileMenu() : false;
          root.$router.push('/');
        };
      }
    }
    return {
      isMobileMenuOpen,
      toggleWishlistSidebar,
      toggleCartSidebar,
      toggleMobileMenu,
      handleClick
    };
  }
};
</script>
<style lang="scss" scoped>
.navigation-bottom {
  --bottom-navigation-z-index: 3;
}
</style>
