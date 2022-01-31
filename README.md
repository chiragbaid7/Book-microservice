# Book-microservice

This project aims to implement 4 microservices pertaining to serving books as content.


# Instructions
Run the docker compose yaml file.

`docker-compose -f docker-compose.yaml up`

# System Design

## Features
 - Books 
 - Dockerized entire application including all microservices and databases for easy deployement.
 - Used Nginx as a reverse proxy to cater requests to different services.
 - Used RabbitMQ as a Message Broker to push message from User Service to Email Service after which an email 
   is sent to the new regsitered user.
 - User can filter books based on the likes or reads interactions.
 - Used Mongodb database for each microservice.


## System Architecture

![system_design_template](https://user-images.githubusercontent.com/37933427/151711567-6c558721-a3af-48ec-b01d-bd6e80247171.jpg)

This diagram illustrates how this project's backend works.


![screenshot](https://user-images.githubusercontent.com/37933427/151713856-fc274162-817f-42f8-b6ec-1eb00b973caf.png)
<details>
    <summary>Diagram Code</summary>
    
    Title: Backend Architecture
    participant client
    participant Nginx Server as proxy
    participant Contents server as webserver
    participant controller
    participant service
    participant domain
    participant database

    client -> proxy:  POST /api/v1/Contents
    proxy -> webserver:  POST /api/v1/Contents
    webserver -> controller: post_content_handler()
    controller -> service: content_service(user_id)
    service -> domain: content_domain(user_id)
    domain -> database: domain_model
    domain -> service: document
    service -> controller: data
    controller -> webserver: JSON or HTML Response
    webserver -> proxy: HTTP Response
    proxy -> client: HTTP Response
</details>


## Database Schema

| Users            |
| -----------------|
| \_id:ObjectId    |
| name:string      |
| email:string     |
| password:Number  |
| phoneno:ObjectId |

| Contents            |
| --------------------|
| \_id:ObjectId       |
| user_id:String      |
| title:String        |
| story:String        |
| created_at:Datetime |


| User_events              |
| -------------------------|
| \_id:ObjectId            |
| content_id:ObjectId      |
| liked_by:list_of_strings |
| read_by:list_of_strings  |


## User Service

- User service deals with user registration and login.
- Jwt tokens is used to authorize the incoming user's request in all the services.

### Rest Apis

     register new user          POST     http:://api/v1/users/register

     Login current user         GET      http:://api/v1/users/login

     update phoneno             PATCH    http:://api/v1/users/updatephone

     update password            PATCH    http:://api/v1/users/updatepassword

     update name                PATCH    http:://api/v1/users/updatename

- Request
 ```
  curl -X POST -d '{"name":"chirag","email":"chirag@example.com","password":"abc1","phoneno":8123456789}' \
  http://localhost:80/api/v1/users/register \
  --header 'Content-Type: application/json'
 ```
 
- Response Body: 201
  ```json
  {
   "result": {
       "name": "Chirag",
        "email": "chirag@example.com",
        "password": "abc1",
        "phoneno": 8123456789,
        "_id": "61f77e267aceb6f9e51c25b3",
      }        
  }
  ```

 ## Email Service
![Screenshot from 2022-01-31 11-44-00](https://user-images.githubusercontent.com/37933427/151751274-c8b64697-e854-4dca-b01d-9bf5d49c75b4.png)
 
![email-test](https://user-images.githubusercontent.com/37933427/151751325-326f1324-453d-46f3-a970-5d22fce317e9.png)

![anatomy](https://user-images.githubusercontent.com/37933427/151753921-3241d98d-fdb3-46f2-b883-6cc953fcf45c.png)

 
 
