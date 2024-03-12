# Vite React Redux App

## Description

This project is a React Redux application built with Vite.js, a next-generation frontend tooling system. It utilizes Redux Toolkit for state management.

## Integrating Redux

In this project, Redux is seamlessly integrated into the React application to manage global state. The heart of this integration lies in the use of the `Provider` component from `react-redux`. This component wraps the entire application, ensuring that all components have access to the Redux store.

### Provider Setup

The `Provider` component is imported from `react-redux` and wrapped around the top-level components of the application. This includes components like `Navbar` and `UserList`, ensuring that they can access the Redux store and its state.

### Redux Store Configuration

The Redux store is configured using `configureStore` from `@reduxjs/toolkit`. The store is set up to include the `users` reducer, allowing for centralized management of user-related state throughout the application.

### Usage

With Redux integrated and the store configured, components can interact with the Redux store by dispatching actions and accessing state. This enables seamless management of application-wide state and facilitates data flow between components.

## Installation

To install and set up the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/RogeMateos/Toolkit-my-project.git`
2. Navigate into the project directory: `cd vite-project`
3. Install dependencies: `npm install`

## Dependencies

- **@reduxjs/toolkit**: ^2.2.1
- **eslint**: ^8.57.0
- **prettier**: ^3.2.5

## Configuration

- ESLint is configured to enforce code quality and style rules.
- Prettier is configured for code formatting consistency.

## Usage

To start the development server, run:

- `npm install`
- `npm run dev`
