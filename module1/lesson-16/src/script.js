// "use strict"


// // ======================= HTML element ======================= //

// const toast = document.querySelector('.toast'),
//     notif = document.querySelector('#notif'),
//     submitForm = document.querySelector('#submit__form'),
//     taskTitle = document.querySelector('#task'),
//     doneTask = document.querySelector('#done'),
//     progressTask = document.querySelector('#progress'),
//     listTask = document.querySelector('.list'),

//     delTask = document.querySelectorAll('.del'),
//     editTask = document.querySelectorAll('.edit'),
//     checkTask = document.querySelectorAll('.check');
    
    
    
    
//     // ======================= task list ======================= //

// let task = []

// //   >>>>>>>>>>>>>>>>>>>>>>>>>>>  dynaming task list rendering started <<<<<<<<<<<<<<<<<<< //

// function renderTasklist(taskList) {
//     if(taskList.length){
//         taskList.forEach((task) => {
//             const taskItem = createElemnt(
//                 'li',"w-full p-3 flex justify-between shadow-lg rounded-md mb-3 border bg-white text-lg list__item relative",
//                 `<p class="text-xl text-[#5A5A5A]">${task.title}</p>
//                 <div class="btn-group flex justify-between">
//                     <i data-del="${task.id}" class='del bx bx-trash text-2xl text-red-600 active:text-red-800 mx-2 cursor-pointer' ></i>
//                     <i data-edit="${task.id}"  class='edit bx bx-edit text-2xl text-sky-600 active:text-sky-800 mx-2 cursor-pointer'></i>
//                     <i data-check="${task.id}"  class='check bx bx-check-circle text-2xl ${task.status ? "text-green-600 active:text-green-800" : "text-black active:text-[#3a3a3a]"} mx-2 cursor-pointer' ></i>
//                 </div>
//                 <div class="modal flex gap-1 absolute w-full top-0 left-0 hidden">
//                 <label for="task" class="w-full relative">
//                     <input id="task" type="text" placeholder="Enter new task title" class="w-full p-3 shadow ring-4 focus:outline-none ring-cyan-500 border-spacing-1 rounded-sm border">
//                 </label>
//                 <button type="submit" class="btn  py-3 px-10 bg-cyan-600 ring-4 text-white focus:ring-cyan-200 rounded-sm active:bg-cyan-900">
//                     EDIT
//                 </button>
//             </div>
//                 `
//             );

//             listTask.append(taskItem)
//         });

//     } else {
//         listTask.innerHTML = "<h2 class='text-center text-xl text-red-500'>NOT FOUND!</h2>"
//     }
// }

// renderTasklist(task)


// //   >>>>>>>>>>>>>>>>>>>>>>>>>>>  dynaming task list rendering end <<<<<<<<<<<<<<<<<<< //


// //   >>>>>>>>>>>>>>>>>>>>>>>>>>>  count task done or false <<<<<<<<<<<<<<<<<<< //


// function countTaskDone(taskList){
//     const done = taskList.filter(item => item.staus === true).length
//     const progress = taskList.filter(item => item.staus === false).length

//     console.log(done, progress);

//     doneTask.textContent = done
//     progressTask.textContent = progress
    
// }

// countTaskDone(task)

// //   >>>>>>>>>>>>>>>>>>>>>>>>>>>  count task done or false finished<<<<<<<<<<<<<<<<<<< //


// //   >>>>>>>>>>>>>>>>>>>>>>>>>>>  Add new task <<<<<<<<<<<<<<<<<<< //

// function addNewTask(){
//     const title = taskTitle.value;
    
//     const newTask = {
//         id: Date.now(),
//         title: title,
//         staus: false
//     }

//     const check = {
//         title: newTask.title.trim().length === 0
//     }

//     if(check.title){
//         alert('Pleace enter a title for this task')
//         //toast warning message
//     } else{
//         task.push(newTask)
//         taskTitle.value = ''

//         //toast success message
//     }
// }

// submitForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     addNewTask()
//     listTask.innerHTML = ''
//     renderTasklist(task)
//     countTaskDone(task)
// })


// //   >>>>>>>>>>>>>>>>>>>>>>>>>>>  Add new task end <<<<<<<<<<<<<<<<<<< //


// listTask.addEventListener('click', (e) => {
//     if(e.target.classList.contains('del')){
//         listTask.innerHTML = '';
//         const id = e.target.getAttribute('data-del')
//         task = task.filter(task => task.id != id);

//         renderTasklist(task)
//         countTaskDone(task)

//     } else if(e.target.classList.contains('edit')){
//         const id = e.target.getAttribute('data-edit')
//         const todo = task.filter(item => item.id == id)
//         const modalInput = listTask.querySelector('.modal')
//         modalInput.classList.remove('hidden')
        



//     }
// })


// // btn.addEventListener('click', (e) => {
// //     console.log(e.target);
// // })


// // function renderModal(todo){
// // }







"use strict";

let exit = document.querySelector("#exit");
let userName = document.querySelector("#user_name");
let token = localStorage.getItem("token");
let mainList = document.querySelector('.list');

// logout

exit.addEventListener("click", () => {
    localStorage.clear();
    logout();
});

function logout() {
    let token = localStorage.getItem("token");
    if (!token) {
        window.location.replace("./login.html");
    }
}



(function () {
    let token = localStorage.getItem("token");
    let user = localStorage.getItem("username");
    console.log(user)
    if (!token) {
        window.location.replace("./login.html");
    } else {
        userName.textContent = user;
    }
})();




// list



const listTasks = async () => {
    try {
        const response = await fetch('http://178.62.198.221:3003/task', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })

        const result = await response.json();
        renderTasklist(result)
    } catch (err) {
        console.log(err)
    }
}




function renderTasklist(tasklist) {
    console.log(tasklist);

    if (tasklist.length) {
        tasklist.forEach((task) => {
            // console.log(task);

            const taskItem = createElement(
                "li",
                "w-full p-3 flex justify-between shadow-lg bg-white rounded-md mb-3 list_item",
                `
              <p class="text-xl text-[#5A5A5A]"> ${task.title}</p>
                <div class="btn-group flex justify-between">
                  <i
                    data-del="${task.id
                }"  class="del bx bx-trash text-2xl text-red-600 active:text-red-800 mx-2 cursor-pointer"
                  ></i>
                  <i
                    data-edit="${task.id
                }" class="edit bx bx-edit text-2xl text-sky-600 active:text-sky-800 mx-2 cursor-pointer"
                  ></i>
                  <i
                   data-check="${task.id
                }" class="check bx bx-check-circle text-2xl ${task.status
                    ? "text-green-600 active:text-green-800"
                    : "text-black active:text-[#3a3a3a]"
                } mx-2 cursor-pointer"
                  ></i>
                </div>
            `
            );

            mainList.append(taskItem);
        });
    } else {
        mainList.innerHTML =
            "<h2 class='text-center text-xl text-red-500'> NOT FOUND !</h2>";
    }
}


console.log(listTasks());