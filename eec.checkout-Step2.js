<script>
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': 'eec.checkout',                // nombre del evento. En este caso SIEMPRE es eec.checkout
    'ecommerce': {                          // objeto de comercio electrónico. Esta es la parte esencial del seguimiento. Los nuevos datos de EE siempre deben enviarse a este objeto
        'checkout': {                       /// nombre de una acción. En este caso SIEMPRE es checkout
            'actionField': {    
                'step': 2                   // número del paso de pago actual (siempre debe ser 2 en esta situación)
            }
    }
  }
});
</script>
