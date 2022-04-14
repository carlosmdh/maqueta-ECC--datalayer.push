<script>
window.dataLayer  = window.dataLayer || [];
window.dataLayer.push({
    'event': 'eec.promoClick',                  // nombre del evento. En este caso SIEMPRE es eec.promoClick
    'ecommerce': {                              // objeto ecommerce. Esta es la parte esencial del seguimiento. Los nuevos datos de EE siempre deben enviarse a este objeto
        'promoClick': {                         // nombre de la acción. En este caso, SIEMPRE es promoClick
          'promotions': [                       // lista de banners en los que un usuario ha hecho clic. por lo general contiene una sola promoción
           {
             'id': 'summer_sale2019_1',         // id del banner         
             'name': 'Summer sale 2019_1',      // nombre del banner
             'creative': 'Home Page Carousel',  // tipo de banner 
             'position': 'Slide 1'              // posición del banner
            }]
        }
  }
});
</script>
