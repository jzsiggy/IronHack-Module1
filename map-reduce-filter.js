// 

let paragrafos1 = ["paragrafo1", "paragrafo2", "paragrafo3"];
texto = [];

let textoCompleto1 = paragrafos1.forEach((paragrafo) => {
    texto.push(`<p>${paragrafo}</p>`);
});

console.log(texto)

// MAP

let paragrafos = ["paragrafo1", "paragrafo2", "paragrafo3"];

let textoCompleto = paragrafos.map((paragrafo) => `<p>${paragrafo}</p>`).join("\n");

// console.log(textoCompleto);

//FILTER

let nomes = ["j", "k", "kll", ";"];
// let filtrados = nomes.filter((nome) => nome.length == 3)
let filtrados = nomes.filter((nome) => {
    if (nome.length == 3) {
       return nome
    }
})

// console.log(filtrados)

//  REDUCE

let p2 = []