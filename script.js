function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if( login == "admin" && senha == "admin"){
        alert('sucesso')
    }
    else{
        alert('Usuario ou senha incorretos')
    }
}


