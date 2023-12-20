# Assignment 2 - Web API.

Name: Sirui Yao
## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + Authentication like login and sign up 
 + More new TMDB API routes with parameterised URL
 + Add new favorite function to assignment
 + Almost fully React integration of GET and POST data from frontend
 + Simple recommend algorithm to implement a recommender
 + Add toprated and latest movies related endpoints
 + More API routes from frontend to movies-api
 + Protect routes to some pages
 + Make use of express middleware like error handling
 + Apply password protection by using bcrypt

## Setup requirements.
I use npm install bcrypt-nodejs to my assignment,bcrypt-nodejs is a library for password encryption, which provides a secure way to store and compare passwords.

## API Configuration

Create a .env file in the web-api folder as below:
NODE_ENV=development PORT=8080 HOST=localhost mongoDB=YourMongoURL seedDb=true secret=YourJWTSecret REACT_APP_TMDB_KEY=YourReactMovieKey

## API Design

You can find my API from the Swaggerhub,the url is as follows:
[Swaggerhub](https://app.swaggerhub.com/apis-docs/20095250/movie-list/1.0.0#/)

## Security and Authentication

The routes below are all protected:/movies/tv/page  /movies/upcoming/page /movies/toprated 
Protected by passport sessions:/api/movies/tmdb and /api/people 
People need to verify by registering and then logging in,then the aauthentication will be received from api. Otherwise they will not have permission to view some pages.

## Integrating with React App

Movies:

GET /api/movies/ -get a lot of movies from tmdb

POST /api/movies/ -add the movie into the movie list

GET /api/movies/tmdb/movies/:id/reviews -get the review of some movies

POST /api/movies/tmdb/movies/:id/reviews -add the movie into movie list

GET /api/movies/:id/ -get the details of some movies

GET /api/movies/tmdb/movies/:id/images -get movies images of the movies

GET /api/movies/tmdb/upcoming -get twenty upcoming movies to list in the upcoming page

GET /api/movies/tmdb/toprated -get some toprated movies to list in the toprated page

People:get some details about the people part

GET /api/people//tmdb/popular -get popular people to the peoplepage

GET /api/people/tmdb/people/:id/ -get people's details to the peopledetail page

GET /api/people/tmdb/people/:id/images -get people's images to the peopledetail page

TV:get some details about the TV part

GET /api/TV/tmdb/popular -get twenty TVs to the TV page

GET /api/TV/tmdb/TV/:id/ -get TV's detail to the TVdetail page

GET /api/TV/tmdb/TV/:id/similar -get TV's similar images to the TVdetail page

GET /api/TV/tmdb/TV/:id/reviews -get TV's reviews to the TV in the app

GET /api/TV/tmdb/TV/:id/genres -get TV's genres to the TV in the app

Genres:get some details about the genres about the movies and TVs

GET /api/genres -get all of the genres about the movies

POST /api/genres -adds the movie genres

PUT /api/genres/:id/ -update the movie genres

Users:create some users to authenticate the app

GET /api/users -get the user information for the app

POST /api/users -add the new user to the app

PUT /api/users/:id/ -update the users information

GET /api/user/:username/favorites -get user's favorites movies

POST /api/user/:username/favorites -add the new user to the app

POST /api/reviews -add the new review to the app

Reviews

GET /api/reviews -get the reviews information for the app


## Independent learning (if relevant)

I use bcrypt to protect keywords.It is a Node.js module for password hashing. This module implements the bcrypt encryption algorithm, allowing you to securely store passwords in Node.js applications. When a user registers, you can use bcrypt to generate a hash of the password and then store this hash in the database. 
Github:https://github.com/SIRUI125/web-api-assignment2
