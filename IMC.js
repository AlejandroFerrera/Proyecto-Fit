window.onload = iniciar;
function iniciar()
{
    var btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", calcular);
}


function calcular()
{
    var  pesotxt = document.getElementById("txtPeso").value;
    var  alturatxt = document.getElementById("txtAltura").value;

    var peso = pesotxt.value;
    var altura =alturatxt.value;

    peso = parceInt(peso);
    altura = parceInt(altura);

    if (peso <= 0 && peso >= 300 || altura <= 50 && altura >=250) {
        var newaltura = altura/100;
        var imc = peso / (newaltura * newaltura);
        alert("Su IMC es: " + imc.toFixed(2));
        alert("Porfavor ingrese un valor valido");
    }else{
        alert("Porfavor ingrese un valor valido");
    }

}