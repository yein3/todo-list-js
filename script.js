// VARIABLE GLOBAL
let tasks = [
  { text:"Estudiar JS", done:false },
  { text:"Leer documentación", done:false },
  { text:"Practicar HTML", done:false },
  { text:"Aprender CSS", done:false },
  { text:"Hacer ejercicio", done:false },
  { text:"Enviar correo", done:true },
  { text:"Comprar comida", done:true },
  { text:"Revisar proyecto", done:true }
];

function renderTasks(){
  const pending = document.getElementById("pendingList");
  const completed = document.getElementById("completedList");

  pending.innerHTML="";
  completed.innerHTML="";

  tasks.forEach((task, index)=>{
    const li = document.createElement("li");
    li.className = task.done ? "completed":"pending";

    const checkbox = document.createElement("input");
    checkbox.type="checkbox";
    checkbox.checked = task.done;

    checkbox.onchange = ()=>{
      tasks[index].done = !tasks[index].done;
      renderTasks();
    };

    li.appendChild(checkbox);
    li.append(" " + task.text);

    if(task.done){
      completed.appendChild(li);
    }else{
      pending.appendChild(li);
    }
  });
}

function addTask(){
  const input = document.getElementById("taskInput");

  if(input.value.trim()==="") return;

  tasks.push({
    text: input.value,
    done:false
  });

  input.value="";
  renderTasks();
}

renderTasks();
