//preguntar los ingresos
var income = prompt("¿cuanto es el ingreso?");//400
//costo
var costs = prompt("¿cuanto es el costo?");//65
//porcentaje de ingresos
var taxPorcen = prompt("¿cuanto es el (%) de tus impuestos?");//18%
//ganancia bruta
var grossProfit = income - costs;
//cantidad de impuestos
var tax = grossProfit*taxPorcen/100;//60.3
//ganancia neta
var netIncome = grossProfit-tax;
//mostrando ganancia neta
document.write("Tu ganancia neta es $"+ netIncome);
