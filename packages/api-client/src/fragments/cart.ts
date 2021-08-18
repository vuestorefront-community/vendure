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

export const CartFragment = `
    ${AssetFragment}

    fragment Cart on Order {
        id
        code
        state
        active
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
