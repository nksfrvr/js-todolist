 //selector
const taskInput = document.querySelector('.task-input');
const addButton = document.querySelector('.add-btn');
const taskList = document.querySelector('.task-list');
const form = document.querySelector('form');
 //Events
 addButton.addEventListener('click', addtask);

 // Adaugi un event listener pe submit care apeleaza functia onSubmit cand se face submit la formular
 form.addEventListener('submit', onSubmit);

//checking if the item exists;
 if (taskList) {
   taskList.addEventListener('click',deleteCheck, false);

 }



 //functions

 function deleteCheck(e) {
   const item = (e.target);
   //delete item:
   if (item.className === 'delete-btn') {
     item.parentElement.remove();
   }
   //mark item  as done by toggle a 'done' class:
   else if (item.className=='done-btn'){
     item.parentElement.classList.toggle('done');
   }
 }


function addtask(e) {
   //prevent default
   // Aici vad ca nu face nimic preventDefault()-u asta deci nu cred a e necesar.
   e.preventDefault();
   console.log('hello ');
   //create a div with class of task
   const taskDiv = document.createElement('div') ;
   taskDiv.classList.add('task');
   //create a li tag with a class of task-title
   const li = document.createElement('li')
   li.innerText = taskInput.value;
   li.classList.add('task-title');
   //append li to taskDiv:
   taskDiv.appendChild(li);
   //create an a tag for complete buton:
   const doneBtn = document.createElement('a');
   doneBtn.classList.add('done-btn');
   //append doneBtn to taskDiv:
   taskDiv.appendChild(doneBtn);
   //create an a tag for delete button:
   const deleteBtn = document.createElement('a');
   deleteBtn.classList.add('delete-btn');
   //append deleteBtn to taskDiv:
   taskDiv.appendChild(deleteBtn);
   //append taskDivto taskList:
   taskList.appendChild(taskDiv);
   //clear the input;
   taskInput.value = '';

 }

 function onSubmit(e) {
   // e asta e eventul de submit
   // daca dai console.log(e); o sa vezi ca un obiect cu mai multe proprietati legate de event in sine
   // inclusiv niste functii pe care le poti apela. una din functiile astea e .preventDefault()
   // asta ii spune browserului sa anuleze orice comportament default specificat de browser
   // in cazul formularului, atunci cand dai submit (adica enter in cazu asta) sa faca refresh la pagina
   e.preventDefault();

   // Si ca sa fie corect, cand dai enter ar trebui sa fie echivalentul butonului de + asa ca poti apela functia addtask() si aici
   addtask(e);
 }