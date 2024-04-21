// Problem 1: Create JSON for each employee
const employees = [
    { firstName: "Sam", department: "Tech", designation: "Manager", salary: 40000, raiseEligible: true },
    { firstName: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raiseEligible: true },
    { firstName: "Bill", department: "HR", designation: "Executive", salary: 21200, raiseEligible: false }
];
console.log("Problem 1:", employees);

// Problem 2: Create JSON for the company
const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};
console.log("Problem 2:", company);

// Problem 3: Add a new employee to the company
company.employees.push({ firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false });
console.log("Problem 3:", company.employees);

// Problem 4: Calculate the total salary for all company employees
const totalSalary = company.employees.reduce((acc, emp) => acc + emp.salary, 0);
console.log("Problem 4: Total Salary =", totalSalary);

// Problem 5: It's raise time
function updateSalaries(employees) {
    employees.forEach(emp => {
        if (emp.raiseEligible) {
            emp.salary = emp.salary * 1.10; // Increase salary by 10%
            emp.raiseEligible = false; // Set eligibility to false
        }
    });
}
updateSalaries(company.employees);
console.log("Problem 5:", company.employees);

// Problem 6: Working from home update
const wfhEmployees = ['Anna', 'Sam'];
company.employees.forEach(emp => {
    emp.wfh = wfhEmployees.includes(emp.firstName);
});
console.log("Problem 6:", company.employees);
