<script>
window.dataLayer  = window.dataLayer || [];
window.dataLayer.push({
	'event': 'eec.promoView',				// nombre del evento. En este caso SIEMPRE es eec.promoView
	'ecommerce': {						// objeto ecommerce. Esta es la parte esencial del seguimiento. Los nuevos datos de EE siempre deben enviarse a este objeto
		'promoView': {					// nombre de la acción. En este caso, SIEMPRE promoView
		  'promotions': [                     		// lista de las promociones o banners mostrados
		   {
			 'id': 'summer_sale2019_1',       	// id del banner 1
			 'name': 'Summer sale 2019_1',     	// nombre del banner 1
			 'creative': 'Home Page Carousel',	// tipo de banner 1
			 'position': 'Slide 1'       		// posición delbanner 1
			},				
		   {
			 'id': 'summer_sale2019_2',		// id del banner 2
			 'name': 'Summer sale 2019_2',		// nombre del banner 2
			 'creative': 'Sidebar',			// tipo de banner 2
			 'position': 'slot 1'       		// posición delbanner 2
			}]
		}
  }
});
</script>
