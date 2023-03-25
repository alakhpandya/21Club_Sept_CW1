const master_container = document.querySelector('.master-container')
const add_task_btn = document.querySelector('.btn');
const form_input = document.querySelector('input');
const task_container = document.createElement('div');
var task_name;
var check_icon_array = [];
var trash_icon_array = [];
var tasks_array = [];

task_container.setAttribute('class', 'task-container');

add_task_btn.addEventListener('click', () => {
    if (master_container.childElementCount == 1){
        master_container.appendChild(task_container);
    }
    
    if (task_container.childElementCount >= 1){
        var seperator = document.createElement('hr');
        seperator.setAttribute('class', 'seperator');
        task_container.appendChild(seperator);
    }
    var new_task = document.createElement('div');
    new_task.setAttribute('class', 'new-task');
    task_name = form_input.value;

    var p = document.createElement('p');
    p.innerText = `${task_name}`
    var div = document.createElement('div');
    `
    <div>
    <span class="icons"><i class="fa-solid fa-check check-icon"></i></span>
    <span class="icons"><i class="fa-solid fa-trash trash-icon"></i></span>
    </div>`;
    task_container.appendChild(new_task);
})



for(let i = 0; i < check_icon_array.length; i++){
    check_icon_array[i].addEventListener('click', () => {
        check_icon_array = document.getElementsByClassName('check-icon');
        trash_icon_array = document.getElementsByClassName('trash-icon');
        tasks_array = document.getElementsByClassName('new-task');
        tasks_array[i].style.textDecoration = 'line-through';
        console.log('event listened');
    })
}
// if (master_container.childElementCount > 1){
//     console.log('entered in if');
// }