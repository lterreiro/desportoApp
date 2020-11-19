
import { TipoDesporto } from './tipoDesporto.js'
import { Desporto } from "./desporto.js";

let tiposDesporto = [];
let desportos = [];
let date = new Date();

tiposDesporto.push(new TipoDesporto(1, "Jogging"));
tiposDesporto.push(new TipoDesporto(2, "Cycling"));
tiposDesporto.push(new TipoDesporto(3, "Gym"));
tiposDesporto.push(new TipoDesporto(4, "Yoga"));

desportos.push(new Desporto(1, "Corrida no parque", tiposDesporto.find(tipo => tipo.id == 1), 3.4, date.toLocaleDateString()));
desportos.push(new Desporto(2, "Passeio Bicicleta", tiposDesporto.find(tipo => tipo.id == 2), 40, date.toLocaleDateString()));



class DesportoApp {

    constructor(tiposDesporto, desportos) {
        this.tiposDesporto = tiposDesporto;
        this.desportos = desportos;
    }

    desportos;
    tiposDesporto;

    getDesportos() {
        return desportos;
    }

    getTipoDesportoById(id) {
        return this.tiposDesporto.find(tp => tp.id == id);
    }

    getTipoDesportoByNome(nome) {
        return this.tiposDesporto.find(td => tp.nome == nome);
    }

    limpar() {
        desportos = [];
    }

    toString() {
        desportos.forEach(desporto => desporto.imprimir())
    }

}

let app = new DesportoApp(tiposDesporto, desportos);

document.getElementById('listarBtn').addEventListener('click', function () {
    let ul = document.getElementById('desportosList');
    ul.innerHTML = "";
    app.getDesportos().forEach(desporto => {
        let li = document.createElement('li');
        li.innerHTML = desporto.toString();
        ul.appendChild(li);
    });
    if (ul.innerHTML == "") {
        let li = document.createElement('li');
        li.innerHTML = "Não existem elementos para listar";
        ul.appendChild(li);
    }
});

let select = document.getElementById('desportoTipo');
tiposDesporto.forEach(desporto => {
    let opt = document.createElement("option");
    opt.text = desporto.nome;
    opt.value = desporto.id;
    select.appendChild(opt);
});

document.getElementById('inserirBtn').addEventListener('click', function () {
    let id = document.getElementById('desportoId');
    let desc = document.getElementById('desportoDesc');
    let tipo = document.getElementById('desportoTipo');
    let dist = document.getElementById('desportoDistancia');
    let data = document.getElementById('desportoData');
    let tipoDesp = app.getTipoDesportoById(tipo.value);
    let newDesporto = new Desporto(id.value, desc.value, tipoDesp, dist.value, data.value);
    app.getDesportos().push(newDesporto);
    console.log(`Adicionado novo desporto ${newDesporto}`);
    alert("Adicionado novo desporto");
    document.getElementById('listarBtn').click();
});


document.getElementById('limparBtn').addEventListener('click', function () {
    app.limpar();
    console.log('Limpos desportos');
    document.getElementById('listarBtn').click();
});