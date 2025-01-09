const body = document.body;
var ul = document.createElement("ul");
body.appendChild(ul);
ul.id = "unorder";
var i = 0;
function clickEnterToSubmit(event) {
  console.log(event);
  // if (event.keyCode === 13) {
  //   taskAdder();
  // }
  if (event.key === "Enter") {
    taskAdder();
  }
}
function taskAdder() {
  let inputList = document.getElementById("taskInput").value;

  if (inputList == "") {
    alert("Please add a task ");
    return;
  }
  let listItems = document.createElement("li");
  listItems.id = "taskList";
  ul.appendChild(listItems);
  let listText = document.createElement("span");
  listItems.appendChild(listText);
  // listText.innerText = ++i + ". " + inputList;
  listText.innerText = inputList;

  let buttonContainer = document.createElement("div");
  buttonContainer.className = "buttonContainer";
  listItems.appendChild(buttonContainer);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  buttonContainer.appendChild(deleteButton);
  deleteButton.onclick = function () {
    // --i;
    ul.removeChild(listItems);
  };

  let completedButton = document.createElement("button");
  completedButton.innerHTML = "Completed";
  buttonContainer.appendChild(completedButton);
  completedButton.onclick = function () {
    listText.classList.toggle("completedList");
  };

  // completedButton.onclick = function () {
  //   listText.style.textDecorationLine = "line-through"; //makes line permanebent
  // };
  document.getElementById("taskInput").value = "";
  ul.scrollTop = ul.scrollHeight;
}
