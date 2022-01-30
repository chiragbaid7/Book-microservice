# Book-microservice

This project aims to implement 4 microservices pertaining to serving books as content.


# System Design

## Features
 - Dockerized entire application including databases.
 - Used Nginx as a reverse proxy to cater requests to different services.
 - Used RabbitMQ Message Broker to publish message from User Service to Email Service after new user regsitration.
 - 


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


