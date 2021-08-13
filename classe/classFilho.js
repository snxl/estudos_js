const Pai = require("./classPai")

class Filho extends Pai {

    constructor(name, sobrenome, idade){

        super(name, sobrenome, idade)

        this.count = 0
    }

    print(){
        console.log(count)
    }

}

const filho = new Filho("nicolas", "soares", 2222)

filho.name = "teste"

console.log(filho.print)