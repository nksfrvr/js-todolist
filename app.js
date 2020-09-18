// Aici imbini logica din controller si din view

const taskList = document.querySelector('.task-list');
const form = document.querySelector('form');

function handleFormSubmit(e) {
  e.preventDefault(); // Ca sa nu mai faca refresh
  const todoTitle = document.querySelector('.task-input').value; // iei valoarea din formular

  // La urmatoarele doua functii ai acces chiar daca sunt in fisiere diferite, pentru ca in index.html
  // sunt puse in ordinea corecta (app fiind ultimul).
  addTodo(todoTitle) // Apelezi functia din controller care adauga todo-ul
  clearInput();
  render(todos) // Apelezi functia care updateaza interfata.
}

function handleClick(e) {
  const button = e.target;
  if (button.className === 'delete-btn') {
    // Daca este un buton de delete iei id-ul din atributul data-todoid si apelezi removeTodo() din controller
    // IMPORTANT: Cand folosesti .getAttribute ca sa iei ID-ul, o sa iti returneze valoarea ca string
    // Adica daca id-ul e 1 .getAttribute('data-todoid') o sa returneze "1".
    // Problema e in controller cand compari daca id-ul pe care i-l dai lui removeTodo e egal cu id-ul todo-ului (linia 40)
    // o sa dea false deoarece compari un numar cu un string (1 nu e egal cu "1")
    // De aceea trebuie sa convertesti valoarea intr-un numar. Faci asta cu parseInt()
    const todoId = parseInt(button.getAttribute('data-todoid'));
    removeTodo(todoId);

    // Randezi modificarile in UI
    render(todos);
  }
  else if (button.className=='done-btn'){
    // Daca e buton de toggle apelezi functia
    const todoId = parseInt(button.getAttribute('data-todoid'));
    toggleTodoStatus(todoId);
    console.log('done')
    // Randezi modificarile in UI
    render(todos);
  }
}


form.addEventListener('submit', handleFormSubmit);
taskList.addEventListener('click', handleClick);