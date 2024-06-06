function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg"; /* Aqui ele vai alterar o icone após clicar no botão */
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg"; /* Aqui ele vai alterar o icone após clicar no botão */
    }
}

const container = document.getElementById('container');
const cadastro = document.getElementById('cadastrobtn');
const escondido = document.getElementById('loginbtn');

cadastrobtn.addEventListener('click', ()=> {
    container.classList.add("active");
}) 

loginbtn.addEventListener('click', ()=> {
    container.classList.remove("active");
}) 

// Abaixo eu coloquei os códigos relacionados ao cadastro do usuário.

const form = document.getElementById('login-form');
const userInfo = document.getElementById('user-info');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Verificar se o e-mail e a senha estão corretos
  // Aqui você pode adicionar a lógica para verificar os dados do usuário
  // Estou tentando simular um login bem-sucedido com um e-mail específico
  if (email === 'usuario@example.com' && password === 'senha123') {
    const username = 'Usuário';
    // Exibir o nome do usuário logado
    userInfo.textContent = `Olá, ${username}!`;
    userInfo.classList.remove('hidden');
    // Esconder o formulário de login
    form.classList.add('hidden');
  } else {
    alert('E-mail ou senha incorretos. Tente novamente.');
  }
});