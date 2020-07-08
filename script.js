

var currdate= function(ag){
	today = new Date();
	var dd = today.getDate();
	var mm= today.getMonth()+1;
	var yyyy= today.getFullYear();

	if(dd<10) dd='0'+dd;
	if(mm<10) mm='0'+mm;
	return (dd+ag+mm+ag+yyyy);
};
console.log(currdate('/'));
console.log(currdate('-'));
document.write("Today's Date"+"<br />");
document.write(currdate('/')+'<br />');
document.write(currdate('-'));



function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try { 
    if(x == "")  throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 10)  throw "too low";
    if(x>10 && x<100) throw "valid number";
    if(x > 100)   throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}			
document.getElementById("p01").innerHTML =myFunction();			
