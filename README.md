# To do Application 

GET ->> HTTP Method
/todo ->> Endpoint 

Database name : todo-app
Collection name -> todos   
(Todo)


GET - /todo
Description - Get all the items from todo 
(completed)

------

POST - /todo
Body : 
{
	"item_name" : "',
	"item_description" : "",
	"item_status" : ""
}
Description - post a item in the todo

(completed)

------

TASK - 1

DELETE - todo/:id 
Description - delete a todo task which have matching id 


----
TASK - 2


PUT  -> todo/:id
Description -  Edit a todo item 
Body : 
{
	"item_name" : "',
	"item_description" : "",
	"item_status" : ""
}
