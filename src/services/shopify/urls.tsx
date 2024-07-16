
export const Endpoints = {
    "allProducts": `${process.env.SHOPIFY_HOST_NAME}/admin/api/2023-10/products.json`,
    "singleProduct": (productID: string ) => `${process.env.SHOPIFY_HOST_NAME}/admin/api/2023-10/products.json?ids=${productID}`,
    //"singleProduct": (productID: string ) => `${process.env.SHOPIFY_HOST_NAME}/admin/api/2023-10/products/${productID}.json`,
    "allCollections": `${process.env.SHOPIFY_HOST_NAME}/admin/api/2023-10/smart_collections.json`,
    "ProductsFromCollection": (CollectionID: string ) => `${process.env.SHOPIFY_HOST_NAME}/admin/api/2023-10/collections/${CollectionID}/products.json`,
}