let toDoList = [];
let currentTaskId = 0;

// Function that adds a new task to the to do list
const addTask = (taskDescription) => {
  const toDoItem = {
    taskId: currentTaskId,
    task: taskDescription,
    done: false
  };
  toDoList.push(toDoItem);
  currentTaskId++;
  console.log(`Added: ${taskDescription}`);
};

// Function that marks a task complete in a to do list
function taskCompleted(taskId) {
  for (let task = 0; task < toDoList.length; task++) {
    if (toDoList[task].taskId == taskId) {
      toDoList[task].done = true;
      console.log(`Completed: ${toDoList[task].task}`)
      return;
    }
  }
  console.log('Task not found')
}

// Function that deletes a task from a to do list
function deleteTask(taskId) {
  for (let task = 0; task < toDoList.length; task++) {
    if (toDoList[task].taskId == taskId) {
      let deletedTask = toDoList.splice(task, 1)
      console.log(`Deleted: ${deletedTask[0].task}`)
      return
    }
  }
  console.log('Task not found')
}

// Function that displays all tasks in a to do list
const displayToDoList = () => {
  console.log('To do list:');
  for (let task = 0; task < toDoList.length; task++) {
    const status = toDoList[task].done ? 'Done' : 'Pending';
    console.log(`${toDoList[task].taskId} : ${toDoList[task].task} - ${status}`);
  };
};

// Usage
addTask('Buy groceries')
addTask('Finish homework')
taskCompleted(0)
displayToDoList(0)
deleteTask(1)
displayToDoList(1)