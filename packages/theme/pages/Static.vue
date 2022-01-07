<template>
  <div id="static">
    <SfBreadcrumbs
      class="breadcrumbs desktop-only"
      :breadcrumbs="breadcrumbs"
    />
    <SfContentPages
      :active="$t(activePage)"
      :title="$t(activePage)"
      @click:change="changeActivePage"
    >
      <SfContentPage
        v-for="(page, key) in pages"
        :key="key"
        :title="$t(page.title)"
      >
        <template v-if="page.content[0] && typeof page.content[0] === 'string'">
          <SfHeading
          :title="$t(page.subtitle)"
          :level="3"/>
          <p
            v-for="(paragraph, index) in page.content"
            :key="index"
            class="paragraph paragraph--without-tab"
          >
            {{ paragraph }}
          </p>
        </template>
        <template v-else>
          <SfTabs :open-tab="1">
            <SfTab
              v-for="(tab, index) in page.content"
              :key="index"
              :title="tab.tabName"
            >
              <p
                v-for="(paragraph, i) in tab.tabContent"
                :key="i"
                class="paragraph"
              >
                {{ paragraph }}
              </p>
            </SfTab>
          </SfTabs>
        </template>
      </SfContentPage>
    </SfContentPages>
  </div>
</template>
<script>
import { SfContentPages, SfTabs, SfBreadcrumbs, SfHeading } from '@storefront-ui/vue';
import { computed } from '@vue/composition-api';

export default {
  name: 'Static',
  components: {
    SfContentPages,
    SfTabs,
    SfBreadcrumbs,
    SfHeading
  },

  head () {
    return {
      title: this.activePage,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page description'
        }
      ]
    };
  },

  setup(props, context) {
    const { $router, $route } = context.root;
    const activePage = computed(() => {
      const { pageName } = $route.params;

      if (pageName) {
        return (pageName.charAt(0).toUpperCase() + pageName.slice(1)).replaceAll('-', ' ');
      }

      return 'About';
    });

    const changeActivePage = async (title) => {
      $router.push(`/page/${(title || '').toLowerCase().replaceAll(' ', '-')}`);
    };

    return { changeActivePage, activePage };
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Home', route: { link: '#' } },
        { text: this.activePage, route: { link: '#' } }
      ],
      pages: [
        {
          title: 'About',
          subtitle: 'Who we are',
          content: [
            'With more than 230 stores spanning 43 states and growing, Luma is a nationally recognized active wear manufacturer and retailer. We’re passionate about active lifestyles – and it goes way beyond apparel.',
            'At Luma, wellness is a way of life. We don’t believe age, gender or past actions define you, only your ambition and desire for wholeness... today.',
            'We differentiate ourselves through a combination of unique designs and styles merged with unequaled standards of quality and authenticity. Our founders have deep roots in yoga and health communities and our selections serve amateur practitioners and professional athletes alike.'
          ]
        },
        {
          title: 'Quality',
          content: [
            {
              tabName: 'Size guide',
              tabContent: [
                'Size guide / Personal information provided on the website and online credit card transactions are transmitted through a secure server. We are committed to handling your personal information with high standards of information security. We take appropriate physical, electronic, and administrative steps to maintain the security and accuracy of personally identifiable information we collect, including limiting the number of people who have physical access to our database servers, as well as employing electronic security systems and password protections that guard against unauthorized access.'
              ]
            },
            {
              tabName: 'Where\'s my order?',
              tabContent: [
                'Where\'s my order? / This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.'
              ]
            }
          ]
        },
        {
          title: 'Reviews',
          subtitle: 'Customer reviews',
          content: [
            'Store locator / This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.',
            'We take appropriate physical, electronic, and administrative steps to maintain the security and accuracy of personally identifiable information we collect, including limiting the number of people who have physical access to our database servers, as well as employing electronic security systems and password protections that guard against unauthorized access.'
          ]
        },
        {
          title: 'Customer',
          subtitle: 'Customer services',
          content: [
            'Delivery / This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.'
          ]
        },
        {
          title: 'Size',
          subtitle: 'Termos de serviço',
          content: [
            {
              tabName: 'Size guide',
              tabContent: [
                'Size guide / Personal information provided on the website and online credit card transactions are transmitted through a secure server. We are committed to handling your personal information with high standards of information security. We take appropriate physical, electronic, and administrative steps to maintain the security and accuracy of personally identifiable information we collect, including limiting the number of people who have physical access to our database servers, as well as employing electronic security systems and password protections that guard against unauthorized access.'
              ]
            },
            {
              tabName: 'Where\'s my order?',
              tabContent: [
                'Where\'s my order? / This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.'
              ]
            }
          ]
        },
        {
          title: 'Contact',
          subtitle: 'Contact us',
          content: [
            'Contact us / This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.'
          ]
        },
        {
          title: 'Terms',
          subtitle: 'Purchase terms',
          content: [
            'Store locator / This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.',
            'We take appropriate physical, electronic, and administrative steps to maintain the security and accuracy of personally identifiable information we collect, including limiting the number of people who have physical access to our database servers, as well as employing electronic security systems and password protections that guard against unauthorized access.'
          ]
        },
        {
          title: 'Guarantee',
          subtitle: 'Guarantee',
          content: [
            'Contact us / This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.'
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
#static {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1272px;
    padding: 0 var(--spacer-sm);
    margin: 0 auto;
  }
}
.breadcrumbs {
  margin: var(--spacer-base) auto var(--spacer-lg);
}
.paragraph {
  margin: var(--spacer-sm) 0;
  &:first-child {
    margin: 0 0 var(--spacer-sm) 0;
  }
  &--without-tab {
    @include for-mobile {
      padding: 0 var(--spacer-sm);
    }
  }
}
</style>
