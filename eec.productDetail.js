<script>
window.dataLayer  = window.dataLayer || [];
window.dataLayer.push({
    'event': 'eec.productDetail',       // nombre del evento. En este caso SIEMPRE es eec.productDetail
    'ecommerce': {                      // objeto ecommerce. Esta es la parte esencial del seguimiento. Los nuevos datos de EE siempre deben enviarse a este objeto
        'detail': {                     // nombre d ela acción. En este caso SIEMPRE es detail
          'actionField': {'list': 'main'},    // si este evento sucedió en una lista determinada, pase su nombre con esta clave. OPCIONAL
          'products': [{
            'name': 'Citizen - SUPER TITANIUM. MODEL: AW0060-11P',      // nombre del producto que se está viendo actualmente. INCLUIRLO SIEMPRE
            'id': 'CIT30283',           // id del producto. INCLUIRLO SIEMPRE
            'price': '330.00',          // precio del producto
            'brand': 'Citizen',         // marca del producto
            'category': 'Watches',      // categoría del producto
            'variant': 'Silver'         // Variación del producto. En caso de no existir variaciones, se puede excluir
           }]
         }
    }
});
</script>
