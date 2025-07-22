
function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");


    const span = document.createElement("span");
    span.textContent = taskText;
    
    span.style.cursor = "pointer"; 


    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

 
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = function () {
        li.remove(); 
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);

    const ul = document.getElementById("taskList");
    ul.appendChild(li);

    input.value = "";
}


document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});



