# api-server

HTTP server for practice

## Deployed links:

- [Heroku Link](https://api-server-bc.herokuapp.com/vehicles)

## UML

UML In Progess

## Installation

- Clone from this repo `git clone https://github.com/bradyjcamp/api-server.git`
- cd into api-server
- `npm install`
  - dotenv
  - express
  - nodemon
  - jest
  - supertest
  - sequelize
  - sqlite3

## Usage

Once installed, run `npm start`

## Contributors / Authors

- Brady Camp
- JS 401 d46 class.

## Features / Routes

- GET : `/vehicles`
- GET : `/vehicles/:id`
- POST : `/vehicles/:id`
- DELETE : `/vehicles/:id`
- PUT: `/vehicles`
- GET : `/person`
- GET : `/person/:id`
- POST : `/person/:id`
- DELETE : `/person/:id`
- PUT: `/person`
  - Parameters
    - must include a query parameter of name.
  - Response
    - status 200, and string body if parameters look good.
    - status 404, if incorrect route.
    - status 500, if query parameters incorrect