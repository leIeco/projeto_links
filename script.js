function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
   
  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')){
   img.setAttribute('src', './assets/avatar-light_lele.png')
   img.setAttribute(
     "alt",
     "Foto do Carinha sorrindo, usando óculos escuros, sem camisa, barba e com céu azul ao fundo"
   )
  } else {
   img.setAttribute('src', './assets/avatar_lele.png')
   img.setAttribute(
     "alt",
     "Foto do Carinha sorrindo, usando óculos escuros, camisa vermelha, barba e com uma floresta ao fundo"
   )
   
  }
  


}