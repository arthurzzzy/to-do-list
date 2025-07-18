const addbtnn = document.getElementById("addbtn");
const tasktextt = document.getElementById("taskinput");
const taskLists = document.getElementById("tasklist");

function addtask () {
    const tasktextt = tasktextt.value.trim();
    if (tasktextt === "") return;

    const li = document.createElement("li");
    li.textContent = tasktextt;
    
}

addbtnn.addEventListener("click", addtask);