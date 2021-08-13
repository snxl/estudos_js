const _nome = Symbol("private nome")
const _sobrenome = Symbol("private sobrenome")
const _idade = Symbol("private idade")

module.exports = class Pai{

    constructor(nome, sobrenome, idade){
        this[_nome] = nome
        this[_sobrenome] = sobrenome
        this[_idade] = idade
    }

    set name( value ){

        return this[_nome] = value

    }

    
    set sobrenome( value ){

        return this[_sobrenome] = value

    }
    
    set idade( value ){

        return this[_idade] = value

    }

    get name(){

        return this[_nome]
    
    }

    get sobrenome(){

        return this[_sobrenome]

    }

    get idade(){

        return this[_idade]

    }

}