alert("Hallo  Wereld");

//kleur aanpassen
document.getElementById("title").style.color = "orange";

// variabelen gebruiken
var getal1 = 12;
var getal2 = 4;
var som = getal1 * getal2; 
alert(getal1 + " x " + getal2 + " = " + som);


// promptbox

var kleur = prompt("Geef een engelse kleurnaam", "");

//kleur aanpassen
document.getElementById("title").style.color = kleur;
//document.getElementyById("title").style.color = "orange";

// tekst aanpassen
document.getElementById("p1").innerHTML = "Hello " + kleur +"!";


