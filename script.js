/*function verificarIdade(
  idade
)  {
  if (idade >= 18) {
    console.log("Você é maior de idade!");
  } else {
    console.log("Você é de menor");
  }
}
verificarIdade(10); 

/*idade se torna o parâmetro do valor a ser inserido*/

/*entre parenteses se encontra o input, a função é o output solicitado no bloco de ações*/

function aplicarDesconto(valor, desconto) {
  return valor - valor * desconto;
}
const precoEtiqueta = 100;
const formaDePagto = 4;

if (formaDePagto === 1) {
  console.log(precoEtiqueta - precoEtiqueta * 0.1);
} else if (formaDePagto === 2) {
  console.log(precoEtiqueta - precoEtiqueta * 0.15);
} else if (formaDePagto === 3) {
  console.log(precoEtiqueta);
} else {
  console.log(precoEtiqueta + precoEtiqueta * 0.1);
}
