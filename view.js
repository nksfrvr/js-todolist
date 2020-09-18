const todosListWrapper = document.querySelector('.task-list');

// functia asta trebuie doar sa primeasca lista de todo-uri si sa construiasca interfata
// tinand cont de toate cazurile. Functia asta o sa fie apelata si cand se adauga un todo nou,
// si cand se sterge si cand se schimba statusul vreunui todo
function render(todos) {
  // stergi continutul listei pentru ca urmeaza a fi updatata cu noul state al listei
  todosListWrapper.innerHTML = '';
  // iterezi prin array-ul de todo-uri si creezi list itemii
  todos.forEach(function(todo) {
    const taskItem = document.createElement('li'); // Daca ai un ul, corect este ca childrenii sa fie li-uri nu div-uri
    taskItem.classList.add('task', 'task-title');

    taskItem.innerText = todo.title; // Te intereseaza doar proprietatea title din tot obiectul (care contine si done si id)
    
    // Daca todo-ul este marcat ca done, ii adaugi clasa css
    console.log(todo);
    if(todo.done) {
      taskItem.classList.add('done');
    }
    const doneBtn = document.createElement('button'); // Semantic, daca elementul tau nu e un link catre o alta pagina (sau site), ar trebui sa fie buton. <a>-urile se folosesc cand reprezinta intradevar calea catre o adresa concreta  
    const deleteBtn = document.createElement('button');

    // Cum ai facut si tu, nu ai adaugat event listenerii pentru actiunile butoanelor astora (delete si done) direct pe ele
    // ci pe intreaga lista de todo-uri. Insa acum ca avem ID-uri pe todo-uri putem veni in ajutorul lor.
    // O practica destul de comuna e sa pui in atribute valori custom. De obicei atributele se pun cu "data-" in fata.
    // Ex: <button data-todoid="1" />
    // Punem si pe butoanele de done si delete chestia asta ca mai apoi sa ne folosim de valoarea atributului ca sa stim ce todo targetam
    doneBtn.setAttribute('data-todoid', todo.id);
    deleteBtn.setAttribute('data-todoid', todo.id);
    // daca dai inspect in browser acum o sa vezi atributele astea pe butoane


    doneBtn.classList.add('done-btn');
    deleteBtn.classList.add('delete-btn');
    
    taskItem.appendChild(doneBtn);
    taskItem.appendChild(deleteBtn);

    // Adaugi in todosListWrapper item-ul creat
    todosListWrapper.appendChild(taskItem);
  });
}

// Faci o functie separata care se ocupa de clear-ul inputului.
function clearInput() {
  const taskInput = document.querySelector('.task-input');
  taskInput.value = '';
}