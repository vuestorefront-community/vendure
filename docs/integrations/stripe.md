# Stripe

Integration with payment gateways is much more difficult than with Content Management System because it requires you to integrate it on both frontend and backend of your store. You have to handle payments via form (ideally a drop in component or redirect) and then configure your e-commerce platform to trust external provider that the payment was successful.

## Vue Storefront

As Vue Storefront uses Nuxt.js under the hood and is built using Vue.js, you can use Vue.js plugin or Nuxt.js module to integrate with Stripe:

- <https://vuestripe.com/> especially -> <https://vuestripe.com/nuxt/>
- <https://www.npmjs.com/package/nuxt-stripe-module>

## Vendure

To integrate Vendure with Stripe to accept and handle payments you can use official plugin that is described [here](https://www.vendure.io/docs/typescript-api/payments-plugin/stripe-plugin/)
Once installed, the Vendure Stripe plugin will enable a new mutation exposed on the Vendure shop-api called createStripePaymentIntent.
The high-level workflow is:

    Create a “payment intent” on the server by executing the createStripePaymentIntent mutation.
    Use the returned client secret to instantiate the Stripe Payment Element in VSF.
    Once the form is submitted and Stripe processes the payment, the webhook takes care of updating the order without additional action in VSF.

## Example of an integration using the nuxt-stripe-module <https://www.npmjs.com/package/nuxt-stripe-module>

Before moving forward, be sure that both plugins (Vendure and vue-stripe or nuxt-stripe-module are correctly installed)

### Step I: Extend the VSF API with a 'setStripePayment' method

just call the Vendure's new mutation and you'll get a client secret in return.
code example:

    ```TS
    import { CustomQuery } from '@vue-storefront/core';
    import gql from 'graphql-tag';
    import { Context } from '../../types';
    import { NO_CACHE_FETCH_POLICY } from '../../helpers';

    const setStripePayment = async (context: Context,customQuery?: CustomQuery) => { 
    const request = await context.client.mutate({
        mutation: gql`mutation {createStripePaymentIntent}`,
        fetchPolicy: NO_CACHE_FETCH_POLICY
    });  
    return request.data;  
    };
    export default setStripePayment;
    ```

### Step II: Create the related composable 'useStripe'

The composable calls the new setStripePayment API and returns the secret value needed to process the payment on the payment page.

code example:

    ```TS
    import { computed } from '@vue/composition-api';
    import { sharedRef, useVSFContext,  } from '@vue-storefront/core';

    export const useStripe = () => {  
        const context = useVSFContext();
        const secret= sharedRef({}, 'useStripe'); 
        const set = async () => { 
            secret.value = await context.$vendure.api.setStripePayment(); 
             };

        return {
            set,
            secret:computed(() => secret.value)
            };
    };
    ```

## Step III: Import and call the composable in your payment page (ie:payment.vue) (script part)

For more details and options on how to implement the Stripe elements form, refer to the Stripe documentation available here <https://stripe.com/docs/payments/elements>
The following example uses the nuxt-stripe-plugin <https://www.npmjs.com/package/nuxt-stripe-module> and suppose it's already installed along with the vendure stripe plugin.

    ```JS
    ...
    import { useStripe } from "@vue-storefront/vendure"; // Import your newly created composable
    ...
    setup(props, context) {
        ...
        //stripe initialisation
        const stripeLoading = ref(false);
        const { set: setStripe, secret } = useStripe();
        const stripeInit = () => {
            const paymentElement = elem.value.create("payment");
            paymentElement.mount("#payment-element");
            stripeInterfaceLoaded.value = true;
            };
        
        //this code uses the Stripe elements form, for more info and options refer to:https://stripe.com/docs/payments/elements
        const elem = computed(() => {
        if (secret.value.createStripePaymentIntent) {
            return app.stripe.elements({                
                clientSecret: secret.value.createStripePaymentIntent,
                });
            }
        });

        onMounted(async () => {
            await setStripe();
            stripeInit(); //when using the nuxtjs stripe plugin (nuxt-stripe-plugin)
            });
        
        //

        //Payment validation method example
        const validation = async () => {
            stripeLoading.value = true;
            const { error } = await app.stripe.confirmPayment({
                elements: elem.value,
                confirmParams: {
                    return_url: `your return URL`,
                    },
                });      
            showError(error);
            stripeLoading.value = false;
            };
        
        //Error handling code example
        const errorMessage = ref("");        
        const showError = (error) => {
            if (error.type === "card_error" || error.type === "validation_error") {
                errorMessage.value = error.message;
                } 
            else {
                errorMessage.value = "An unexpected error occured.";
                }

     };
    }

    ```

## Step IV: Finaly, add the stripe payment form in your payment page template part as described in the stripe documentation <https://stripe.com/docs/payments/elements>

Stripe elements is an already designed payment form delivered by Stripe, when using it, you don't need to design your own payment caption interface.
You just need to call the payment_element form in your HTML code as seen in the example bellow.
If payment is valid then the user will be redirected to the url mentioned in the return-url parameter set in the validation method.

code example:

    ```JS
    <h3 v-if="errorMessage" style="color: red">Payment error : {{ errorMessage }}</h3>
            <form id="payment-form" @submit.prevent="validation">

                <div id="payment-element" /> //this instruction call the Stripe from elements. (for more on this, refer to the stripe documentation)

                <SfCheckbox
                    v-e2e="'terms'"
                    v-model="terms"
                    name="terms"
                    class="summary__terms"
                    v-if="stripeInterfaceLoaded"
                >
                    <template #label>
                        <div class="sf-checkbox__label">
                            {{ $t("I agree to") }}
                            <SfLink href="#"> {{ $t("Terms and conditions") }}</SfLink>
                        </div>
                    </template>
                </SfCheckbox>

                <div class="summary__action">
                    <SfButton
                        type="button"
                        class="sf-button color-secondary summary__back-button"
                        @click="$router.push(localePath({ name: 'billing' }))"
                        >
                        {{ $t("Go back") }}
                    </SfButton>
                    <SfButton
                        v-e2e="'make-an-order'"
                        :disabled="!terms || stripeLoading"
                        class="summary__action-button"
                        @click="validation" //this instruction call the validation method previously created.
                        >
                        {{ $t("Make an order") }}
                    </SfButton>
                </div>
            </form>
    ```
