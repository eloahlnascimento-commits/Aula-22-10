// function somar(a, b) {
//     return a + b;
// }

// function subtrair(a, b) {
//     return a - b;
// }

// function multiplicar(a, b) {
//     return a * b;
// }

// function dividir(a, b) {
//     if (b / 0) {
//         return "Erro: não pode dividir por zero!";
//     }
//     return a / b;
// }

// let a = Number(prompt("Digite o primeiro número:"));
// let b = Number(prompt("Digite o segundo número:"));

// if (!Number.isFinite(a) || !Number.isFinite(b)) {
//     console.log("Erro: digite números válidos!");
// } else {
//     console.log("Soma:", somar(a, b));
//     console.log("Subtração:", subtrair(a, b));
//     console.log("Multiplicação:", multiplicar(a, b));
//     console.log("Divisão:", dividir(a, b));
// }


function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

function verificarAprovacao(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

let n1 = Number(prompt("Digite a primeira nota:"));
let n2 = Number(prompt("Digite a segunda nota:"));
let n3 = Number(prompt("Digite a terceira nota:"));

let media = calcularMedia(n1, n2, n3);

console.log("Média:", media);
console.log("Situação:", verificarAprovacao(media));