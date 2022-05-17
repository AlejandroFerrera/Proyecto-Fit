window.onload = iniciar;
function iniciar()
{
    var btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", calcular);
}


function calcular()
{
    var  peso = document.getElementById("txtPeso").value;
    var  altura = document.getElementById("txtAltura").value;

    if (peso >= 2 && peso <= 300 || altura >= 50 && altura <=250) {
        var newaltura = altura/100;
        var imc = peso / (newaltura * newaltura);
        alert("Su IMC es: " + imc.toFixed(2));
    }else{
        alert("Porfavor ingrese un valor valido");
    }

}