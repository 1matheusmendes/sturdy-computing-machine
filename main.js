//Matheus Mendes

function verificaData(){

    var dataAtual = Date();

    console.log(dataAtual)

    var dataInformada = document.getElementById("data").value;


    console.log(dataInformada);

}


function idadeInformada(){

    var idade = parseInt (document.getElementById("idade").value);
    
    if (idade > 18){
        console.log("Ok")
    }
    else
        alert ("Você não tem a idade minima para participar do evento");
}

function adicionar() {
    var participante = document.getElementById("participantes").value;
    var lista_participante = document.getElementById("list_participantes").innerHTML;

    lista_participante = lista_participante + "<li>"+participante+"</li>";
        
    document.getElementById("list_participantes").innerHTML = lista_participante;
    
}
