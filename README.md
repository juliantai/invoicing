I want to build a time keeping app with a pdf invoicing feature. 

* allow users to login and create projects with an hourly rate

* under each project they should be able to start and stop a timer which creates a task

* on each task there should be a description field that users can fill out

* users should be able to move tasks up and down and all other crud functionality 

* users can bill their clients once they are done by sending an email that generates a pdf of the times. The tasks should now be moved from the projects into the related invoice.

* clients can respond back to the email, which should take them to a client portal where they can pay the invoice (probably just fake this)

* paid invoices should show up in user portal and clear the task list for project

* both users and clients should have the ability to view old invoices


### End points

* GET /login
* POST /login

* GET /projects
* POST /projects
* GET /projects/:id
* PUT /projects/:id
* DELETE /projects/:id


* GET /projects/:id/tasks
* POST /projects/:id/tasks
* PUT /projects/:id/tasks/:id
* DELETE /projects/:id/tasks/:id

* GET /projects/:id/invoices
* POST /projects/:id/invoices
* GET /projects/:id/invoices/:id
* PUT /projects/:id/invoices/:id
* POST /projects/:id/invoices/:id/bill
* DELETE /projects/:id/invoices/:id

* GET /client/login
* POST /client/login

* GET client/projects?pcode=32432232432
this should show paid and unpaid projects
* GET client/projects/:id/invoice
* POST client/projects/:id/invoice/pay

