## Intro
This software is developed for practicing NestJS on Ubuntu 20.04 LTS Focal Fossa. Purpose of this application to create, read, update and delete records from document in MongoDB. There is no front-faces developed for this application. (No view, this can be used with Postman or a software which is equivalent to Postman).

## Small User Manual
Before using this <b>basic</b> app, be sure that Node.js and Nest.js is installed on your machine. (You have to install Nodejs before installing Nodejs)

Node.js download page:
<a style="text-decoration: none; cursor: pointer;" href="https://nodejs.org/en/download">Download Node.js</a>

Nest.js installation and documentation page:
<a style="text-decoration: none; cursor: pointer" href="https://docs.nestjs.com">Downloading and Installing Nest.js</a>

Postman download page: <a style="text-decoration: none; cursor: pointer;" href="https://www.postman.com/downloads/">Download Postman</a>

After installing Node.js and Nest.js properly, download this project and open terminal and type the command
```
npm install --save
```
to install required dependencies
and then type this command
```
npm run start
``` 
If this software runs after typing the command which is written above,
+ Open Postman
+ Enter ``` 127.0.0.1``` as address

### Adding user
First thing you must do is adding user. There are two defined fields for user document (table). First one is username, with type of string, and second one is description which is string also. For adding user, choose POST method in Postman and from Body section choose raw -> JSON. And type a JSON Object like this
```
{
    "username":"Kron",
    "description": "Hopes are growing up."
}
```  
and click send. Now i predict user is added.

### Reading user
Reading user is relatively simple. Keep address as ```127.0.0.1``` and choose GET method on Postman. And click Send button. After that, if you have added user before this process, you must see users as JSON Object.

### Updating User
For updating user, you have to copy the id of user and type address like this: ```127.0.0.1/copiedUserId```.
Just after that you have  to PUT method on POSTMAN and click send button. Because as a convention, updating transactions are made with PUT method in HTTP Protocol.

### Deleting user
As in updating process, type address and id. And select DELETE on POSTMAN and click send button.
