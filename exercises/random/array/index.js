let animals = [
				{'name':'stripes', 'type':'tiger'},
  			  	{'name':'cheeto', 'type':'cat'}
  			  ];

let foo = [];

for (let key in animals) {
		
	foo.push(animals[key].name);

	console.log('foo',foo);
}