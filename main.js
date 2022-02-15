//Matheus Mendes
/** 
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

//function idadeInformada(){

//    var idade = parseInt (document.getElementById("idade").value);
    
  //  if (idade >= 18){
    //    console.log("Ok")
    //}
    //else
    //    alert ("Você não tem a idade minima para participar do evento");
//}
*/
function cadastrar() {

    var data = new Date();
    var ano = data.getFullYear();
    var mes = String(data.getMonth()+1).padStart(2, '0');
    var dia = String(data.getDate()).padStart(2, '0');

    var dataAtual = ano +'-'+ mes +'-'+ dia;

    var dataInformada = document.getElementById("data").value;

    if (dataInformada >= dataAtual){
        //console.log("Data ok")
    }
    else    
        alert("Data invalida");

    var idade = parseInt (document.getElementById("idade").value);
    
    if (idade >= 18){
        //console.log("Idade ok")
    }
    else
        alert ("Você não tem a idade minima para participar do evento");

    var participante = document.getElementById("participantes").value;
    var lista_participante = document.getElementById("list_participantes").innerHTML;
    lista_participante = lista_participante + "<th class = data_evento >"+participante+"</th> <br>";
    document.getElementById("list_participantes").innerHTML = lista_participante;    

    var lista_idade = document.getElementById("lista_idade").innerHTML;
    lista_idade = lista_idade +"<th class = data_evento >"+idade+"</th> <br>";
    document.getElementById("lista_idade").innerHTML = lista_idade;


    var vs = document.getElementById("visao_computacional").innerHTML;
    var frontend = document.getElementById("front_end").innerHTML;
    var backand = document.getElementById("back_end").innerHTML;

    var select_palestra = document.getElementById("select_palestra").value;

    
    //console.log(select_palestra);

    switch (select_palestra) {
        case "1":
            var lista_palestrante = document.getElementById("lista_palestrante").innerHTML;
            lista_palestrante = lista_palestrante+"<th class = data_evento >"+vs+"</th> <br>";
            document.getElementById("lista_palestrante").innerHTML = lista_palestrante; 
            break;
        case "2":
            var lista_palestrante = document.getElementById("lista_palestrante").innerHTML;
            lista_palestrante = lista_palestrante+"<th class = data_evento >"+frontend+"</th> <br>";
            document.getElementById("lista_palestrante").innerHTML = lista_palestrante;
            break;
        case "3":
            var lista_palestrante = document.getElementById("lista_palestrante").innerHTML;
            lista_palestrante = lista_palestrante+"<th class = data_evento >"+backand+"</th> <br>";
            document.getElementById("lista_palestrante").innerHTML = lista_palestrante;                    
            break; 
        default:
            console.log("entrada invalida");       
            break;    
    }   

    var listadata = document.getElementById("lista_data").innerHTML;
    listadata = listadata+"<th class = lista_data >"+dataInformada+"</th> <br>";
    document.getElementById("lista_data").innerHTML = listadata;
    
    const todososdados = [dataInformada, idade, participante, select_palestra];

    var dadosJSON = JSON.stringify(todososdados);

    console.log(dadosJSON);

}
