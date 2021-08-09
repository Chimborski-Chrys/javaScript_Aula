
/*
var nome = "Chrystiomar";
var idade = 36;
alert(nome + " tem " + idade + " anos ");
*/

var data = new Date();
var dia = data.getDate();
var hora = data.getHours();
var minuto = data.getMinutes();
//alert("Hoje é dia " + dia + " e são " + hora + ":" + minuto);

function clicou(){
    //alert("Virus Instalado com sucesso !!!!!");
    document.getElementById("agradecer").innerHTML = "<b>Obrigado por clicar</b>" ;
}

function redirecionar(){
    window.open("https://github.com/Chimborski-Chrys");
    //window.location.href = "https://github.com/Chimborski-Chrys";
}

function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "Passou o mouse aqui";
    //alert("Passou aqui")
    elemento.innerHTML = "Passou o mouse aqui";
}

function voltar(elemento){
  //  document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
  elemento.innerHTML = "Passou o mouse aqui";
}

function load()
{
    alert("Pagina carregada");
}

function funcaoChange(elemento){
console.log(elemento.value);
}
/*
function soma (n1,n2){
    return n1 + n2;
}
alert(soma(5,10));
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai Time", "Time", "Brasil"));
*/

/*
function validaIdade(idade){
    var validar;
    if(idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Idade ? ");
console.log(validaIdade(idade));
*/

/* trocar
var frase = "Mexico ganha todas";
console.log(frase.replace("Argentina", "Brasil"));
console.log(frase.toUpperCase());
*/

/*
var lista = ["fifa","pes","cod","f1"]
console.log(lista); // mostra toda lista
console.log(lista[0]); // mostra somente o item posicao 0
lista.push("crash"); // inserir no ifinal da lista
console.log(lista);
lista.pop(); // retirar ultimo item da lista
console.log(lista);
console.log(lista.reverse()); // mostra os itens na ordem invertida
console.log(lista.join(" - ")); // alterar o separador
*/

/*
var jogo = {titulo:"futebol", plataforma:"ps5"}
console.log(jogo.titulo);
console.log(jogo.plataforma);
var jogos = [{titulo:"futebol", plataforma:"ps5"},{titulo:"corrida", plataforma:"ps5"}, {titulo:"fps", plataforma:"Xbox"}]
console.log(jogos);
console.log(jogos[1].titulo);
*/

/*
var idade = prompt("Sua idade? ")
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

/*
var count = 0;
while (count < 5){
    console.log(count);
    count += 1;
};
*/

/*
var count;
for(count = 0; count < 5; count++){
    alert(count);
};
*/

