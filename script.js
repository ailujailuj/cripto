const criptoBtn = document.getElementById("btn-cripto");
const descriptoBtn = document.getElementById("btn-descripto");
const msg = document.getElementById("msg-text");
const copyBtn = document.getElementById("btn-copy");
let input = document.getElementById("input-text");


function copiar() {
	let msgTxt = msg.value
	navigator.clipboard.writeText(msgTxt);
	document.getElementById("copiado").innerText = "Copiado!"
	setTimeout(function(){
    document.getElementById("copiado").innerHTML = '';
}, 400);	
}


function validarCripto() {
	let inputTxt = input.value;
	let regex = /^[a-z0-9 ,.!?;:()]+$/g;
	let validacao = regex.test(inputTxt)

	if (validacao == true) {
		let criptoTxt = inputTxt.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
	    return msg.innerText = criptoTxt
	} else  {
	return alert ("Apenas letras minúsculas, sem acentos e caracteres especiais")
	}
}

function validarDescripto() {
	let inputTxt = input.value;
	let regex = /^[a-z0-9 ,.!?;:()]+$/g;
	let validacao = regex.test(inputTxt)

	if (validacao == true) {
		let descriptoTxt = inputTxt.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u"); 
		return msg.innerText = descriptoTxt
	} else {
	return alert ("Apenas letras minúsculas, sem acentos e caracteres especiais")
	}
}
