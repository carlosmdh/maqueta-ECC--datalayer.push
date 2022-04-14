<script>
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'eec.checkoutOption',          // name of an event. In this case, always stays as eec.checkout
  ecommerce: {                          // ecommerce object. This is the essential part of tracking. New EE data must always be pushed to this object
    checkout_option: {                  // name of an action. In this case, always stays as checkout_option
      actionField: {
        step: 1,                        // number of the checkout step in which a user chose the delivery method (must always be 1 in this situation) 
        option: 'Expedited delivery'    // delivery option that a visitor has chosen
      }
    }
  }
});
</script>
