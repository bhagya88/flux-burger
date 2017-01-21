# Flux Burger

### Overview

A full stack  CRUD application here customer can order burgers and drinks. When the customer devours the burger by clicking a button, it gets added to the devoured list. This is a react-flux version of the Sequelized Burger application that I developed earlier.

### Demo
[Check to see the demo]()

### Technologies used

* Client - React, Flux
* Server - Node.js, Express framework, Sequelize ORM
* Database - MySql
* Npm modules used - express, mysql, express-handlebars, body-parser, path, method-overide

### Design

* React Component Design.
* Flux architecture.
* MVC design pattern and Server side rendering are used. 
* Parent - Child association/ relationship is used in database design.
* Model - sequelize models are created to model the database. 
* Views- Views are created using express-handlebars, HTML, CSS
* Controller - Requests coming to the server are handled by the controller/router which in turn communicates with model to get data and passes it to the views. 

### Challenges faced
* How to apply the flux architecture?

### Solution found
* Reading the documentation and looking code samples help understand apply the flux architecture to create and maintain the state of the app.

### How it works

* Sequelized burger is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

* Then the user gets can order the drink of his for each burger.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* The app will store every burger in a database, whether devoured or not.


##### Developed by Bhagya
