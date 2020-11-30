
function validasenha(){
    var senha1 = document.getElementById("senha").value;
    var senha2 = document.getElementById("senha2").value;

    if(senha1 != senha2){
        document.getElementById("senha2").style.border = "red 3px solid";
    }else {
        document.getElementById("senha2").style.border = "green 3px solid";
    }
}

var form = document.getElementById('form');

form.addEventListener('submit', function(e) {

   //validações dos seguintes campos
   var nome = document.getElementById("nome_completo");
   var email = document.getElementById("inputEmail4");
   var data = document.getElementById("data_nascimento").value;
   var campoData = document.getElementById("data_nascimento");
   var cvv = document.getElementById("cvv");

   //Verifica se o campo nome foi preenchido e se
   //contém no mínimo três caracteres.
   if(nome.value == "" || nome.value.lenght < 3) {
        //É mostrado um alerta, caso o campo esteja vazio.
        alert("Por favor, indique um nome válido.");
        //Foi definido um focus no campo.
        nome.focus();
        //o form não é enviado.
        e.preventDefault;
    }

    //validação email

    // o campo e-mail precisa de conter: "@", "." e não pode estar vazio
    if( email.value == "" 
        || email.value.indexOf('@') == -1 
        || email.value.indexOf('.') == -1 ){
        alert( "Por favor, informe um E-MAIL válido!" );
        email.style.border = "red 3px solid";
        e.preventDefault;
    }else{
        email.style.border = "green 3px solid";
    }

    //validação data de nascimento
    
    data = data.replace("/", "-"); // substitui as barras "/" por hífen "-"

    var data_array = data.split("-"); // quebra a data em array
   
    // para o IE onde será inserido no formato dd/MM/yyyy
    if(data_array[0].length != 4){
        data = data_array[2]+"-"+data_array[1]+"-"+data_array[0]; // remonto a data no formato yyyy/MM/dd
    }
    
    // compara as datas e calculo a idade
    var hoje = new Date();
    var nasc  = new Date(data);
    var idade = 0;
    idade = hoje.getFullYear() - nasc.getFullYear();
    var mes = hoje.getMonth() - nasc.getMonth();

    // calcula a idade 
    if (mes < 0 || (mes === 0 && hoje.getDate() < nasc.getDate())){
        idade--;
    }
    console.log(idade);
    if(idade > 18 ){
        campoData.style.border = "green 3px solid";
    }else{
        alert("Pessoas menores de 18 não podem se cadastrar.");
        campoData.style.border = "red 3px solid";
        e.preventDefault;
    }

    //validação do cvv
    if (cvv.value.length != 3){
        alert("Só é permitido 3 digitos no CVV");
        cvv.style.border = "red 3px solid";
    }else cvv.style.border = "green 3px solid";

});

//validação do cpf
var CPFid = document.getElementById('cpf');
 
CPFid.addEventListener('focusout', function(e) {

    var cpf = CPFid.value; // captura o valor que usario digitou

    cpf = cpf.replace(/[\s.-]*/igm, '') //troca qualquer caractere especial por nada, caso o usuario digite com .

    if (!cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" 
    ) {
        // alert("CPF INVALIDO");
        CPFid.style.border = "red 3px solid";
    }else{
        CPFid.style.border = "green 3px solid";
    }
    var soma = 0
    var resto

    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11

    if ((resto == 10) || (resto == 11))  resto = 0

    if (resto != parseInt(cpf.substring(9, 10)) ) {
        CPFid.style.border = "red 3px solid";
    }


    soma = 0
    for (var i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    }
    resto = (soma * 10) % 11

    if ((resto == 10) || (resto == 11))  resto = 0

    if (resto != parseInt(cpf.substring(10, 11) ) ){
        alert("Ops, seu cpf é invalido");
        CPFid.style.border = "red 3px solid";
    }


    
});

var dataVenc = document.getElementById('dataVencimentoCartao');
 
dataVenc.addEventListener('focusout', function(e) {
    if(dataVenc.value.indexOf('/') == -1){
        alert("Falta o / no campo Data de vencimento");
        dataVenc.style.border = "red 3px solid";
    }else{
        dataVenc.style.border = "green 3px solid";
    }
});
