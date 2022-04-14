<script>
window.dataLayer  = window.dataLayer || [];
window.dataLayer.push({
	'event': 'eec.productImpression',   	// nombre del evento. En este caso SIEMPRE es eec.productImpression
	'ecommerce': {							// objeto ecommerce. Esta es la parte esencial del seguimiento. Los nuevos datos de EE siempre deben enviarse a este objeto
		'currencyCode': 'EUR', 				// la moneda que está configurada actualmente
		'impressions': [					// tipo de una acción de comercio electrónico. En este caso, SIEMPRE es impressions
		 {
			'name': 'Citizen - SUPER TITANIUM. MODEL: AW0060-11P',		// nombre del producto que se muestra. INCLUIRLO SIEMPRE
			'id': 'CIT30283',						// id del producto. INCLUIRLO SIEMPRE
			'price': '330.00',						// precio del producto
			'brand': 'Citizen',						// marca del producto
			'category': 'Watches',						// categoría producto
			'variant': 'Silver',       					// Variación del producto. En caso de no existir variaciones, se puede excluir del dataLayer.pus
			'list': 'main',							// nombre de una lista de productos. Incluir todos los nombres de lista posibles en la especificación
			'position': '1'     						// número de la posición en la que un producto era visible en ese momento
		},			
		 {
			'name': 'Citizen - BUSINESS CLASS. MODEL: BC0099-11Z',		// nombre del producto que se muestra. INCLUIRLO SIEMPRE
			'id': 'CIT30288',						// id del producto. INCLUIRLO SIEMPRE
			'price': '290.00',						// precio del producto
			'brand': 'Citizen',						// marca del producto
			'category': 'Watches',						// categoría producto
			'variant': 'Silver',						// Variación del producto. En caso de no existir variaciones, se puede excluir del dataLayer.pus
			'list': 'main',							// nombre de una lista de productos. Incluir todos los nombres de lista posibles en la especificación
			'position': '2'							// número de la posición en la que un producto era visible en ese momento
		 }]
	}
});
</script>
