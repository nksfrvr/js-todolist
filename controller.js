let todos = [];
let lastId = 0;


/*
Un todo are forma unui obiect:
{
  id: 0,
  title: 'Ceva text aici',
  done: false, 
}


*/
function addTodo(todoTitle) {
  lastId += 1; // Incrementezi lastId ca sa ai un id nou pentru fiecare todo creat;

  // Creezi un obiect nou care contine proprietatile todo-ului ca mai sus
  const newTodo = {
    id: lastId,
    title: todoTitle,
    done: false, // Ii dai false de la inceput pentru ca nu poate fi done imediat cum a fost creat.
  }
  // Cand adaugi un item nou, creezi un array nou care contine toate valorile precedente (... deconstruieste array-ul)
  // plus todo-ul nou creat.
  todos = [
    ...todos,
    newTodo,
  ];
}

function removeTodo(todoId) {
  // .filter trece prin fiecare item dintr-un array (in cazu asta todos) si executa functia pe care o dai ca argument 
  // pasand-ui item-ul curent. Scopul final e sa ne dea un array nou filtrat pe baza logicii din functia asta.
  // Daca functia asta returneaza true, atunci item-ul ramane in lista. Daca returneaza false, nu ramane in lista.
  // Pe noi aici ne intereseaza sa stergem un todo, deci practic filtram lista de todo-uri si ne asiguram ca todo-ul pe care
  // vrem sa-l stergem nu mai e inclus in lista. Avem un id de todo, asa ca in functie verificam daca todo-ul curent are sau nu
  // id-ul pe care i l-am pasat functie removeTodo (adica todoId)
  todos = todos.filter(function (todo) {
    if(todo.id === todoId) {
      return false;
    } else {
      return true;
    }
  });
}

function toggleTodoStatus(todoId) {
  // .map trece prin fiecare item dintr-un array (in cazu asta todos) si executa functia pe care o dai ca argument 
  // pasand-ui item-ul curent. Scopul final e sa ne dea un array nou cu acelasi numar de elemente ca array-ul original
  // insa modificat pe baza logicii din functie. Ce returneaza functia, asta o sa fie in array-ul nou creat la indexul 
  // la care se afla iteratia acum.
  // Aici vrem sa schimbam valoarea proprietatii 'done' pentru un todo care are un anumit id (todoId)
  // In functie verificam daca todo.id-ul curent este egal cu todoId care i-a fost pasat functiei, si daca este, returnam
  // un obiect nou care contine toate proprietatile obiectului todo (adica id, title, si done) si la final suprascriem 
  // valoarea lu 'done' cu opusul ei (daca 'todo.done' e egal cu 'true', '!todo.done' o sa fie 'false')
  // Daca nu, returnam obiectul nemodificat.
  todos = todos.map(function(todo) {
    if(todo.id === todoId) {
      return {
        ...todo,
        done: !todo.done,
      }
    } else {
      return todo;
    }
  });
}


// Acum ai toata logica aplicatiei pusa in functii, care doar modifica array-ul ala in care tu tii lista de todo-uri.
// In punctul asta nu te intereseaza cum anume sunt afisate, ce selectori in DOM faci bla bla. Doar date care sunt modificate. 
// In view.js te folosesti de datele de aici ca sa iti construiesti interfata.