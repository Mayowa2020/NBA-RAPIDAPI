## PROJECT

NBA RAPID API

## PROJECT DESCRIPTION

This project was created to consume the NBA API from RAPID API site (<https://rapidapi.com/theapiguy/api/free-nba/>).
It's expected to periodically check for the Game Results for each NBA Team and store in a Database.

The test version is expected to check every 10s and the production version once a minute. Only one team result should be fetched at each period, but each team should be checked, such that after 32 periods, every NBA team would have been retrieved.

In addition, the frontend provides a page that shows the last time the check was done, and how records are currently in the database.

## BUILT WITH

React - Frontend
NodeJs - Backend
MongoDB - Database

### GETTING STARTED

Open a terminal(Windows Command Prompt or PowerShell)

Create the main project folder “mern” i.e. mkdir mern and enter the directory, cd mern

Create another folder i.e. mkdir Frontend and enter into that directory: cd Frontend. Install React using create-react-app, a tool that installs all of the dependencies to build and run a full React.js application

Create the Backend Folder and cd into it.
Type "git init -y" and npm i express agenda axios concurrently cors dotenv morgan mongoose

### TO RUN THE APP

Frontend - npm run client
Backend - npm run server
Both Frontend and Backend concurrently - npm run dev

### THE REQUIRED ENDPOINTS

localhost:8000/api/getStats -Backend;
localhost:8000/api/getTotal -Backend;
localhost:3000 -Frontend

### DOCKERIZE THE APP

Getting Started with the Integration

First, create a Dockerfile for the server and the client. The Dockerfile essentially contains the build instructions to build the image.
In the client folder, create a file called Dockerfile without any extension.
We simply build our Frontend with this command: docker build -t react-app .
In the same way, we create a file called Dockerfile for the Backend Server.
We simply build our Backend with this command: docker build -t node-app .

“Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. To run our entire application together, i.e run all containers parallelly, we need to configure the docker-compose file.
In the main directory of the project, (outside the server/client) create a file named docker-compose.yml .
To create the build for the entire application, we run the following command: docker-compose build
We can start the multi-container system using the following simple command: docker-compose up

At last, we now open <http://localhost:3000> to see our React Frontend.
The backend server is live on <http://localhost:5000>
And MongoDB is running on <http://localhost:27017>

## Contact

Bukky Oyetimehin; <https://github.com/Mayowa2020>;
