define('Foo', ['Baz'], function(Baz){
	
	Foo = function(message) {
		this.bar = new Baz('GATO: ' + message);
	}
	Foo.prototype.greet = function() {
		this.bar.greet();
	}

	return Foo;

});