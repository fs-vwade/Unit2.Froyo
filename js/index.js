const welcome_message =
	"Hello there, welcome to Froyo! Please enter a list of comma-separated froyo flavors below.\nHere are some suggestions: ";
const flavors = [
	"Vanilla",
	"Chocolate",
	"Strawberry",
	"Coffee",
	"Mango",
	"Green Tea",
	"Blueberry",
	"Peach",
	"Cookies and Cream",
	"Pistachio",
	"Salted Caramel",
	"Mint Chocolate Chip",
	"Banana",
	"Coconut",
	"Raspberry",
];

const user_input = prompt(
	welcome_message,
	// create a randomized list of default flavors
	Array(5 + Math.round(Math.random() * 3))
		.fill()
		.map((e) => {
			return flavors[Math.floor(Math.random() * flavors.length)];
		})
		.join(", ")
)
	.split(",")
	.map((e) => e.trim());

console.log(user_input);

// the Object which will hold the number of orders for each flavor
const flavor_count = user_input.reduce((acc, flavor) => {
	acc[flavor] = (acc[flavor] || 0) + 1;
	return acc;
}, {});

console.log(flavor_count);

const div_result = document.createElement("div");
div_result.innerHTML = "<h2>Flavor Counts:</h2>";

for (const [flavor, count] of Object.entries(flavor_count)) {
	const p = document.createElement("p");
	p.textContent = `${flavor}: ${count}`;
	div_result.appendChild(p);
}

document.body.appendChild(div_result);
