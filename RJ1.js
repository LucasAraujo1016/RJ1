const capitaoAmerica = {
    nome: 'Steve Rogers',
    codinome: 'Capitão america',
    armaPrimaria: 'Escudo americano',
    armaSecundaria: '',
    velocidade: 85,
    força: 75,
    resistencia: 80,
 
descricao: function () {
    return 'codinome: ' + this.codinome + '\n'
    + 'Arma principal: ' + this.armaPrimaria + '\n'
    + 'Arma secundaria: ' + this.armaSecundaria + '\n'
    + 'Nível de força: ' + this.força + '\n'
    + 'Nível de velocidade: ' + this.velocidade + '\n'
    + 'Nível de resistência: ' + this.resistencia + '\n'
}}
 
const homemFerro = {
    nome: 'Tony Stark',
    codinome: 'Homem de ferro',
    armaPrimaria: 'Armadura tecnologica',
    armaSecundaria: '',
    velocidade: 80,
    força: 35,
    resistencia: 75,
 
descricao: function () {
    return 'codinome: ' + this.codinome + '\n'
    + 'Arma principal: ' + this.armaPrimaria + '\n'
    + 'Arma secundaria: ' + this.armaSecundaria + '\n'
    + 'Nível de força: ' + this.força + '\n'
    + 'Nível de velocidade: ' + this.velocidade + '\n'
    + 'Nível de resistência: ' + this.resistencia + '\n'
}}
 
const thor = {
    nome: 'Thor',
    codinome: 'Deus do trovão',
    armaPrimaria: 'Matelo Mjolnir',
    armaSecundaria: 'Machado Stormbreaker',
    velocidade: 80,
    força: 95,
    resistencia: 95,
 
descricao: function () {
    return 'codinome: ' + this.codinome + '\n'
    + 'Arma principal: ' + this.armaPrimaria + '\n'
    + 'Arma secundaria: ' + this.armaSecundaria + '\n'
    + 'Nível de força: ' + this.força + '\n'
    + 'Nível de velocidade: ' + this.velocidade + '\n'
    + 'Nível de resistência: ' + this.resistencia + '\n'
}}
 
const thanos = {
    nome: 'Thanos',
    codinome: 'Titã louco',
    armaPrimaria: 'Manopla do infinito',
    armaSecundaria: 'Espada de laminas duplas',
    velocidade: 60,
    força: 100,
    resistencia: 100,
 
descricao: function () {
    return 'codinome: ' + this.codinome + '\n'
    + 'Arma principal: ' + this.armaPrimaria + '\n'
    + 'Arma secundaria: ' + this.armaSecundaria + '\n'
    + 'Nível de força: ' + this.força + '\n'
    + 'Nível de velocidade: ' + this.velocidade + '\n'
    + 'Nível de resistência: ' + this.resistencia + '\n'
}}
 
let personagens = [thanos,thor,homemFerro,capitaoAmerica]
function comparar (perso1, perso2){
    let pontos1 = 0; 
    let pontos2 = 0; 
    let empates = 0;

    if (personagens[perso1].força > personagens[perso2].força) {
        console.log(`Em força: ${personagens[perso1].codinome} vence!`); pontos1++
       } else if (personagens[perso1].força < personagens[perso2].força) {
        console.log(`Em força: ${personagens[perso2].codinome} vence!`); pontos2++
       } else {
        console.log(`Em força eles empatam!`); empates++
       }
    if (personagens[perso1].velocidade > personagens[perso2].velocidade) {
        console.log(`Em velocidade: ${personagens[perso1].codinome} vence!`); pontos1++
       } else if (personagens[perso1].velocidade < personagens[perso2].velocidade) {
        console.log(`Em velocidade: ${personagens[perso2].codinome} vence!`); pontos2++
       } else {
        console.log(`Em velocidade eles empatam!`); empates++
       }
    if (personagens[perso1].resistencia > personagens[perso2].resistencia) {
        console.log(`Em resistencia: ${personagens[perso1].codinome} vence!`); pontos1++
       } else if (personagens[perso1].resistencia < personagens[perso2].resistencia) {
        console.log(`Em resistencia: ${personagens[perso2].codinome} vence!`); pontos2++
       } else {
        console.log(`Em velocidade eles empatam!`); empates++
       }

    vencedor(pontos1, pontos2, empates, perso1, perso2)
}

function vencedor(pontos1, pontos2, empates, perso1, perso2) {
    if (empates >= 2) {
        console.log(`${personagens[perso1].codinome} e ${personagens[perso2].codinome} empatam!`);
    } else if (pontos1 >= 2) {
        console.log(`${personagens[perso1].codinome} é o grande vencedor!`);
    } else if (pontos2 >= 2) {
        console.log(`${personagens[perso2].codinome} é o grande vencedor!`);
    }
}

for (let perso1 = 0; perso1 < personagens.length; perso1++ ){
    for (let perso2 = perso1 + 1; perso2 < personagens.length; perso2++){
       console.log(`${personagens[perso1].nome} descrição: `)
       console.log(`${personagens[perso1].descricao()} `)
       console.log(`VS ` + `\n`)
       console.log(`${personagens[perso2].nome} descrição: `)
       console.log(`${personagens[perso2].descricao()} `)

       comparar(perso1,perso2)
       console.log(`\n`)
    }
}