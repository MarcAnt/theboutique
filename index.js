document.addEventListener('DOMContentLoaded',function(){

  //Animaciones index

  let contentPrincipal = document.getElementById('contentPrincipal'); 
  if(contentPrincipal !==  null ) {
    TweenMax.from(contentPrincipal.children[0], 2, {opacity: 0, scale: 0, delay: .5} )
    TweenMax.from(contentPrincipal.children[1], 1, {opacity: 0, y: 100} )
    TweenMax.from(contentPrincipal.children[2], 1.5, {opacity: 0, y: 200} )
    TweenMax.from(contentPrincipal.children[3], 2, {opacity: 0, y: 300} )

  }


  //Tooltip de registro
  tippy('.button', {
    content: `<form>

                <label for="usuario">Usuario</label>
                <input type="text" id="usuario">

                <label for="password">Contraseña</label>
                <input type="text" id="password">

                <input type="submit" value="Iniciar">

                <a href="recuperar.html">Recuperar Contraseña*</a>
              </form>`,
    interactive: true,
    arrow: true,
    animation: 'scale',
    theme: 'tomato', 

  })


  //Modal
  let modal = document.getElementById('modal'), 
  boxModal = document.getElementById('box-modal'),
  btnClose = document.getElementById('close'),
  openModal = document.getElementById('btn-cartera')

  if(openModal !== null) {
    
    btnClose.addEventListener('click', e => {
      
      TweenMax.to(modal, .5, {opacity: 0, scale: 0})
      TweenMax.to(boxModal, .5, {opacity: 0, scale: 0})
      TweenMax.to(boxModal.children[1], .5, {opacity: 0, scale: 0})
      document.body.style.overflowY = 'scroll'
    })
    
    
    openModal.addEventListener('click', e => {
      e.preventDefault()
      console.log(openModal)
     
      TweenMax.to(modal, 1, {opacity: 1, scale: 1})
      TweenMax.to(boxModal, 1.5, {opacity: 1, scale: 1})
      TweenMax.to(boxModal.children[1], 2, {opacity: 1, scale: 1})
  
      modal.style.visibility = 'visible'
  
      document.body.style.overflowY = 'hidden'
    })
  }

    
});