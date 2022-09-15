// in ra danh sach todo , la mot cai danh sach 
const todos = [
    {
        id:1,
        todo:"shopping"
    },
    {
        id:2,
        todo:"Playing game"
    },
    {
        id:3,
        todo:"text to crush"
    },
    {
        id:4,
        todo:"some time good job"
    }
]
//hien ra danh sach cac to do trong todos 
const list  = document.querySelector(".todo ul")
const btnDelete = document.querySelector(".btn-delete")
const btnAdd = document.querySelector(".btn-add")
renderTodo(todos)
//delete task 
btnDelete.addEventListener("click", function(e) {
    todos.shift()
    renderTodo(todos)
})
// add tast 
btnAdd.addEventListener("click", function(e){
    todos.unshift({id: todos.length + 1,todo:"Random"})
    renderTodo(todos)
})
function renderTodo(todos){
    let todoHtml = ""// cộng tất cả các todo lại với nhau 
    
    todos.forEach(val => {

    todoHtml += `<li>${val.todo}</li>`
    
    })

    list.innerHTML = todoHtml   
}





