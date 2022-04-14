window.dataLayer  = window.dataLayer || [];
window.dataLayer.push({
    'event': 'eec.productClick',    // name of an event. In this case, always stays as eec.productClick
    'ecommerce': {                  // ecommerce object. This is the essential part of tracking. New EE data must always be pushed to this object
      'click': {                    // name of an action. In this case, always stays as click
        'actionField': {
            'list': 'main'          //name of a list in which the product was clicked  
        },  
        'products': [{
            'name': 'Citizen - SUPER TITANIUM. MODEL: AW0060-11P',      // name of a product that was clicked. Always include it.
            'id': 'CIT30283',       // id of a product. Always include it.
            'price': '330.00',      // price of a product
            'brand': 'Citizen',     // brand/vendor of a product
            'category': 'Watches',  // category of a product
            'variant': 'Silver',    // product variant. If there are no variants, exclude this key from the dataLayer.push
            'position': '1'         // number of a position (in which a product was visible at that time)
       }]
     }
  }
});
