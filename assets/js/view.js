console.log('the view page');

const todoListWrapper = document.querySelector('.todo-list');

function render(todos){
  //sterg continutul listenerii
  todoListWrapper.innerHTML = ''
  todos.forEach(function(todo){
    const taskItem = document.createElement('li');
    taskItem.classList.add('task', 'task-title');
    taskItem.innerText = todo.title;
    if (todo.done){
      taskItem.classList.add('done');
    }
    //butonul de done;
    const doneBtn = document.createElement('button');
    doneBtn.classList.add('done-btn');
    doneBtn.setAttribute('data-todoid', todo.id)
    //butonul de delete;
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.setAttribute('data-todoid', todo.id);

    //pun butoanele in li taskItem;
    taskItem.appendChild(deleteBtn);
    taskItem.appendChild(doneBtn);

   //pun li TaskItem in todoListWrapper;
   todoListWrapper.appendChild(taskItem);

  })

}



function clearInput(){
  const taskInput = document.querySelector('.task-input');
  taskInput.value = '';
}
