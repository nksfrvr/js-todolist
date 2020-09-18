const taskList = document.querySelector('.task-list');
const form = document.querySelector('form');



form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e){
  e.preventDefault();
  const todoTitle = document.querySelector('.task-input').value;
  addTodo(todoTitle);
  clearInput();
  render(todos);
}

taskList.addEventListener('click',handleClick);

function handleClick(e){
  const button = e.target;
  if (button.className == 'delete-btn'){
    const todoId = parseInt(button.getAttribute('data-todoid'));
    render(todos);
  }else if (button.className === 'done-btn') {
    toggleStatus(todoId);
    render(todos);

  }



}
