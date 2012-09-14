define('Baz', ['Bar'], function(Bar){
	
	Baz = function(message) {
		this.bar = new Bar('Logged: ' + message);
	}
	Baz.prototype.greet = function() {
		this.bar.greet();
	}

	return Baz;

});