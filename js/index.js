const welcome_message =
	"Hello there, welcome to Froyo! Please enter a list of comma-separated froyo flavors below.\nHere are some suggestions: ";
const flavors = [
	"Vanilla",
	"Chocolate",
	"Dark Chocolate",
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
	acc[flavor] = parseInt(acc[flavor] || 0) + 1;
	return acc;
}, {});

console.log(flavor_count);

function create_page_elements() {
	const div_result = document.createElement("div");
	const div_result_h2 = document.createElement("h2");
	div_result_h2.innerText = "Flavor Counts: ";
	div_result.append(div_result_h2);

	for (const [flavor, count] of Object.entries(flavor_count)) {
		const p = document.createElement("p");
		p.textContent = `${flavor}: ${count}`;
		div_result.appendChild(p);
	}

	document.body.appendChild(div_result);
}

// put info to page
create_page_elements();
