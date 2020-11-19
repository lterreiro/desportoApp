export class TipoDesporto {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }

    id;
    nome;

    getId() {
        return this.id;
    }

    getNome() {
        return this.nome;
    }

    toString() {
        return `id: ${this.id} nome: ${this.nome}`;
    }
}