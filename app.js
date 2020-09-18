 //selector
const taskInput = document.querySelector('.task-input');
const addButton = document.querySelector('.add-btn');
const taskList = document.querySelector('.task-list');
 //Events
 addButton.addEventListener('click', addtask);


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
