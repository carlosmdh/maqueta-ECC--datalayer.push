<script>
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': 'eec.checkout',                // name of an event. In this case, always stays as eec.checkout
    'ecommerce': {                          // ecommerce object. This is the essential part of tracking. New EE data must always be pushed to this object
        'checkout': {                       // name of an action. In this case, always stays as checkout
            'actionField': {    
                'step': 1                   // number of the checkout step that a user has entered (must always be 1 in this situation) 
            },
            'products': [{                  // list of products a user had in a cart before entering the checkout 
                'name': 'Citizen - SUPER TITANIUM. MODEL: AW0060-11P',      // name of a product that is currently viewed
                'id': 'CIT30283',           // id of a product
                'price': '330.00',          // price of a product
                'brand': 'Citizen',         // brand/vendor of a product
                'category': 'Watches',      // category of a product
                'variant': 'Silver',        // product variant. If there are no variants, exclude this key from the dataLayer.push
                'quantity': 1
            }]
        }
    }
});
</script>
