function logar(){
    var senha = document.getElementById('senha').value;

    if(senha ==  "29112021"){
        alert('Parabens!!\nVocê acertrou a senha\nSeja bem-vinda ao site Lunys');
        location.href = "./home.html"
    }else{
        alert('Erro!!\nSenha Incorreta, tente novamente')
    }
}