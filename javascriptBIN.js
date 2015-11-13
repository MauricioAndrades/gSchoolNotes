var search = "?name=liz&occupation=programmer&bio=yo%20guys&stuff=earrings";

// {"name" : "liz", "occupation" : "programmer", "bio" : "yo guys"}

function parseQueryString (search) {
	search = search.replace("?", "");
	var searchParts = search.split("&");
	//console.log(searchParts)

	var body = {};

	for (var i = 0; i < searchParts.length; i++) {
		var parts = searchParts[i].split("=");
		console.log(parts[0]);
		body[parts[0]] = parts[1];
	}


	return body;

}

var myForm = parseQueryString(search);
console.log(myForm);

//console.log(myForm["name"]);

//javaOOP:
//object methods:
var shape = {
	width: 600,
	height: 400,
	getArea: function() {
		return this.width*this.height;
	}
};

console.log(shape.getArea());

//function expression as method:
// if a named function is defined in gloabal scope

var eWidth = 600;
var eShape = {width: 300};

var eShowWidth = function() {
	return(this.width);
};

eShape.getWidth = eShowWidth;
console.log(eShape.getWidth());

//arrays in object

var obj = {
	arrOne: ["40", "50"],
	arrTwo: ["forty", "fifty"]
}

console.log(obj);
console.log(obj.length);var obj = {
	arrOne: ["40", "50"],
	arrTwo: ["forty", "fifty"]
}

console.log(obj);
console.log(obj.length);
console.log(obj.arrOne);
console.log(typeof(obj.arrOne));

for (var key in obj) {
	console.log(key);
};

