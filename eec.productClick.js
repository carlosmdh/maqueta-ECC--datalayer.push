window.dataLayer  = window.dataLayer || [];
window.dataLayer.push({
    'event': 'eec.productClick',    // nombre del evento. En este aso SUEMPRE es eec.productClick
    'ecommerce': {                  // objeto ecommerce. Esta es la parte esencial del seguimiento. Los nuevos datos de EE siempre deben enviarse a este objeto
      'click': {                    // nombre de la acción. En este caso, SIEMPRE es click
        'actionField': {
            'list': 'main'          // nombre de la lista de productos en la que el usuario ha hecho click  
        },  
        'products': [{
            'name': 'Citizen - SUPER TITANIUM. MODEL: AW0060-11P',      // nombre del producto que ha comprado el usuario ha hecho click. INCLUIRLO SIEMPRE
            'id': 'CIT30283',       // id del producto. INCLUIRLO SIEMPRE
            'price': '330.00',      // precio productO
            'brand': 'Citizen',     // marca del producto
            'category': 'Watches',  // categoría deñ producto
            'variant': 'Silver',    // Variación del producto. En caso de no existir variaciones, se puede excluir
            'position': '1'         // número de la posición (en la que un producto era visible en ese momento)
       }]
     }
  }
});
