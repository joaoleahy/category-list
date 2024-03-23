# Fullstack Category Management App

Welcome to the Category Management App repository! This project is a full-stack application built with Vue.js, Node.js, and TypeScript. Below you'll find all the necessary instructions to get the project up and running on your machine.

![crud-categories1](https://github.com/joaoleahy/category-list/assets/86070920/cb6cab4c-c914-4ebb-b18a-b66cf8c06ccf)

![crud-categories2](https://github.com/joaoleahy/category-list/assets/86070920/2cdf82dc-b7a0-43a4-8ee1-79dceedf0984)

![crud-categories3](https://github.com/joaoleahy/category-list/assets/86070920/2267ecc4-b57d-4f34-a982-fe01260ea241)

![crud-categories4](https://github.com/joaoleahy/category-list/assets/86070920/6bf2712d-8a27-4559-9d0b-f50dde394872)



## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (LTS version recommended)
- npm (comes with Node.js)
- Git
- PostgreSQL driver

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Cloning the Repository

Start by cloning the repository to your local machine:

```bash
git clone git@github.com:joaoleahy/category-list.git
cd category-list
```

### Installing Dependencies

Navigate to both the `frontend` and `backend` directories in separate terminal windows and install the required npm packages:

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd backend
npm install
```

### Configuring the Environment

Duplicate the `.env.example` files in both `frontend` and `backend` directories and rename them to `.env`. Adjust the variables to suit your environment.

### Running the Backend

Navigate to the `backend` directory and start the server:

```bash
npm start
```

The server should now be running on [http://localhost:3000](http://localhost:3000).

### Running the Frontend

Open a new terminal window, navigate to the `frontend` directory and start the Vue app:

```bash
npm run serve
```

The app should now be running on [http://localhost:5173](http://localhost:5173).

## Running Tests

To run the tests, use the following commands:

```bash
# Run backend tests
cd backend
npm test
```

![image](https://github.com/joaoleahy/category-list/assets/86070920/97823901-f137-458b-9e42-78a281bc3736)



## Built With

- [Vue.js](https://vuejs.org/) - The Progressive JavaScript Framework for building user interfaces.
- [Node.js](https://nodejs.org/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.
- [TypeScript](https://www.typescriptlang.org/) - An open-source language which builds on JavaScript by adding static type definitions.
- [PostgreSQL](https://www.postgresql.org/) - An advanced open-source object-relational database management system.
- [Knex.js](http://knexjs.org/) - A SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift.
- [Jest](https://jestjs.io/) - A delightful JavaScript Testing Framework with a focus on simplicity.
