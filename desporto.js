
import { TipoDesporto } from './tipoDesporto.js'

export class Desporto {

    constructor(id, nome, tipo, distancia, data) {
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        this.distancia = distancia;
        this.data = data;
    }

    id;
    nome;
    tipo;
    distancia;
    data

    getId() {
        return this.id;
    }

    getNome() {
        return this.nome;
    }

    getTipo() {
        return this.tipo;
    }

    getTistancia() {
        return this.distancia;
    }

    getData() {
        return this.data;
    }

    toString() {
        return `id: ${this.id}\tnome: ${this.nome}\ttipo: ${this.tipo.nome}\tdistancia: ${this.distancia}\tdata: ${this.data}`;
    }
}