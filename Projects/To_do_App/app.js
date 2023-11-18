// let todo = [];

// let req = prompt("Please enter your request :");

// while(true) {
//     if(req == "quit") {
//         console.log("Quit the APP.");
//         break;
//     }

//     if(req == "list") {
//         console.log("--------------");
//         for(i=0; i<todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         console.log("--------------");
//     }
//     else if(req == "add") {
//         let task = prompt("Please enter the task you want to add : ");
//         todo.push(task);
//         console.log("Task added");
//     } 
//     else if(req == "delete") {
//         let idx = prompt("Please enter the task index : ");
//         todo.splice(idx, 1);
//         console.log("Task deleted");
//     }
//     else {
//         console.log("Wrong request.");
//     }

//     req = prompt("Please enter your request :");
// }

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value == '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask(); 