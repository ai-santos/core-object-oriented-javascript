//OOP Book Chapter 4 Exercises
//1. global object
//2. Object
//3. [1, undefined]
//4. See below
//5. See below
function MyString(data) {
  this.data = "".concat(data);
  this.reverse = function() {
    var string2 = "";
    for(var i = this.data.length - 1; i >= 0; i--) {
    string2 += this.data[i];
  }
    console.log(string2)
    return string2;
  }
}

var string = new MyString(700);
string.reverse()


//6. See below
function MyArray() {
  this.createArray = function(data) {
  return Object.values(data);
  }
  this.arr = this.createArray(arguments);
}

var newArr = new MyArray(700, 300, 500);
newArr.arr;