<script>
window.dataLayer  = window.dataLayer || [];
window.dataLayer.push({
    'event': 'eec.removeFromCart',  // name of an event. In this case, always stays as eec.removeFromCart
    'ecommerce': {                  // ecommerce object. This is the essential part of tracking. New EE data must always be pushed to this object
        'currencyCode': 'EUR',      // the currency which is currently used by a visitor 
        'remove': {                 // name of an action. In this case, always stays as remove                            
        'products': [{              // list of products removed from a cart. can include multiple products.
            'name': 'Citizen - SUPER TITANIUM. MODEL: AW0060-11P',      // name of a product that was removed from a cart
            'id': 'CIT30283',       // id of a product
            'price': '330.00',      // price of a product
            'brand': 'Citizen',     // brand/vendor of a product
            'category': 'Watches',  // category of a product
            'variant': 'Silver'     // product variant. If there are no variants, exclude this key from the dataLayer.push
        }]
        }
    }
});
</script>
