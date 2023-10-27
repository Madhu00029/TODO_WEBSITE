# Todo List Web Application

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## How to Start Web Application
1. Clone this repository.
2.  Go to the cloned folder on terminal and run command 'npm i'
3.  Run 'npm start'

## Introduction

This web application is a Todo List manager with user authentication features. Users can sign up for an account, log in, and manage their tasks. The application uses local storage to simulate user accounts.

## Authentication Flow

### User Registration (Signup)

1. Users navigate to the registration page.
2. They fill out a registration form with a username,emailID, DOB and password.
3. Upon submission, the application checks if the emailID is available.
4. If the username is available, the application stores the user's credentials in local storage.
5. Users are now registered and can proceed to log in.

### User Login

1. Users navigate to the login page.
2. They provide their emailID and password.
3. The application checks the entered credentials against the stored user data in local storage.
4. If the credentials match, the user is authenticated and gains access to the Todo List.

### Authentication State

1. The application manages user authentication state using React state.
2. It keeps track of whether a user is authenticated or not.
3. Protected routes are implemented to ensure that only authenticated users can access the Todo List.

## Task Management

1. Users can create new tasks by entering a task description and clicking the "add" button.
2. Tasks are associated with the logged-in user and are stored in local storage.
3. Users can edit, mark tasks as completed, and delete tasks. These actions update the tasks in local storage.
4. Users can also delete all tasks as well.

## Logout

1. Users can log out of their accounts by clicking the "Log Out" button.
2. This action clears the user's data from local storage and logs them out.

