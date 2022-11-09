'use strict';

const body = document.querySelector("body")
const cards = document.getElementById("add")
const AddCar = document.getElementById("pro")
const pcar = document.getElementById("card")
const num = document.getElementById("carrito")
const buttom = document.getElementsByClassName("add")
const comprar = document.getElementById("comprar")
const desplegar = document.getElementById("nav")
const root = document.querySelector(':root');
const sto = document.getElementById("stock")





let pcto = [{ 
id: "A1",
name: "playera",
price: 450,
img:"img/featured1.png",
stock: 5
},

 { 
  id: "A2",
  name: "buso",
  price: 500,
  img:"img/featured2.png",
  stock: 4
  },
  

 { 
  id: "A3",
  name: "campera",
  price: 550,
  img:"img/featured3.png",
  stock: 3
  }
  ]


 

let cart = []
let s = 0
let i = 0
let precio = 0
let cont = 0
let despcont = 1



desplegar.addEventListener("click",function desplegar_carrito (e) {
  
        if (e.target.classList.contains("boton_carrito") && despcont == 1 ) {
         despcont = 0
          root.style.setProperty('--comprar', 'flex');
          root.style.setProperty('--botton-comprar', 'green');
        } else if (despcont !== 1) {
          root.style.setProperty('--comprar', 'none');
          root.style.setProperty('--botton-comprar', 'blue');
          despcont = 1
        } 
  
})



comprar.addEventListener("click",function (e) {
    
  if (e.target.classList.contains("comp_boton")) {
   
    document.getElementById('scroll_p').innerHTML = "";
      window.alert("gracias por su compra")
      document.getElementById('total').innerHTML = ""
      num.textContent = ""
      s = 0
  }

})


AddCar.addEventListener("click", function (e) { 

   /*cart.push(pcto[i]);*/
 i= e.target.dataset.prod 
if (e.target.classList.contains("add") && pcto[i].stock > 0) { 
  
  s ++

  document.querySelector("#card").getAttribute("precio")
 
    pcto[i].stock -= 1
    precio += pcto[i].price
    document.getElementById('scroll_p').innerHTML += ` <div id="agregado">
  <p class="carn"> ${pcto[i].name} </p> 
  <p class="carp" > $  ${pcto[i].price} </p>
  <img class="carimg" src="${pcto[i].img} " alt="producto">  
  <button class="restar_compra">-</button>
  <button class="sumar_compra">+</button>  </div> `;
console.log(i)

 num.textContent = (s)
     document.getElementById('total').innerHTML = precio
}



} )


pcar.addEventListener("click", function(e) {  sto.textContent = (pcto[i].stock)})

/*function prueba () {
   document.body.style.backgroundColor = "red"
   cart.push(playera)
 
}*/




/*body.addEventListener("click", function name() {
  
  s ++
  console.log(s)
} )*/


  

 /*document.getElementById('pro').innerHTML +=` <article id="card"> 
  <div class="product_img"><img src="img/featured3.png" alt=""></div> 
  <!--=== article name =====--> 
   <div class="article"> <strong>Playera</strong>  </div>
   <!--=== price ====--> 
   <p class="price"> <strong>$550</strong></p>     
   <!--=== Button add to car ===--> 
    <div class="add_to_trolley"><button class="add"><div class="product_A3"></div>+</button></div> 
</article>  `*/
