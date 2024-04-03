const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const pizzaInput = document.getElementById('userInput');
const listPizza = document.getElementById('card-pizza');
const valuePizza = document.getElementById('pizzas')
const errorMensage = document.getElementById('mensagge')



let idPizzas = (input) => { 
  const id = parseInt(input);
  const pizzaSelect = pizzas.find(pizza => pizza.id === id);  
  return pizzaSelect
};


let addPizza = (pizza) => {
   errorMensage.innerHTML = '';
    listPizza.innerHTML = `<div class="card-contariner">
    <label for="Pizza"></label>
    <img src=${pizza.imagen}>
      <p>
      ${pizza.nombre}
      </p>
      <p>
        $ ${pizza.precio}
      </p>
  </div>`
}

const init = () => {
  const ultimaPizza = JSON.parse(localStorage.getItem('ultimaPizza'));
  if (ultimaPizza) {
    addPizza(idPizzas(ultimaPizza));
  }

  pizzaInput.addEventListener('submit',(e)=>{
    e.preventDefault();
    const pizzaId = valuePizza.value
    if (pizzaId === '') {
      errorMensage.innerHTML = `<p>Complete el campo<p/>`;
    } else if(pizzaId > pizzas.length){
      errorMensage.innerHTML = `<p>Pizza inexistente<p/>`
    } else {
      localStorage.setItem('ultimaPizza', JSON.stringify(pizzaId));
      addPizza(idPizzas(pizzaId));
    }
  })
};

init()