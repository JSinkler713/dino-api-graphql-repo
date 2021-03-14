# Dinosaur graphql deployment

This is a site that set up a basic graphql api, for a react app to consume.

## To access this endpoint

 [Deployed Link](https://dino-api-graphql.herokuapp.com/)
 [Locally](http://localhost:4000)

## Tech
 This uses express and apollo server. The backend is written with sequelize ORM with postgres.

 Use queries and mutations to play around
 *Sample Query*

 ```js
 query GetDinos {
  allDinos {
    name
    type
    createdAt
    id
  }
}
```
