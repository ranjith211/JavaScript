function display() {
  DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')
  message += "<ul><li><b>PHONE: </b>" + document.myForm.pnum.value + "</ul>";
  DispWin.document.write(message);

}

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/javascript-icon.png') {
    myImage.setAttribute ('src','images/javascript2.png');
  } else {
    myImage.setAttribute ('src','images/javascript-icon.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'JavaScript is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'JavaScript is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
 var table = document.getElementById("table"), avgVal, sumVal = 0, 
                        rowCount = table.rows.length - 1;// minus the header
            
            for(var i = 1; i < table.rows.length; i++)
            {
                sumVal = sumVal + parseInt(table.rows[i].cells[1].innerHTML);
            }
            
            document.getElementById("val").innerHTML = "Average Value = " + parseInt(sumVal / rowCount);

            function validateForm() {

  var x = document.forms["myForm"]["pnum"].value;
  if (x == "") {
    alert("Number must be filled out");
    
  }

    }




var x = 5;
var y = 6;
console.log(x,y);

const numbers = new Array(1,2,3,4,5);
console.log(numbers[3].toString());

function multiply(a, b ) {
  return a * b;
}

console.log(multiply(5, 2));
document.write("PI value:"+Math.PI+"<br />");
document.write("Power is:"+Math.pow(3,6)+"<br />");
  document.write("Square Root is:"+Math.sqrt(81)+"<br />");
  document.write("Absolute is:"+Math.abs(-9000)+"<br />");
  
  document.write("Random number is:"+Math.random+"<br />");
  document.write("Ceil is:"+Math.ceil(4.2)+"<br />");
  document.write("Round is:"+Math.round(4.6)+"<br />");
  document.write("Floor is:"+Math.floor(4.9)+"<br />");
  document.write("Sin is:"+Math.sin(Math.PI/4)+"<br />");
  document.write("Cos is:"+Math.cos(Math.PI/4)+"<br />");
  document.write("Tan is:"+Math.tan(Math.PI/4)+"<br />");
  document.write("Cosec is:"+1/Math.sin(Math.PI/4)+"<br />");
  document.write("Sec is:"+1/Math.cos(Math.PI/4)+"<br />");
  document.write("Cot is:"+1/Math.tan(Math.PI/4)+"<br />");

console.log(Math.PI);
console.log(Math.round(4.4));
console.log(Math.round(4.9));
console.log(Math.pow(5,2));
console.log(Math.sqrt(81));
console.log(Math.abs(-4.2));
console.log(Math.floor(4.8));
console.log(Math.ceil(4.2));
console.log(Math.sin(90));
console.log(Math.cos(0));
console.log(Math.tan(45));