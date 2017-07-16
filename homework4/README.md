You can use my postman query collection in __my_postman_query_collection.json__ 

Send data:

* Get user friends (people with whom he chat)

GET http://localhost:1428/api/friends/1 HTTP/1.1

* Get all users

GET http://localhost:1428/api/user HTTP/1.1

* Get specific user

GET http://localhost:1428/api/user/1 HTTP/1.1

* Delete specific user

DELETE http://localhost:1428/api/user/4 HTTP/1.1

* Update specific user

PUT http://localhost:1428/api/user/1 HTTP/1.1
Content-Type: application/json

{

	"id":1,
	
	"nickname":"Roma007",
	
	"name":"Roma"
	
}

* Add specific user

POST http://localhost:1428/api/user/1 HTTP/1.1

Content-Type: application/json

{

	"id":1,
	
	"nickname":"Roma007",
	
	"name":"Roma"
	
}

* Get all messages

GET http://localhost:1428/api/message HTTP/1.1

* Get specific message

GET http://localhost:1428/api/message/1 HTTP/1.1

* Delete specific messages

DELETE http://localhost:1428/api/message/4 HTTP/1.1

* Update specific message

PUT http://localhost:1428/api/message/1 HTTP/1.1

Content-Type: application/json

{

    "id": 1,
    
    "date": "2014-10-09T18:02:13.568Z",
    
    "receiverId": 1,
    
    "senderId": 2,
    
    "body": "ReallyCool1"
    
}

* Add specific message

POST http://localhost:1428/api/message/1 HTTP/1.1

Content-Type: application/json

{

    "id": 1,
    
    "date": "2014-10-09T18:02:13.568Z",
    
    "receiverId": 1,
    
    "senderId": 2,
    
    "body": "ReallyCool1"
    
}
