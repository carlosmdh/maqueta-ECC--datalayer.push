<script>
window.dataLayer  = window.dataLayer || [];
window.dataLayer.push({
	'event': 'eec.productImpression',   	// name of an event. In this case, always stays as eec.productImpression
	'ecommerce': {							// ecommerce object. This is the essential part of tracking. New EE data must always be pushed to this object
		'currencyCode': 'EUR', 				// the currency which is currently set by a visitor                      
		'impressions': [					// type of an ecommerce action. In this case, always stays as impressions
		 {
			'name': 'Citizen - SUPER TITANIUM. MODEL: AW0060-11P',      // name of a product that is displayed. Always include it.
			'id': 'CIT30283',     			// id of a product. Always include it.
			'price': '330.00',				// price of a product
			'brand': 'Citizen',				// brand/vendor of a product
			'category': 'Watches',			// category of a product
			'variant': 'Silver',       		// product variant. If there are no variants, exclude this key from the dataLayer.push
			'list': 'main',					// name of a product list. See all the possible list names in the specification
			'position': '1'     			// number of a position (in which a product was visible at that time)
		},			
		 {
			'name': 'Citizen - BUSINESS CLASS. MODEL: BC0099-11Z',      
			'id': 'CIT30288',    
			'price': '290.00',
			'brand': 'Citizen',
			'category': 'Watches',
			'variant': 'Silver',       
			'list': 'main',
			'position': '2'     }]
	}
});
</script>
