document.querySelector('.decimal').addEventListener('input', function() {
	this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
});
