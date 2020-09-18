

let todos = new Array();
let lastId = 0;


function addTodo(todoTitle){
  ++lastId; //la fel ca lastId=+1
  const newTodo = {
    id:lastId,
    title:todoTitle,
    done:false,
  }
  todos = [...todos, newTodo];
}

function removeTodo(todoId){
  todos = todos.filter(function(todo){
    if (todo.id === todoId){
      return false;}
      else{
        return true;
      }

  });
}

function toggleStatus(todoId){
  todos = todos.map(function (todo){
    if (todo.id == todoId){
      return{
        ...todo,
        done:!todo.done,
      }
    }
    else{
      return todo;
    }
  })
}
