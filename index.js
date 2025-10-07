// index.js

const readline = require('readline');
const EmployeeManager = require('./EmployeeManager');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const manager = new EmployeeManager();

// Function to display the menu
function displayMenu() {
    console.log('\nEmployee Management System');
    console.log('1. Add Employee');
    console.log('2. List Employees');
    console.log('3. Remove Employee');
    console.log('4. Exit');
}

// Main function to run the application
function runCLI() {
    displayMenu();
    
    rl.question('Enter your choice: ', (choice) => {
        // Convert input to a number for reliable comparison
        const option = parseInt(choice.trim()); 

        switch (option) {
            case 1:
                handleAddEmployee();
                break;
            case 2:
                handleListEmployees();
                break;
            case 3:
                handleRemoveEmployee();
                break;
            case 4:
                console.log('Exiting Employee Management System. Goodbye!');
                rl.close();
                break;
            default:
                console.log('Invalid choice. Please enter a number between 1 and 4.');
                runCLI();
                break;
        }
    });
}

// --- Handlers for Menu Options ---

function handleListEmployees() {
    console.log('\nEmployee List:');
    console.log(manager.listEmployees());
    runCLI();
}

function handleAddEmployee() {
    rl.question('Enter employee name: ', (name) => {
        rl.question('Enter employee ID: ', (id) => {
            const result = manager.addEmployee(name.trim(), id.trim().toUpperCase());
            console.log(result.message);
            runCLI();
        });
    });
}

function handleRemoveEmployee() {
    rl.question('Enter employee ID to remove: ', (id) => {
        const result = manager.removeEmployee(id.trim().toUpperCase());
        console.log(result.message);
        runCLI();
    });
}

// Start the application
runCLI();
