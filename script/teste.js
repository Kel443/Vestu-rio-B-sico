const erro = document.getElementById('header')
const botao = document.getElementById('submit')
const email = document.getElementById('email')
const mail = email.value
  botao.addEventListener("click", function(){
    if(email.value.length === 0){
      erro.innerHTML = "Digite um emali"
    }else{
      erro.innerHTML = 'email valido'
    }
  })
    

