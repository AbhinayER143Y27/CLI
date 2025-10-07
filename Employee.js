// Employee.js

class Employee {
    constructor(name, id) {
        if (!name || !id) {
            throw new Error("Employee must have a name and an ID.");
        }
        this.name = name;
        this.id = id;
    }

    // A clean method to display employee info for listing
    toString() {
        return `Name: ${this.name}, ID: ${this.id}`;
    }
}

module.exports = Employee;
