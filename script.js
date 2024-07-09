let addBtn = document.querySelector(".Add-btn");
let task = document.querySelector("#input-box");
let listElement = document.querySelector(".ListElements");

addBtn.addEventListener("click", () => {
    if (task.value.trim() !== "") { // Check if the input is not empty
        let div = document.createElement("div");
        div.className = "task";
        
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "check-icon";
        
        let taskText = document.createElement("div");
        taskText.className = "task-text";
        taskText.innerHTML = task.value;

        let deleteIcon = document.createElement("span");
        deleteIcon.className = "delete-icon";
        deleteIcon.textContent = "🗑"; // Unicode for trash can

        div.appendChild(checkbox);
        div.appendChild(taskText);
        div.appendChild(deleteIcon);
        listElement.appendChild(div);
        task.value = ""; // Clear the input box after adding the task

        checkbox.addEventListener("click",()=>{
            listElement.removeChild(div);
            listElement.appendChild(div);
        })

        deleteIcon.addEventListener("click", () => {
            listElement.removeChild(div);
        });
    }
});
