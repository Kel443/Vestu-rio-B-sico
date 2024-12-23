
  let bot = document.getElementById('email')
  let erro = document.getElementById('img')
  let certo = document.getElementById('img2')
  let error = document.getElementById("error")

  function enter(){
    if(bot.value == 0){
      error.innerHTML = 'Digite um email'
      erro.style.display = 'block'
      certo.style.display = 'none'
      error.style.color = '#f96262' 
   }else if(!bot.checkValidity()){
      error.innerHTML = 'Email invalido!'
      res.style.color = '#f96262'
      erro.style.display = 'block'
      erro.style.display = 'block'
   }else{
      error.innerHTML = 'Email Valido'
      erro.style.display = 'none'
      certo.style.display = 'block'
      error.style.color = 'green'
   }
}