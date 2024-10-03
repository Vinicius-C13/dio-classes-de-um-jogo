class Heroi {

    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    ataque() {
        let ataque
        if(this.tipo == "guerreiro") {
            ataque = "espada"
        } else if(this.tipo == "mago") {
            ataque = "magia"
        } else if(this.tipo == "monje") {
            ataque = "artes marciais"
        } else if(this.tipo == "ninja") {
            ataque = "shuriken"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
     }
}