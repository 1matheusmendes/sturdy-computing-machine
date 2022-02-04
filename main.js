
function adicionar() {
    var participante = document.getElementById("participantes").value;
    var lista_participante = document.getElementById("list_participantes").innerHTML;

    lista_participante = lista_participante + "<li>"+participante+"</li>";
        
    document.getElementById("list_participantes").innerHTML = lista_participante;
    
}
