<script>
window.dataLayer  = window.dataLayer || [];
window.dataLayer.push({
    'event': 'eec.purchase',                // name of an event. In this case, always stays as eec.purchase
    'ecommerce': {                          // ecommerce object. This is the essential part of tracking. New EE data must always be pushed to this object
        'purchase': {                       // name of an action. In this case, always stays as purchase
            'actionField': {
                'id': '155',                // order id. required 
                'affiliation': 'affiliate', // name of the affiliate. or affiliate id
                'revenue': '50.00',         // order revenue without taxes
                'tax':'12.00',              // taxes (excluding shipping)
                'shipping': '12.00',        // shipping cost 
                'coupon': 'SUMMER20'        // coupon code used in this transaction
            }, 
            'products': [{                  // list of products a user has purchased 
                'name': 'Citizen - SUPER TITANIUM. MODEL: AW0060-11P',      // name of a product that is currently viewed
                'id': 'CIT30283',           // id of a product
                'price': '330.00',          // price of a product
                'brand': 'Citizen',         // brand/vendor of a product
                'category': 'Watches',      // category of a product
                'variant': 'Silver',        // product variant. If there are no variants, exclude this key from the dataLayer.push
                'quantity' : 1              // product quantity
             }]
        }   
  }
});
</script>
