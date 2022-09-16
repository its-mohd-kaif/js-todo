var arr = []; //Todo Array
var com = []; //Completed Array

document.getElementById("updateTodo").style.display = "none";
document.getElementById("updateComp").style.display = "none";

//Function to add input into todo array
function add() {
  var input = document.getElementById("new-task").value;
  var obj = {
    data: input,
    id: Math.random().toString(16).slice(2),
  };

  if (obj.data == "") {
    alert("Please Write Some Task");
  } else {
    arr.push(obj);
    display();
  }
}

//Function to display the todo Array
function display() {
  var todo = "<ul>";
  arr.forEach((element) => {
    todo +=
      '<input type="checkbox" onclick="comp(\'' +
      element.id +
      "')\">" +
      element.data +
      '<input type="button" onclick="edit(\'' +
      element.id +
      '\')" value="Edit"><input type="button" class="delete" onclick="delTodo(\'' +
      element.id +
      '\')" value="Delete"><br>';
  });
  todo += "</ul>";
  document.getElementById("output").innerHTML = todo;
}

//Function to delete todo array element
function delTodo(val) {
  for (let i = 0; i < arr.length; i++) {
    if (val == arr[i].id) {
      console.log(arr[i].data);
      arr.splice(i, 1);
    }
  }
  display();
}
//Funcyion to display complete tasks
function completed() {
  var str = "<ul>";
  com.forEach((element) => {
    str +=
      '<input type="checkbox" checked onclick="reverse(\'' +
      element.id +
      "' )\">" +
      element.data +
      '<input type="button" onclick="edit2(\'' +
      element.id +
      '\')" value="Edit"><input type="button" class="delete" onclick="delComp(\'' +
      element.id +
      '\')" value="Delete"><br>';
  });
  str += "</ul>";
  document.getElementById("res").innerHTML = str;
}

//Function to push todo tasks into completed tasks
function comp(val) {
  for (let i = 0; i < arr.length; i++) {
    if (val == arr[i].id) {
      com.push(arr[i]);
      arr.splice(i, 1);
    }
  }
  display();
  completed();
}

//Function to delete completed array
function delComp(val) {
  for (let i = 0; i < com.length; i++) {
    if (val == com[i].id) {
      console.log(com[i].data);
      com.splice(i, 1);
    }
  }
  completed();
}

//Function to push completed array into todo array
function reverse(val1) {
  for (let i = 0; i < com.length; i++) {
    if (val1 == com[i].id) {
      arr.push(com[i]);
      com.splice(i, 1);
    }
  }
  display();
  completed();
}

//Function to Edit the todo tasks
function edit(val2) {
  document.getElementById("add").style.display = "none";
  document.getElementById("updateComp").style.display = "none";
  document.getElementById("updateTodo").style.display = "block";

  for (let i = 0; i < arr.length; i++) {
    if (val2 == arr[i].id) {
      console.log("hello");
      document.getElementById("new-task").value = arr[i].data;
      arr.splice(i, 1);
    }
  }

  display();
}
//Function to Edit the Completed tasks
function edit2(val2) {
  document.getElementById("add").style.display = "none";
  document.getElementById("updateTodo").style.display = "none";
  document.getElementById("updateComp").style.display = "block";

  for (let i = 0; i < com.length; i++) {
    if (val2 == com[i].id) {
      console.log("hello");
      document.getElementById("new-task").value = com[i].data;
      com.splice(i, 1);
    }
  }

  completed();
}

//Function to Update todo tasks
function update1() {
  document.getElementById("updateTodo").style.display = "none";
  document.getElementById("updateComp").style.display = "none";
  document.getElementById("add").style.display = "block";
  var input = document.getElementById("new-task").value;
  var obj = {
    data: input,
    id: Math.random().toString(16).slice(2),
  };

  if (obj.data == "") {
    alert("Please Write Some Task");
  } else {
    arr.push(obj);
    display();
  }
}
//Function to update Completed tasks
function update2() {
  document.getElementById("updateTodo").style.display = "none";
  document.getElementById("updateComp").style.display = "none";
  document.getElementById("add").style.display = "block";
  var input = document.getElementById("new-task").value;
  var obj = {
    data: input,
    id: Math.random().toString(16).slice(2),
  };

  if (obj.data == "") {
    alert("Please Write Some Task");
  } else {
    com.push(obj);
    completed();
  }
}
