# About the project

This is a monorepo for a simple task tracker application. It contains the following projects:
- `api` - a PHP Laravel REST API for the task tracker
- `web` - a Vue 3 web application for the task tracker consuming the API

## Prerequisites
1. PHP > 8.0
2. MySQL
3. Node.js > 16.0

## Installation
1. Clone the repository to a favorite directory
2. Navigate to the `api` directory and run `composer install`
3. Navigate to the `web` directory and run `npm install`


## Running the application
1. Navigate to the `api` directory and run `php artisan serve`
2. Navigate to the `web` directory and run `npm run serve`


## But, we said it is a monorepo!
Simply run `npm start` in the root directory to run both the API and the web application at the same time.