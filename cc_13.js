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

    

