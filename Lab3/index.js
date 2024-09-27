var http = require("http");
const employees = require("./Employee");

console.log("Lab 03 - NodeJs");

const port = process.env.PORT || 8081;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "GET") {
    res.end(JSON.stringify({ error: http.STATUS_CODES[405] }));
  } else {
    if (req.url === "/") {
      // Display's a welcome message
      res.end("<h1>Welcome to Lab Exercise 03</h1>");
    } else if (req.url === "/employee") {
      // Display's each details for employees
      res.end(JSON.stringify(employees));
    } else if (req.url === "/employee/names") {
      // Display's each employee names
      const employeeNames = employees
        .map((emp) => `${emp.firstName} ${emp.lastName}`)
        .sort(); // This sorts it alphabetically
      res.end(JSON.stringify(employeeNames));
    } else if (req.url === "/employee/totalsalary") {
      // Calculate's total employee salary for all
      const totalSalary = employees.reduce((sum, emp) => sum + emp.Salary, 0);
      res.end(JSON.stringify({ total_salary: totalSalary }));
    } else {
      res.end(JSON.stringify({ error: http.STATUS_CODES[404] }));
    }
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
