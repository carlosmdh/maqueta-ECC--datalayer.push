<script>
window.dataLayer  = window.dataLayer || [];
window.dataLayer.push({
	'event': 'eec.promoView',					// name of an event. In this case, always stays as eec.promoView
	'ecommerce': {								// ecommerce object. This is the essential part of tracking. New data must always be pushed to this object
		'promoView': {							// name of an action. In this case, always stays as promoView
		  'promotions': [                     	// list of promotions or banners displayed to a user
		   {
			 'id': 'summer_sale2019_1',       	// id of a banner         
			 'name': 'Summer sale 2019_1',     	// name of a banner
			 'creative': 'Home Page Carousel',	// type of a banner	
			 'position': 'Slide 1'       		// position of a banner
			},				
		   {
			 'id': 'summer_sale2019_2',           
			 'name': 'Summer sale 2019_2',
			 'creative': 'Sidebar',
			 'position': 'slot 1'       
			}]
		}
  }
});
</script>
