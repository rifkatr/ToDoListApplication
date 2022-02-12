export function splitTasksByStatus(todoList=[]) {
  let tasksTodo = []
  let tasksDone = []

  todoList.forEach(task => {
    if(task.status === 0) {
      tasksTodo.push(task)
    }
    else if(task.status === 1) {
      tasksDone.push(task)
    }
  })

  return {tasksTodo, tasksDone}
}

export function sortTasksByCreatedAt(arr = [], sort = "asc"){
  arr.sort(function(a, b) {
    var keyA = new Date(a.createdAt),
      keyB = new Date(b.createdAt);
    // Compare the 2 dates
    if(sort === "desc"){
      if (keyA > keyB) return -1;
      if (keyA < keyB) return 1;
    }else{
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
    }
    return 0;
  });
}