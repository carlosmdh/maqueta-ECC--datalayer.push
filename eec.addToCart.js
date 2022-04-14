<script>
window.dataLayer  = window.dataLayer || [];
window.dataLayer.push({
    'event': 'eec.addToCart',       // name of an event. In this case, always stays as eec.addToCart
    'ecommerce': {                  // ecommerce object. This is the essential part of tracking. New EE data must always be pushed to this object
        'currencyCode': 'EUR',          // the currency which is currently used by a visitor 
        'add': {                        // name of an action. In this case, always stays as add
            'actionField': {            
                'list': 'main'          // optional. name of a list from which the product was added to a cart  
              },        
            'products': [{              // list of products added to a cart. Can contain multiple products at the same time
                'name': 'Citizen - SUPER TITANIUM. MODEL: AW0060-11P',      // name of a product that was added to a cart
                'id': 'CIT30283',       // id of a product
                'price': '330.00',      // price of a product
                'brand': 'Citizen',     // brand/vendor of a product
                'category': 'Watches',  // category of a product
                'variant': 'Silver',     // product variant. If there are no variants, exclude this key from the dataLayer.push
                'quantity': 1
            }]
        }
    }
});
</script>
