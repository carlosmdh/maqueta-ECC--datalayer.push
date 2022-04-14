<script>
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'eec.checkoutOption',          // nombre del evento. En este caso SIEMPRE es eec.checkout
  ecommerce: {                          // objeto ecommerce. Esta es la parte esencial del seguimiento. Los nuevos datos de EE siempre deben enviarse a este objeto
    checkout_option: {                  // nombre de una acción. En este caso, SIEMPRE es checkout_option
      actionField: {
        step: 2,                        // número del paso de pago en el que un usuario eligió el método de pago (siempre debe ser 2 en esta situación)
        option: 'tarjeta de crédito'                // método de pago que el usuario ha elegido
      }
    }
  }
});
</script>
