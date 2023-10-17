// Modify the getSearchResults method in your existing code
getSearchResults(searchTerm) {
	fetch(`/search/suggest?q=${searchTerm}&section_id=predictive-search`)
	  .then((response) => {
		if (!response.ok) {
		  var error = new Error(response.status);
		  this.close();
		  throw error;
		}
  
		return response.text();
	  })
	  .then((text) => {
		const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-predictive-search');
  
		if (resultsMarkup) {
		  // Check if there are search results
		  const products = resultsMarkup.querySelector('.predictive-search-products');
		  if (products) {
			this.predictiveSearchResults.innerHTML = resultsMarkup.innerHTML;
		  } else {
			this.predictiveSearchResults.innerHTML = 'No match';
		  }
		} else {
		  this.predictiveSearchResults.innerHTML = 'No match';
		}
		this.open();
	  })
	  .catch((error) => {
		this.close();
		throw error;
	  });
  }
  