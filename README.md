# node_project
project  de node.js 


## **Instructions**  

This is a fully running application with afrontend, backend, database connection, and testing, complete with registration andauthentication.

### To set up the application :

Backend Setup (Express.js)
>install necessary dependencies,
**npm install express mongoose bcryptjs jsonwebtoken**

>install dev dependencies for testing,
**npm install --save-dev jest mocha chai supertest**

Frontend Setup (React.js)
>install necessary dependencies,
**npm install axios react-router-dom**


### To run the application :

- Start MongoD
- Start Backend Server
- Start Frontend Development Server
- Start the frontend development server by executing npm start.


### Frameworks

>Frontend :
React.js

>Backend :
Express.js

>Test :
Jest + Mocha + Chai + Cypress


## Steps to execute the tests

Execute your tests depending on the test framework used:

1. For Jest unit tests: npm test
2. For Mocha integration tests: npm run test-integration
3. For Cypress end-to-end tests:

    - Start the backend server (node src/server.js).
    - Navigate to the frontend directory (my-web-app-client) and start the frontend server (npm start).
    - Open a new terminal window and navigate to the frontend directory (my-web-app-client).
    - Execute Cypress tests by running npx cypress open.
