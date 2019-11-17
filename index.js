

var color1 = 100
function festivalColours (color1) {
  var num1 = Math.abs((color1+150)-360)+200
  var num2 = Math.abs((color1+210)-360)+200
  if (num1<num2){
    var data = Array(num1,num2)
  }
  else {
    var data = Array(num2,num1)
  }
  return data;
}

festivalColours(color1)
