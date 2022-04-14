<script>
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'eec.checkoutOption',          // nombre del evento. En este caso SIEMPRE es eec.checkout
  ecommerce: {                          // objeto ecommerce. Esta es la parte esencial del seguimiento. Los nuevos datos de EE siempre deben enviarse a este objeto
    checkout_option: {                  // nombre de una acción. En este caso, SIEMPRE es checkout_option
      actionField: {
        step: 1,                        // número del paso de pago en el que un usuario eligió el método de entrega (siempre debe ser 1 en esta situación)
        option: 'Expedited delivery'    // opción de entrega que un visitante ha elegido
      }
    }
  }
});
</script>
