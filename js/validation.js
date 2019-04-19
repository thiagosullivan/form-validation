var form = document.getElementById('form-contato');

if (form.addEventListener){
    form.addEventListener("submit", validaCadastro);
} else if(form.attachEvent){
    form.attachEvent("onsubmit", validaCadastro);    
}

function validaCadastro(evt){
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var sexo = document.getElementById('sexo');
    var senha = document.getElementById('senha');
    var senha2 = document.getElementById('senha2');
    var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	var contErro = 0;

    var caixa_nome = document.querySelector('.msg-nome');
    if(nome.value == ""){
        caixa_nome.innerHTML = 'Favor preencher o nome';
        caixa_nome.style.display = 'block';
        contErro += 1;
    }else {
        caixa_nome.style.display = 'none';
    }

    var caixa_email = document.querySelector('.msg-email');
    if(email.value == ""){
        caixa_email.innerHTML = 'Favor preencher o e-mail';
        caixa_email.style.display = 'block';
        contErro += 1;
    }else if (filtro.test(email.value)){
        caixa_email.style.display = 'none';
    }else {
        caixa_email.innerHTML = 'Formato inválido de e-mail';
        caixa_email.style.display = 'block';
        contErro += 1;
    }

    var caixa_sexo = document.querySelector('.msg-sexo');
    if(sexo.value == ""){
        caixa_sexo.innerHTML = 'Favor preencher o sexo';
        caixa_sexo.style.display = 'block';
        contErro += 1;
    }else {
        caixa_sexo.style.display = 'none';
    }

    var caixa_senha = document.querySelector('.msg-senha')
    if (senha.value == ""){
        caixa_senha.innerHTML = 'Favor preencher a senha';
        caixa_senha.style.display = 'block';
        contErro += 1;
    }else if(senha.value.length < 6) {
        caixa_senha.innerHTML = 'A senha deve conter no mínimo 6 caracteres';
        caixa_senha.style.display = 'block';
        contErro += 1;
    }else {
        caixa_senha.style.display = 'none';
    }

    var caixa_senha2 = document.querySelector('.msg-senha2')
    if (senha2.value == ""){
        caixa_senha2.innerHTML = 'Favor preencher a senha';
        caixa_senha2.style.display = 'block';
        contErro += 1;
    }else if(senha2.value.length < 6) {
        caixa_senha2.innerHTML = 'A senha deve conter no mínimo 6 caracteres';
        caixa_senha2.style.display = 'block';
        contErro += 1;
    }else {
        caixa_senha2.style.display = 'none';
    }

    if(senha.value !="" && senha2.value !="" && senha.value != senha2.value){
        caixa_senha2.innerHTML = 'Por favor repita a primeira senha';
        contErro += 1;
    }

    if(contErro > 0){
        evt.preventDefault();
    }
    
}
