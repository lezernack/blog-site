let todoArray = [];
const text = document.getElementById("text");
const addTaskButton = document.getElementById("add-task-btn");
const saveTaskButton = document.getElementById("save-todo-btn");
const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("saveIndex");

const Main = () => {
  const addTaskButton =
    (onclick,
    (e) => {
      e.preventDefault();

      let todo = localStorage.getItem("todo");

      if (todo === null) {
        todo = [];
      } else {
        todoArray = JSON.parse(todo);
      }

      if (text.value === "") {
        alert("Nothing has been put into the list");
        return false;
      }

      todoArray.push(text.value);

      text.value = "";

      localStorage.setItem("todo", JSON.stringify(todoArray));

      displayTodo();
    });

  console.log(displayTodo());

  function displayTodo() {
    let todo = localStorage.getItem("todo");
    if (todo === null) {
      todoArray = [];
    } else {
      todoArray = JSON.stringify(todo);
    }

    let htmlCode = "";

    todoArray.forEach((list, ind) => {
      htmlCode += `<div class="flex mb-4 items-center">
        <p class='w-full text-white font-bold'>${list}</p>
        <button onclick='edit(${ind})' class='flex-no-shrink p-2 ml-4 mr-2 rounded text-white text-grey bg-green-600'>Edit</button>
        <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 rounded text-white bg-red-500'>Delete</button>
        </div>`;
    });

    function deleteTodo(ind) {
      todo = localStorage.getItem("todo");

      todoArray = JSON.parse(todo);

      todoArray.splice(ind, 1);

      localStorage.setItem("todo", JSON.stringify(todoArray));

      displayTodo();
    }

    function edit(ind) {
      saveInd.value = ind;

      todo = localStorage.getItem("todo");

      todoArray = JSON.parse(todo);

      text.value = todoArray[ind];

      addTaskButton.style = { display: "none" };

      saveTaskButton.style = { display: "block" };
    }

    const saveTaskButton = (onClick) => {
      const todo = localStorage.getItem("todo");

      todoArray = JSON.parse(todo);

      let id = saveInd.value;

      todoArray.splice(id, 1);
      todoArray.push(text.value);

      addTaskButton.style = { display: "none" };

      text.value = "";

      localStorage.setItem("todo", JSON.stringify(todoArray));

      return displayTodo();
    };
  }

  return (
    <div>
      <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans mt-20">
        <div class="bg-gray-900 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div class="mb-4">
            <h1 class="text-3xl md:text-4xl text-indigo-600 font-medium mb-2">
              To-Do List App
            </h1>
            <div class="flex mt-4">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                name="text"
                id="text"
                placeholder="Add Todo"
              />
              <input type="hidden" id="saveIndex" />
              <button
                class="p-2 lg:px-4 md:mx-2 text-center text-white border border-solid border-indigo-600 rounded text-white bg-indigo-600 transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
                id="add-task-btn"
              >
                Add
              </button>
              <button
                class="p-2 lg:px-4 md:mx-2 text-center border border-solid border-indigo-600 rounded bg-indigo-600 text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
                style="display: none"
                id="save-todo-btn"
              >
                Edit Todo
              </button>
            </div>
          </div>
          <div id="listBox"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
