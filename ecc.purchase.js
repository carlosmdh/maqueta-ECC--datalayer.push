<script>
window.dataLayer  = window.dataLayer || [];
window.dataLayer.push({
    'event': 'eec.purchase',                // nombre del evento. En este aso SUEMPRE es eec.purchase
    'ecommerce': {                          // objeto de comercio electrónico. Esta es la parte esencial del seguimiento. Los nuevos datos de EE siempre deben enviarse a este objeto
        'purchase': {                       // nombre de una acción. En este caso, SIEMPRE es compra.
            'actionField': {
                'id': '155',                // order id. ESTE CAMPOR ES OBLIGATORIO
                'affiliation': 'affiliate', // nombre o id del afilaido of the affiliate. or affiliate id
                'revenue': '50.00',         // ingresos excluyendo los impuestos
                'tax':'12.00',              // impuestos (excluyendo el transporte)
                'shipping': '12.00',        // coste del transporte 
                'coupon': 'SUMMER20'        // código de cupón utilizado en esta transacción
            }, 
            'products': [{                  // lista de productos que el usuario ha comprado
                'name': 'Citizen - SUPER TITANIUM. MODEL: AW0060-11P',      // nombre del producto que ha comprado el usuario
                'id': 'CIT30283',           // id del producto
                'price': '330.00',          // precio del producto
                'brand': 'Citizen',         // marca del producto
                'category': 'Watches',      // categoría del producto
                'variant': 'Silver',        // Variación del producto variant. En caso de no existir variaciones, se puede excluir
                'quantity' : 1              // cantidad del producto
             }]
        }   
  }
});
</script>
