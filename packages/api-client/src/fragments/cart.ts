export const AssetFragment = `
    fragment Asset on Asset {
        id
        width
        height
        name
        preview
        focalPoint {
            x
            y
        }
    }
`;

export const OrderAddressFragment = `
    fragment OrderAddress on OrderAddress {
        fullName
        company
        streetLine1
        streetLine2
        city
        province
        postalCode
        country
        phoneNumber
    }
`;

export const CartFragment = `
    ${AssetFragment}
    ${OrderAddressFragment}

    fragment Cart on Order {
        id
        code
        state
        active
        customer {
            firstName
            lastName
            emailAddress
        }
        lines {
            id
            featuredAsset {
                ...Asset
            }
            unitPrice
            unitPriceWithTax
            quantity
            linePriceWithTax
            discountedLinePriceWithTax
            productVariant {
                sku
                id
                name
                options {
                    id
                    code
                    name
                    group {
                        name
                    } 
                }
            }
            discounts {
                amount
                amountWithTax
                description
                adjustmentSource
                type
            }
        }
        totalQuantity
        subTotal
        subTotalWithTax
        total
        totalWithTax
        shipping
        shippingAddress {
            ...OrderAddress
        }
        billingAddress {
            ...OrderAddress
        }
        shippingWithTax
        shippingLines {
            priceWithTax
            shippingMethod {
                id
                code
                name
                description
            }
        }
        discounts {
            amount
            amountWithTax
            description
            adjustmentSource
            type
        }
    }
`;

export const ErrorResultFragment = `
    fragment ErrorResult on ErrorResult {
        errorCode
        message
    }
`;
