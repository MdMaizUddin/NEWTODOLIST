
// var inputBox = document.getElementById("input-box");
// var listContainer = document.getElementById("List-container");

// function addTask() {
//   if (inputBox.value === '') {
//     alert("you must write something");
//   }
//   else {
//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;
//     listContainer.appendChild(li);
//     let span = document.createElement("span")
//     span.innerHTML = "\u00d7";
//     li.appendChild(span)
//   }
//   inputBox.value = "";
//   saveData();
// }

// listContainer.addEventListener("click", function (e) {
//   if (e.target.tagName === "li") {
//     e.target.classList.toggle("checked");
//     saveData();
//   }
//   else if (e.target.tagName === "SPAN") {
//     e.target.parentElement.remove();
//     saveData();
//   }
// }, false)

// function saveData() {
//   localStorage.setItem("data", listContainer.innerHTML);
// }

// function showTask() {
//   listContainer.innerHTML = localStorage.getItem('data');

// }
// showTask();


var inputBox = document.getElementById("input-box");
var listContainer = document.getElementById("List-container");

function addTask() {
  if (inputBox.value === '') {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.textContent = inputBox.value; // Using textContent for security
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.textContent = "\u00d7"; // Unicode for multiplication symbol
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  const storedData = localStorage.getItem('data');
  if (storedData) {
    listContainer.innerHTML = storedData;
  }
}
showTask();
