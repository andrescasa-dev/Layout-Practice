
document.addEventListener('click', (event)=>{
  const {target} = event;
  if(target.matches('.hamburger')){
    document.querySelector('.nav-content').classList.toggle('open')
  }
})