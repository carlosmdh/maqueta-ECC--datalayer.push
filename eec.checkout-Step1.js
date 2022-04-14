<script>
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': 'eec.checkout',                // nombre del evento. En este caso SIEMPRE es eec.checkout
    'ecommerce': {                          // objeto de comercio electrónico. Esta es la parte esencial del seguimiento. Los nuevos datos de EE siempre deben enviarse a este objeto
        'checkout': {                       // nombre de una acción. En este caso SIEMPRE es checkout
            'actionField': {    
                'step': 1                   // número del paso de pago que un usuario ha ingresado (siempre debe ser 1 en esta situación)
            },
            'products': [{                  // lista de productos que un usuario tenía en el carrito antes de ingresar a la caja. Puede contener varios productos al mismo tiempo.
                'name': 'Citizen - SUPER TITANIUM. MODEL: AW0060-11P',      // nombre de un producto que se agregó a un carrito
                'id': 'CIT30283',           // id del producto
                'price': '330.00',          // precio del producto
                'brand': 'Citizen',         // marca del producto
                'category': 'Watches',      // categoría del producto
                'variant': 'Silver',        // variante de producto Si no hay variantes, excluye esta clave de dataLayer.push
                'quantity': 1               // cantidad del producto agregado al carrito.
            }]
        }
    }
});
</script>
