		console.log(template);
/*
	Foods
	----------------
	id
	name
	price
*/
var foods = new Array();

function insert(name, price) {
	let id = foods.length+1;
	foods.push({
		'id': id,
		'name': name,
		'price': price
	});
}

function update(id, name, price) {
	for(var i in foods) {
		if(foods[i].id == id) {
			foods[i].name = name;
			foods[i].price = price;
			break;
		}
	}
}

function findById(id) {
	var data = {};
	for(var i in foods) {
		if(foods[i].id == id) {
			data = {
				'name': foods[i].name,
				'price': foods[i].price
			}
			break;
		}
	}
	return data;	
}

function showInTable() {
	// SHow Data In Table
}