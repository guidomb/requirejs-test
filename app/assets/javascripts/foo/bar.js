define('Bar', function() {

	var Bar = function(message) {
		this.message = message
	}
	Bar.prototype.greet = function() {
		alert(this.message);
	}

	return Bar;

});