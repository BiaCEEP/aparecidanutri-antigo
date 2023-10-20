var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("paciente");


for(var i = 0; i < pacientes.length ; i++){

    var paciente = paciente[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = true;
    var alturaEhValida = true;
    
    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    
    if(altura <= 0 || altura >= 3.00){
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.style.backgroundColor = "orange";
    }
    
    if( alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
    }
}
var botaoAdicionar = document.querySelector("adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
   event.preventDefault();

    var from = document.querySelector("#form-adicionar");

    var mome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacientesTr = document.createElement("tr");

    var nomeTd = createElement("td");
    var pesoTd = createElement("td");
    var alturaTd = createElement("td");
    var gorduraTd = createElement("td");
    var imcTd = createElement("td");

    nomeTd.textcontent = nome;
    pesoTd.textcontent = peso;
    alturaTd.textcontent = altura;
    gorduraTd.textcontent = gordura;
    
    pacientesTr.appendChild(nomeTd);
    pacientesTr.appendChild(pesoTd);
    pacientesTr.appendChild(alturaTd);
    pacientesTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

}); 








