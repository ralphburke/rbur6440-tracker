const form = document.getElementById("taskform");
const tasklist = document.getElementById("tasklist");

taskList=[];

function addTask(name,type,rate,time,client){
  let task = {
    name,
    type,
    rate,
    time,
    client,
    date:new Date().toISOString(),
    id:Date.now()
  }
  taskList.push(task);
  displayTask(task);
}

// Call the function with test values for the input paramaters

addTask("Logo design","Concept sketching",30,5,"Adam");

addTask("User info","Database creation",40,3,"Apple");

addTask("Landing page","CSS styling",25,4,"Microsoft");

addTask("Mobile support","Debugging",30,5,"Wikipedia");

addTask("Website creation","HTML coding",0,8,"me");

// Log the array to the console.



form.addEventListener("submit", function(event){
  event.preventDefault();
addTask(form.elements.name.value,form.elements.type.value,form.elements.rate.value,form.elements.time.value,form.elements.client.value);
  console.log(taskList);
})


function displayTask(task) {
  let item = document.createElement("li");
  item.setAttribute("data-id", task.id);
  item.innerHTML =`<p><strong>${task.name}</strong><br>${task.type}</p>`;
  tasklist.appendChild(item);
  form.reset();
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);
  
  delButton.addEventListener("click", function(event) {
  item.remove();
  taskList.forEach(function(taskArrayElement, taskArrayindex) {
  if (task.id == item.getAttribute('data-id')) {
    taskList.splice(taskArrayindex, 1)}
})
  console.log(taskList)
}
) 
}