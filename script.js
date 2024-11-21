// Smoothie class definition
class Smoothie {
    constructor(name, base, fruits, toppings) {
        this.name = name;
        this.base = base;
        this.fruits = fruits;
        this.toppings = toppings;
    }

    getDescription() {
        return `
            <p><strong>Name:</strong> ${this.name}</p>
            <p><strong>Base:</strong> ${this.base}</p>
            <p><strong>Fruits:</strong> ${this.fruits.length ? this.fruits.join(', ') : 'None selected'}</p>
            <p><strong>Toppings:</strong> ${this.toppings.length ? this.toppings.join(', ') : 'None selected'}</p>
        `;
    }
}

// Array to hold selected fruits
const selectedFruits = [];

// Event listener for fruit buttons
document.querySelectorAll('.fruit-button').forEach(button => {
    button.addEventListener('click', function () {
        const fruit = this.getAttribute('data-fruit');
        if (selectedFruits.includes(fruit)) {
            // Remove fruit if already selected
            selectedFruits.splice(selectedFruits.indexOf(fruit), 1);
            this.classList.remove('selected');
        } else {
            // Add fruit to selected list
            selectedFruits.push(fruit);
            this.classList.add('selected');
        }
    });
});

// Event listener for form submission
document.getElementById('smoothieForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('customerName').value;
    const base = document.getElementById('smoothieBase').value;
    const toppings = Array.from(document.getElementById('toppings').selectedOptions).map(option => option.value);

    // Create Smoothie object
    const smoothie = new Smoothie(name, base, selectedFruits, toppings);

    // Display summary
    document.getElementById('summary').innerHTML = smoothie.getDescription();
});
