<script>
window.dataLayer  = window.dataLayer || [];
window.dataLayer.push({
    'event': 'eec.removeFromCart',  // nombre del evento. En este caso SIEMPRE es eec.removeFromCart
    'ecommerce': {                  // objeto ecommerce. Esta es la parte esencial del seguimiento. Los nuevos datos de EE siempre deben enviarse a este objeto
        'currencyCode': 'EUR',      // la moneda que utiliza actualmente un visitante
        'remove': {                 // nombre de una acción. En este caso SIEMPRE es remove
        'products': [{              // lista de productos eliminados a un carrito. Puede contener varios productos al mismo tiempo.
            'name': 'Citizen - SUPER TITANIUM. MODEL: AW0060-11P',      // nombre del productos que se eliminó del carrito
            'id': 'CIT30283',       // id del producto
            'price': '330.00',      // precio del producto
            'brand': 'Citizen',     // marca del producto
            'category': 'Watches',  // categoría del producto
            'variant': 'Silver'     // variante de producto Si no hay variantes, excluye esta clave de dataLayer.push
        }]
        }
    }
});
</script>
