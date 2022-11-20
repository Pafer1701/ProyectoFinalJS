const clickButton = document.querySelectorAll('.btn-primary')
const myOrder = document.querySelector('.cart')
let carrito = []

clickButton.forEach(btn =>{
     btn.addEventListener('click', addCarrito)
 })

 function addCarrito(e){
     const button = e.target
     const item = button.closest('.card')
    const itemTitle = item.querySelector('.card-title').textContent
     const itemImage = item.querySelector('.card-img-top').src
     const itemPrice = item.querySelector('.card-price').textContent
     const newItem = {
         image: itemImage,
         title: itemTitle,
         price: itemPrice,
         cantidad: 1
     }
     addItemCarrito(newItem)
 }

 function addItemCarrito(newItem){
     carrito.push(newItem)
     renderCarrito()
 }

 function renderCarrito(){
    myOrder.innerHTML = ''
     carrito.map(item =>{
         const div = document.createElement('div')
         div.className = "shopping-cart"
         const content = `
                     <figure>
                         <img src=${item.image} alt="bike">
                     </figure>
                     <p>${item.title}</p>
                     <p>${item.price}</p>

         `
         div.innerHTML = content
         myOrder.append(div)
     })
     
     console.log(myOrder)
 }
 function ocultar(){
    $('#carrito').hide()
 }
 function mostrar(){
    $('#carrito').show()
    $('#navbar').hide()
    $('#navbar-ul').hide()
    $('#container').hide()
    $('#container-col').hide()
    $('#title').hide()
    $('#title-2').hide()
    $('#container-body').hide()
    $('#container-2').hide()
    $('#footer-1').hide()
    $('#footer-2').hide()
 }