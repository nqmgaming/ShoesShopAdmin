# Shoes Shop AdminJS Documentation

## About

This project is a web-based administration panel for a shoe shop. It is built using AdminJS, a modern JavaScript-based admin panel solution. The project is written in TypeScript and uses MongoDB as the database, with Mongoose as the ODM (Object Data Modeling) tool.

## Setup

Before you can run the project, you need to set up your development environment. Here are the steps:

1. **Install Node.js and npm**: You need to have Node.js and npm installed on your machine. You can download Node.js from the [official website](https://nodejs.org/). npm is included with Node.js.

2. **Clone the project**: Clone the project from the GitHub repository to your local machine.

3. **Install dependencies**: Navigate to the project directory in your terminal and run `npm install` to install the project dependencies.

4. **Set up environment variables**: Create a `.env` file in the root directory of the project. This file should contain the following variables:

```dotenv
PORT=
MONGO_URI=
```

Replace `<username>` and `<password>` with your MongoDB username and password.

## Running the Project

To run the project, use the following command in your terminal:

```bash
npm run dev
```

This command starts the server using `ts-node`, which allows you to run TypeScript code without having to compile it first.

The server will start on the port specified in your `.env` file (default is 3000). You can access the admin panel by navigating to `http://localhost:<PORT>/admin` in your web browser.

## Contributing

Contributions to the project are welcome. Please ensure that you follow the existing code style and run tests before submitting a pull request.

## License

This project is licensed under the MIT license.
