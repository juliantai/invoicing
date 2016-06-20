var tasksData = require('./tasks');

var invoices = [
  {
    id: 1,
    project_id: 1,
    client_id: 1,
    client_address: "123 Fake St.\nSan Fakeroni, CA 99999",
    address: "555 Buena Vista Ave. \nBelmont, CA 99900",
    tasks: tasksData
  }
]

module.exports = invoices;
