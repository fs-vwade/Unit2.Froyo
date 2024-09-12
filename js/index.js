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
const random_flavors = function (e) {
	return Array(Math.round(4 * (1 + Math.random() * 2))) // between 4 and 12 items
		.fill()
		.map((e) => {
			// create a randomized list of default flavors
			const rand_idx = Math.floor(Math.random() * flavors.length);
			return flavors[rand_idx];
		})
		.join(", ");
};

const user_input = prompt(welcome_message, random_flavors())
	.split(",")
	.map((e) => e.trim());

console.log("User input (raw)", user_input);

function count_orders(list) {
	const orders = {};

	/** logic for counting orders */
	for (let i = 0; i < list.length; i++) {
		const name = list[i];
		orders[name] = parseInt(orders[name] || 0) + 1;
	}

	return orders;
}

// the Object which will hold the number of orders for each flavor
const flavor_count = count_orders(user_input);

console.log("Order counts", flavor_count);

function create_page_elements() {
	const div_form = document.createElement("div");
	const form = document.createElement("form");

	const form_input = document.createElement("input");
	form_input.setAttribute("type", "text");
	form_input.setAttribute("placeholder", "Enter as many flavors as you want");
	form_input.value = user_input.join(", ");

	// Submit button
	const form_button = document.createElement("button");
	form_button.setAttribute("type", "submit");
	form_button.textContent = "Submit Order";

	form.append(form_input, form_button);
	div_form.append(form);

	form.addEventListener("submit", (event) => {
		event.preventDefault();

		const user_input = form_input.value.split(",").map((e) => e.trim());

		if (0 == user_input.length) {
			if (confirm("Would you like a few random suggestions?")) {
				form_input.value = random_flavors();
			}
		}
		if (0 < user_input.length) {
			div_result_container.innerHTML = "";

			const flavor_count = count_orders(user_input);

			for (const [flavor, count] of Object.entries(flavor_count)) {
				const p = document.createElement("p");
				p.innerText = `${flavor}: ${count}`;
				div_result_container.append(p);
			}
		}
	});

	const div_result = document.createElement("div");
	const div_result_h2 = document.createElement("h2");
	const div_result_container = document.createElement("div");
	div_result_h2.innerText = "Flavor Counts: ";
	div_result.append(form, div_result_h2, div_result_container);

	div_result_container.id = "orders";

	for (const [flavor, count] of Object.entries(flavor_count)) {
		const p = document.createElement("p");
		p.textContent = `${flavor}: ${count}`;
		div_result_container.appendChild(p);
	}

	const body = document.createElement("body");

	body.appendChild(div_result);
	document.body = body;
}

// put info to page
create_page_elements();
