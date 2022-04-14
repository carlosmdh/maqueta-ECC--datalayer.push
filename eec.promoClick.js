<script>
window.dataLayer  = window.dataLayer || [];
window.dataLayer.push({
    'event': 'eec.promoClick',                  // name of an event. In this case, always stays as eec.promoClick
    'ecommerce': {                              // ecommerce object. This is the essential part of tracking. New data must always be pushed to this object
        'promoClick': {                         // name of an action. In this case, always stays as promoClick
          'promotions': [                       // list of banners that a user has clicked. usually it contains only one promotion
           {
             'id': 'summer_sale2019_1',         // id of a banner         
             'name': 'Summer sale 2019_1',      // name of a banner
             'creative': 'Home Page Carousel',  // type of a banner 
             'position': 'Slide 1'              // position of a banner
            }]
        }
  }
});
</script>
