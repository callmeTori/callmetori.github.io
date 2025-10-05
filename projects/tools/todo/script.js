const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

const taskData = [] //this array stores all the tasks and the associated data (title, due date, and description)

let currentTask = {
  
} // this variable tracks the state when editing and discarding tasks

const reset = () => {
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  taskForm.classList.toggle("hidden");
  currentTask = {}
} // clears the input fields

openTaskFormBtn.addEventListener("click", () => {
  taskForm.classList.toggle("hidden")
}); // when the button is clicked, the task form is displayed 

closeTaskFormBtn.addEventListener("click", () => {  
  const checkFormInputForValues = titleInput.value || dateInput.value || descriptionInput.value;
  if (checkFormInputForValues) {
    confirmCloseDialog.showModal();
  } else {
    reset();
  }
}); // when the close button is clicked, the modal appears to cancel or discard changes. if there are no values in the fields, the task form will simply close.

cancelBtn.addEventListener("click", () => confirmCloseDialog.close()); // in the confirm modal, this will close the modal so the user can continue editing

discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  taskForm.classList.toggle("hidden")
}); // in the confirm modal, the modal and task form will be closed

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();// the preventDefault method stops the browser from refreshing when the form is submitted.
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id); // This checks if the taskData exists already. The findindex array method finds and returns the index of the first element in an array that meets the criteria in the callback function. In this function, the id properties of 'item' and 'currentTask' are compared.
  const taskObj = {
    id: `${titleInput.value.toLowerCase().split(' ').join('-')}-${Date.now()}`,  // saved the title value in lower case. the split and join methods turn the value a hyphenated string. the value is wrapped in an embedded expression and template strings. The Date.now method returns the number of milliseconds elapsed since 'January 1, 1970 00:00:00 UTC', added to the end of the string to make the ID unique.
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value    
  }; // when a user creates a task, it is saved in this object
  
  if (dataArrIndex === -1) {
    taskData.unshift(taskObj); // checks if the task already exists. if not, then the unshift method is used to add the new task to the beginning of the taskData array
  };

  taskData.forEach(({id,  title, date, description}) => {
    tasksContainer.innerHTML += `
        <div class="task" id="${id}"></div>
        <p><strong>Title: </strong>${title}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Description:</strong> ${description}</p>
        <button type="button" class="btn">Edit</button>
        <button type="button" class="btn">Delete</button>
    ` // create a new div with the new task data with the unique id
  }
);

reset();

});