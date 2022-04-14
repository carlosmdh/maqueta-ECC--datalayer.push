<script>
window.dataLayer  = window.dataLayer || [];
window.dataLayer.push({
    'event': 'eec.productDetail',       // name of an event. In this case, always stays as eec.productDetail
    'ecommerce': {                      // ecommerce object. This is the essential part of tracking. New EE data must always be pushed to this object
        'detail': {                     // name of an action. In this case, always stays as detail
          'actionField': {'list': 'main'},    // optional. if this event happened in a certain list, pass its name with this key
          'products': [{
            'name': 'Citizen - SUPER TITANIUM. MODEL: AW0060-11P',      // name of a product that is currently viewed. Always include it.
            'id': 'CIT30283',           // id of a product. Always include it.
            'price': '330.00',          // price of a product
            'brand': 'Citizen',         // brand/vendor of a product
            'category': 'Watches',      // category of a product
            'variant': 'Silver'         // product variant. If there are no variants, exclude this key from the dataLayer.push
           }]
         }
    }
});
</script>
