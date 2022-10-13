
document.addEventListener('click', (event)=>{
  const {target} = event;
  if(target.matches('.hamburger')){
    document.querySelector('.nav').classList.add('open')
  }
  if(target.matches('.nav__close')){
    document.querySelector('.nav').classList.remove('open')
  }
})