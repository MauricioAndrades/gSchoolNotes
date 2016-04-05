var properties = Object.keys(object); // if you want to mimic for-in behavior
var i, len;
for (i = 0, len = properties.length; i < len; i++) {
  console.log("Name: " + properties[i]);
  console.log("Value: " + object[properties[i]]);
}

var logOBJ = function(name, type) {
  this.name = name;
  this.type = type;
}

var newObj = new logOBJ("kitty", "black");
