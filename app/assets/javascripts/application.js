require(['Baz', 'Foo'], function(Baz, Foo){

	var hello = new Baz('Guido');
	var gato = new Foo('Tyny gay')
	hello.greet();
	gato.greet();

});
