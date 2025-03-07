document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");
    let tasks = [];

    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get form values
        const title = document.getElementById("task-title").value;
        const priority = document.getElementById("task-priority").value;
        const status = document.querySelector('input[name="task-status"]:checked').value;

        // Create task object
        const task = { title, priority, status };

        // Add to tasks array
        tasks.push(task);

        // Update UI
        addTaskToDOM(task);

        // Reset form
        taskForm.reset();
    });

    function addTaskToDOM(task) {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        if (task.status === "completed") {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span>${task.title} - <strong>${task.priority}</strong></span>
            <div>
                <button class="btn btn-success btn-sm complete-task">Complete</button>
                <button class="btn btn-danger btn-sm remove-task">Remove</button>
            </div>
        `;

        // Complete button functionality
        li.querySelector(".complete-task").addEventListener("click", () => {
            task.status = "completed";
            li.classList.add("completed");
        });

        // Remove button functionality
        li.querySelector(".remove-task").addEventListener("click", () => {
            li.remove();
        });

        taskList.appendChild(li);
    }
});