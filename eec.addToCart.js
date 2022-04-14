<script>
window.dataLayer  = window.dataLayer || [];
window.dataLayer.push({
    'event': 'eec.addToCart',               // nombre del evento. En este caso SIEMPRE es eec.addToCart
    'ecommerce': {                          // objeto ecommerce. Esta es la parte esencial del seguimiento. Los nuevos datos de EE siempre deben enviarse a este objeto
        'currencyCode': 'EUR',              // la moneda que utiliza actualmente un visitante
        'add': {                            // nombre de una acción. En este caso SIEMPRE es add
            'actionField': {            
                'list': 'main'              // nombre de una lista desde la cual se agregó el producto a un carrito. OPCIONAL.
              },        
            'products': [{                  // lista de productos añadidos a un carrito. Puede contener varios productos al mismo tiempo.
                'name': 'Citizen - SUPER TITANIUM. MODEL: AW0060-11P',      // nombre del producto que se agregó al carrito
                'id': 'CIT30283',           // id del producto
                'price': '330.00',          // Precio del producto
                'brand': 'Citizen',         // marca del producto
                'category': 'Watches',      // categoría del producto
                'variant': 'Silver',        // variante de producto Si no hay variantes, excluye esta clave de dataLayer.push
                'quantity': 1               // cantidad del producto agregado al carrito.
            }]
        }
    }
});
</script>
