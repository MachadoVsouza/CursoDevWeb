// alert("Olá Mundo!");
// var resposta = confirm("Deseja continuar?");
// console.log(resposta);

document.querySelector("#calcular").addEventListener("click", function () {
	let valorX = document.querySelector("#valorX").value;
	let valorY = document.querySelector("#valorY").value;
	if (valorX.length > 0 && valorY.length > 0) {
		alert("O resultado é: " + somar(valorX, valorY));
	} else {
		alert("Digite um valor válido!");
	}
});

function somar(x, y) {
	return parseInt(x) + parseInt(y);
}
function subtrair(x, y) {
	return x - y;
}
function multiplicar(x, y) {
	return x * y;
}
function dividir(x, y) {
	return x / y;
}
function resto(x, y) {
	return x % y;
}
function quadrado(x) {
	return x * x;
}
function cubo(x) {
	return x * x * x;
}
