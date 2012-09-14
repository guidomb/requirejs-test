define('Baz', ['Bar'], function(Bar){
	
	Foo = function(message) {
		this.bar = new Bar('GATO: ' + message);
	}
	Foo.prototype.greet = function() {
		this.bar.greet();
	}

	return Foo;

});