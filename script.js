// const estudante = {
//     nome: "Fabricio",
//     sobrenome: "Croscatto",
//     numeroMatricula: "4321",
//     notasSemestre:[3, 10, 5] 
// }
// //notação de ponto

// estudante.modulo = 1

// //notação de colchetes 
// //estudante["modulo"] = 1

// console.log(estudante.nome)
// console.log(estudante.notasSemestre[1])
// console.log(estudante.modulo)

// const copiaEstudante = {
//     ...estudante,
//     nome: "Xampson",
//     notasSemestre:[...estudante.notasSemestre, 9],
//     modulo: estudante.modulo +1 

// }
// console.log(copiaEstudante)

// const estudantesLabenu = []
// estudantesLabenu.push(estudante, copiaEstudante)

// console.log(estudantesLabenu)


const carrinho = {
    nome: "Fabricio",
    formaDePagamento : "PIX",
    endereco: "Rua Jaspion",
    compras: [ 
    {nomeProduto: "Pizza", valor: "30,00" , quantidade: "2"},
    {nomeProduto: "Hamburguer", valor: "20,00", quantidade: "3"},
    {nomeProduto: "Refrigerante", valor:"8,00", quantidade : "6"}
     ]
    }
     const carrinhoPresente = {
        ... carrinho,
        nome: "Jo",
        formaDePagamento: "cartão presente"
     }
     console.log(carrinho.compras.length)
     console.log(carrinho, carrinhoPresente)