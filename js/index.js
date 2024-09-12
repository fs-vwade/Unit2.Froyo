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
