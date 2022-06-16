
const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(event){
  if(event.type==='touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('ativar');
  const ativar = nav.classList.contains('ativar')
  event.currentTarget.setAttribute('aria-expanded', ativar);
  if (ativar){ event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
}
else{
  event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
}
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);