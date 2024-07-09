let addBtn = document.querySelector(".Add-btn");
let task = document.querySelector("#input-box");
let listElement = document.querySelector(".ListElements");

addBtn.addEventListener("click", (e) => {
    if (task.value.trim() !== "") { // Check if the input is not empty
        let div = document.createElement("div");
        div.className = "task";
        
        let taskText = document.createElement("div");
        taskText.className = "task-text";
        taskText.innerHTML = task.value;
        
        let checkIcon = document.createElement("span");
        checkIcon.className = "check-icon";
        checkIcon.innerHTML = "✔"; // Unicode for checkmark

        let deleteIcon = document.createElement("span");
        deleteIcon.className = "delete-icon";
        deleteIcon.textContent = "🗑"; // Unicode for trash can

        div.appendChild(checkIcon);
        div.appendChild(taskText);
        div.appendChild(deleteIcon);
        listElement.appendChild(div);
        task.value = ""; // Clear the input box after adding the task

        checkIcon.addEventListener("click", () => {
            checkIcon.classList.toggle("checked");
            if (checkIcon.classList.contains("checked")) {
                listElement.removeChild(div);
                listElement.appendChild(div); // Move to bottom
            }
        });

        deleteIcon.addEventListener("click", () => {
            listElement.removeChild(div);
        });
    }
});
