
function CalcConsumo(){
     var km, gas, consumo;
     km =  document.getElementById('km').value 
     gas = document.getElementById('gas').value
     consumo = km / gas

     document.querySelector("h2").innerHTML = " Seu consumo foi de " + consumo

 }
