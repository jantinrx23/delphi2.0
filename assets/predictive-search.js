// Add this code below your existing code

class PredictiveSearch extends HTMLElement {
	constructor() {
	  super();
  
	  this.input = this.querySelector('input[type="search"]');
	  this.predictiveSearchResults = this.querySelector('#predictive-search-results');
  
	  this.input.addEventListener('input', this.debounce((event) => {
		this.onChange(event);
	  }, 300).bind(this));
  
	  // Add focus and blur event listeners to the input
	  this.input.addEventListener('focus', () => {
		this.open();
	  });
  
	  this.input.addEventListener('blur', () => {
		this.close();
	  });
	}
  
	// ... rest of your code
  
	// Keep the rest of your code as it is
  
	// Add your custom functions and event listeners as described above
  }
  
  customElements.define('predictive-search', PredictiveSearch);
  