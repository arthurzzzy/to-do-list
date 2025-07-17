const addbtnn = document.getElementById("addbtn");
const tasktextt = document.getElementById("tasktext");
const taskLists = document.getElementById("tasklist");

function addtask () {
    const taskText = tasktextt.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = tasktextt;
    taskLists.appendchild(li);
    taskLists.value = "";

}

addbtnn.addEventListener("click", addtask);