function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;
    
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = taskText;
    
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.onclick = function() {
        span.classList.toggle("completed");
    };
    
    let editBtn = document.createElement("button");
    editBtn.textContent = "✏";
    editBtn.onclick = function() {
        let newText = prompt("Edit task:", span.textContent);
        if (newText) span.textContent = newText.trim();
    };
    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = function() {
        li.remove();
    };
    
    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
    
    taskInput.value = "";
}