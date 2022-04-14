<script>
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': 'eec.checkout',                // name of an event. In this case, always stays as eec.checkout
    'ecommerce': {                          // ecommerce object. This is the essential part of tracking. New EE data must always be pushed to this object
        'checkout': {                       // name of an action. In this case, always stays as checkout
            'actionField': {    
                'step': 3                   // number of the current checkout step that a user has entered (must always be 3 in this situation) 
            }
    }
  }
});
</script>
