// EmployeeManager.js

const Employee = require('./Employee'); // Import the blueprint

class EmployeeManager {
    constructor() {
        // The core data structure: an Array of Employee objects
        this.employees = [
            // Initialize with the data shown in your screenshot
            new Employee('Alice', 'E101'),
            new Employee('Bob', 'E102'),
            new Employee('Charlie', 'E103')
        ];
    }

    addEmployee(name, id) {
        // STRESS TEST 1: Check for duplicate ID before adding
        if (this.employees.some(emp => emp.id === id)) {
            return { success: false, message: `Error: Employee ID ${id} already exists.` };
        }
        
        try {
            const newEmployee = new Employee(name, id);
            this.employees.push(newEmployee);
            return { success: true, message: `Employee ${name} (ID: ${id}) added successfully.` };
        } catch (e) {
            return { success: false, message: e.message };
        }
    }

    listEmployees() {
        if (this.employees.length === 0) {
            return "Employee List is empty.";
        }
        
        // Map the array to a clean, numbered list
        return this.employees.map((emp, index) => 
            `${index + 1}. ${emp.toString()}`
        ).join('\n');
    }

    removeEmployee(id) {
        const initialLength = this.employees.length;
        
        // Find the employee to get their name for the success message
        const employeeToRemove = this.employees.find(emp => emp.id === id);
        
        // Filter the array to remove the employee with the matching ID
        this.employees = this.employees.filter(emp => emp.id !== id);
        
        // STRESS TEST 2: Verify if the removal actually happened
        if (this.employees.length < initialLength) {
            return { 
                success: true, 
                message: `Employee ${employeeToRemove.name} (ID: ${id}) removed successfully.` 
            };
        } else {
            return { success: false, message: `Error: Employee ID ${id} not found.` };
        }
    }
}

module.exports = EmployeeManager;
