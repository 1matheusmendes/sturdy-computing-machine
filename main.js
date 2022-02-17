//Matheus Mendes

var palestras = [
    {
        name: "Visão Computacional",
        id: "visao_computacional",
        value: "1",
        qntVagas: 5,
        vagasUtil: 1,
    },
    {
        name: "Front-End",
        id: "front_end",
        value: "2",
        qntVagas: 5,
        vagasUtil: 1,
    },
    {
        name: "Back-End",
        id: "back_end",
        value: "3",
        qntVagas: 5,
        vagasUtil: 1,
    }
];

function verificaData() {

    var data = new Date();

    var ano = data.getFullYear();

    var mes = String(data.getMonth() + 1).padStart(2, '0');

    var dia = String(data.getDate()).padStart(2, '0');

    var dataAtual = ano + '-' + mes + '-' + dia;

    var dataInformada = document.getElementById("data").value;

    if (dataInformada >= dataAtual) {
        return dataInformada ? dataInformada : false;
    }
    else
        return false;
}

function idadeInformada() {

    var idade = parseInt(document.getElementById("idade").value);

    if (idade >= 18) {
        return idade ? idade : false;
    }
    else
        return false;
}

function validarNome() {
    var participante = document.getElementById("participantes").value;

    return participante ? participante : false;
}

function validarPalestras() {
    var select_palestra = document.getElementById("select_palestra").value;
    switch (select_palestra) {
        case "1":
            var validate = checarVagas(palestras[0]);
            if (validate) {
                palestras[0].vagasUtil = palestras[0].vagasUtil + 1;
                return palestras[0].name;
            }
            else {
                alert("Não tem mais vaga para essa palestra");
                return false;
            }
            break;
        case "2":
            var validate = checarVagas(palestras[1]);
            if (validate) {
                palestras[1].vagasUtil = palestras[1].vagasUtil + 1;
                return palestras[1].name;
            }
            else {
                alert("Não tem mais vaga para essa palestra");
                return false;
            }
            break;
        case "3":
            var validate = checarVagas(palestras[2]);
            if (validate) {
                palestras[2].vagasUtil = palestras[2].vagasUtil + 1;
                return palestras[2].name;
            }
            else {
                alert("Não tem mais vaga para essa palestra");
                return false;
            }
            break;
        default:
            alert("entrada invalida");
            return false;
            break;
    }
}

function cadastrar() {
    const dataVerificada = verificaData();
    const idadeVerificada = idadeInformada();
    const nomeVerificado = validarNome();
    const palestraVerificada = validarPalestras();
    
    if (dataVerificada && idadeVerificada && nomeVerificado && palestraVerificada) {    
        //var participante = document.getElementById("participantes").value;
        var lista_participante = document.getElementById("list_participantes").innerHTML;
        lista_participante = lista_participante + "<th class = data_evento >" + nomeVerificado + "</th> <br>";
        document.getElementById("list_participantes").innerHTML = lista_participante;

        var lista_idade = document.getElementById("lista_idade").innerHTML;
        lista_idade = lista_idade + "<th class = data_evento >" + idadeVerificada + "</th> <br>";
        document.getElementById("lista_idade").innerHTML = lista_idade;       

        var select_palestra = document.getElementById("select_palestra").value;
        switch (select_palestra) {
            
            case "1":
                var lista_palestrante = document.getElementById("lista_palestrante").innerHTML;
                lista_palestrante = lista_palestrante + "<th class = data_evento >" + palestraVerificada + "</th> <br>";
                document.getElementById("lista_palestrante").innerHTML = lista_palestrante;
                break;
            case "2":
                var lista_palestrante = document.getElementById("lista_palestrante").innerHTML;
                lista_palestrante = lista_palestrante + "<th class = data_evento >" + palestraVerificada + "</th> <br>";
                document.getElementById("lista_palestrante").innerHTML = lista_palestrante;
                break;
            case "3":
                var lista_palestrante = document.getElementById("lista_palestrante").innerHTML;
                lista_palestrante = lista_palestrante + "<th class = data_evento >" + palestraVerificada + "</th> <br>";
                document.getElementById("lista_palestrante").innerHTML = lista_palestrante;
                break;
            default:
                console.log("entrada invalida");
                break;
        }
        var lista_data = document.getElementById("lista_data").innerHTML;
        lista_data = lista_data + "<th class = lista_data >" + dataVerificada + "</th> <br>";
        document.getElementById("lista_data").innerHTML = lista_data;
    }
}

function checarVagas(palestra) {
    console.log(palestra);
    if (palestra.vagasUtil <= palestra.qntVagas) {
        return true
    }
    else {
        return false;
    }

}