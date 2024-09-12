const user_input = prompt(
	"Hello there, welcome to Froyo! Please enter a list of comma-separated froyo flavors below.",
	"vanilla,vanilla,vanilla,strawberry,coffee,coffee"
).split(",");

console.log(user_input);

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
