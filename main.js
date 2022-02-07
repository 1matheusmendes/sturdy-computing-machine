//Matheus Mendes

function verificaData(){

    var data = new Date();

    var ano = data.getFullYear();

    var mes = String(data.getMonth()+1).padStart(2, '0');

    var dia = String(data.getDate()).padStart(2, '0');
    
    var dataAtual = ano +'-'+ mes +'-'+ dia;

    var dataInformada = document.getElementById("data").value;

    if (dataInformada >= dataAtual){
        console.log("Data ok")
    }
    else    
        alert("Data invalida");
}

function idadeInformada(){

    var idade = parseInt (document.getElementById("idade").value);
    
    if (idade >= 18){
        console.log("Ok")
    }
    else
        alert ("Você não tem a idade minima para participar do evento");
}

function adicionar() {
    var participante = document.getElementById("participantes").value;
    
    while (participante < 5){
        console.log("participante cadastrado" + participante);
    }


    var lista_participante = document.getElementById("list_participantes").innerHTML;

    lista_participante = lista_participante + "<li class = data_evento >"+participante+"</li>";
        
    document.getElementById("list_participantes").innerHTML = lista_participante;
    
}
