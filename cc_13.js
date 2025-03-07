// Task 2: Adding Employee Cards Dynamically

function addEmployee(name, position) {

    // Create a new div element
    const container = document.getElementById('employeeContainer'); // Get the container div
    const employee = document.createElement('div'); // Create a new div element
    employee.classList.add('employee-card'); // Add a class to the div

    // Create a new h3 element
    const cardName = document.createElement('h3'); // Create a new h3 element
    cardName.textContent = name; // Set the name of the h3 element

    // Create a new p element
    const cardPosition = document.createElement('p'); // Create a new p element
    cardPosition.textContent = position; // Set the position of the p elementq

    // Create a new button element
    const removeButton = document.createElement('button'); // Create a new button element
    removeButton.textContent = 'Remove Employee'; // Set the text of the button
    removeButton.classList.add('remove-Button'); // Add a class to the button

    // Add event listener to remove button
    removeButton.addEventListener('click', () => { // Add an event listener to the button
        container.removeChild(employee); // Remove the employee card when the button is clicked
    });

    // Append the elements to the container
    employee.appendChild(cardName); // Append the h3 element to the div
    employee.appendChild(cardPosition); // Append the p element to the div
    employee.appendChild(removeButton); // Append the button to the div

    container.appendChild(employee);// Append the div to the container
}
// Call the function to add employee cards
addEmployee('Alice Johnson', 'Manager at Google'); 
addEmployee('Bobby Brown', 'Developer at Microsoft');
addEmployee('Frank Smith', 'Designer at Facebook');


// Task 3: Converting NodeList to arrays for Bulk Updates

function addBoarderToAllEmployees() {
    const employeeCards = Array.from(document.querySelectorAll('.employee-card')); // Convert the NodeList to an array
    employeeCards.forEach(employee => { // updates each employee card
        employee.style.border = 'solid Hotpink'; // Add a pink border to each employee card
    });
}
// Call the function to add a border to all employee cards
addBoarderToAllEmployees(); // adds hot pink border to all employee cards

// adding a background color to all employee cards (extra personal task)
function addBackgroundToAllEmployees() {
    const employeeCards = Array.from(document.querySelectorAll('.employee-card')); // Convert the NodeList to an array
    employeeCards.forEach(employee => { // updates each employee card
        employee.style.backgroundColor = 'pink'; // Add a light blue background to each employee card
    });
}
// Call the function to add a pink background to all employee cards
addBackgroundToAllEmployees(); // adds pink background to all employee cards


// Task 4: Implementing Removal of Eployee Cards with Even Bubbling

function addEmployeeCard(name, position) {
    const container = document.getElementById('employeeContainer'); // Get the container div
    const employee = document.createElement('div'); // Create a new div element
    employee.classList.add('employee-card'); // Add a class to the div

    const cardName = document.createElement('h3'); // Create a new h3 element
    cardName.textContent = name; // Set the name of the h3 element

    const cardPosition = document.createElement('p'); // Create a new p element
    cardPosition.textContent = position; // Set the position of the p element

    const removeButton = document.createElement('button'); // Create a new button element
    removeButton.textContent = 'Remove Employee'; // Set the text of the button
    removeButton.classList.add('remove-Button'); // Add a class to the button

    removeButton.addEventListener('click', (event) => { // Add an event listener to the button
        event.stopPropagation(); // Stop the event from bubbling up
        console.log('Remove button was clicked', event.target); // Log the event target
        container.removeChild(employee); // Remove the employee card when the button is clicked
    });

    employee.appendChild(cardName); // Append the h3 element to the div
    employee.appendChild(cardPosition); // Append the p element to the div
    employee.appendChild(removeButton); // Append the button to the div

    container.appendChild(employee); // Append the div to the container
}

document.getElementById('employeeContainer').addEventListener('click', function(event) { // Add an event listener to the container
    console.log('Customer card was clicked', event.target); // Log the event target
});

// Task 5: Inline Editing of Employee Details

// Function to add an employee card
function addEmployee(name, position) {
    const container = document.getElementById("employeeContainer"); // Get the container div
    const card = document.createElement("div"); // Create a new div element
    card.classList.add("employee-card"); // Add a class to the div

    // Create a new h3 element
    const cardName = document.createElement("h3"); // Create a new h3 element
    cardName.textContent = name; // Set the name of the h3 element

    // Create a new p element
    const cardPosition = document.createElement("p"); // Create a new p element
    cardPosition.textContent = position; // Set the position of the p element

    // Create a new button element
    const removeButton = document.createElement("button"); // Create a new button element
    removeButton.textContent = "Remove"; // Set the text of the button
    removeButton.classList.add("remove-btn"); // Add a class to the button

    // Add event listener to remove button
    removeButton.onclick = function (event) {
        event.stopPropagation(); // Stop the event from bubbling up
        container.removeChild(card); // Remove the employee card when the button is clicked
    };

    // Add event listener to card
    card.appendChild(cardName); // Append the h3 element to the div
    card.appendChild(cardPosition); // Append the p element to the div
    card.appendChild(removeButton); // Append the button to the div

    // When the card is double clicked, enable editing
    card.addEventListener("dblclick", () => enableEditing(card, cardName, cardPosition)); // Add an event listener to the card when double clicked

    // Append the card to the container
    container.appendChild(card); // Append the div to the container
}

// Call the function to add employee cards
function enableEditing(card, cardName, cardPosition) {
    const nameInput = document.createElement("input"); // Create a new input element
    nameInput.value = cardName.textContent; // Set the value of the input element

    // Create a new input element
    const positionInput = document.createElement("input"); // Create a new input element
    positionInput.value = cardPosition.textContent; // Set the value of the input element

    // Create a new button element
    const saveButton = document.createElement("button"); // Create a new button element
    saveButton.textContent = "Save"; // Set the text of the button to "Save"
    saveButton.onclick = function () {
        cardName.textContent = nameInput.value; // Set the text content of the h3 element to the input value
        cardPosition.textContent = positionInput.value; // Set the text content of the p element to the input value
        card.replaceChild(cardName, nameInput); // Replace the input element with the h3 element
        card.replaceChild(cardPosition, positionInput); // Replace the input element with the p element
        card.removeChild(saveButton); // Remove the save button
    };

    // Replace the card content with input fields
    card.replaceChild(nameInput, cardName); // Replace the h3 element with the input element
    card.replaceChild(positionInput, cardPosition); // Replace the p element with the input element
    card.appendChild(saveButton); // Append the save button to the card
}
