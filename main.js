/* Crear el array de objetos "Pizzas". Debemos crear 6 objetos como mínimo.
Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (debe ser una lista) y precio. */

let pizzas = [
	{
		id: 2,
		name: "Napolitana",
		ingredients: ["Salsa de tomate", "muzzarella", "tomate en rodajas", "morrón picado", "ajo", "perejil"],
		price: 1960,
	},
	{
		id: 9,
		name: "Calabresa",
		ingredients: ["Salsa de tomate", "muzzarella", "cantimpalo", "morrón picado"],
		price: 1980,
	},
	{
		id: 43,
		name: "Tres Quesos",
		ingredients: ["Salsa de tomate", "muzzarella", "provolone", "roquefort"],
		price: 2650,
	},
	{
		id: 29,
		name: "Gran Rulo",
		ingredients: [
			"Salsa de tomate",
			"muzzarella",
			"tomate en rodajas",
			"jamón",
			"cebolla",
			"huevo",
			"morrón",
			"provolone",
		],
		price: 2770,
	},
	{
		id: 20,
		name: "Canchera",
		ingredients: ["Salsa de tomate", "anchoas", "ajo", "aceite de oliva"],
		price: 1430,
	},
	{
		id: 37,
		name: "Fugazzeta",
		ingredients: ["Muzzarella", "cebolla", "provolone"],
		price: 1500,
	},
];

// Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:

// a) Las pizzas que tengan un id impar.
console.log("A) PIZZAS QUE TENGAN UN ID IMPAR ----------------");

/* pizzas.forEach(pizza => {
    if (pizza.id % 2 === 1){
        console.log(`La pizza ${pizza.name} tiene un id impar: ${pizza.id}.`);
    }
}) */

pizzas.filter((pizza) => {
	if (pizza.id % 2 === 1) {
		console.log(`La pizza ${pizza.name} tiene un id impar: ${pizza.id}.`);
	}
});

// b) ¿Hay alguna pizza que valga menos de $600? Imprimir en consola una respuesta que toda persona pueda entender: "La pizza X, tiene un valor de $XXXX”.
console.log("B) PIZZAS QUE VALGAN MENOS DE $600 ----------------");

pizzas.some((pizza) => {
	if (pizza.price < 600) console.log(`La pizza ${pizza.name} tiene un valor de $${pizza.price}.`);
	else if (pizzas.every((pizza) => pizza.price >= 600)) console.log("Ninguna pizza tiene valor menor a $600.");
});

// c) El nombre de cada pizza con su respectivo precio.
console.log("C) NOMBRE Y PRECIO DE CADA PIZZA ----------------");
//pizzas.forEach(pizza => console.log(`La pizza ${pizza.name} sale $${pizza.price}.`))

pizzas.forEach(({ name, price }) => console.log(`La pizza ${name} sale $${price}.`));

// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual).
// Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.
console.log("D) INGREDIENTES DE CADA PIZZA ----------------");

pizzas.forEach((pizza) => {
	pizza.ingredients.forEach((ingrediente) => console.log(`La pizza ${pizza.name} tiene: ${pizza.ingredients}.`));
});
