define('Bar', ['Foo'], function(Foo) {

	var Bar = function(message) {
		this.message = message
	}
	Bar.prototype.greet = function() {
		alert(this.message);
	}
	(new Foo('CIrCULAR')).greet();

	return Bar;

});