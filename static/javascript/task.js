
let taskform=document.getElementById('task-form')
let arr=[];
taskform.addEventListener('submit',function(event){
    event.preventDefault();
    let taskname=document.getElementById('display-task');
    localStorage.setItem('task',taskname.value);
    let val=document.getElementById('di').innerText=localStorage.getItem('task');
    
    
})
