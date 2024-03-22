'use strict'
const el1 = document.querySelector('li')
const el2 = document.querySelector('li:last-child');
const hide = document.getElementById('hideComplete')

function toggleComplete(e){
    e.target.classList.toggle('complete')
}
el1.addEventListener('click',toggleComplete)
el2.addEventListener('click',toggleComplete)

// PART2:

const items =[
    {task:'Buy groceries' , complete: false},
    {task:'Clean Home' , complete: true}
]

{/* <li class="list-group-item">
<span>Buy Milk</span>
<button class="btn">&times;</button>
</li> */}
const list = document.getElementById('list')

const createTask = function(task){
    const span = document.createElement('span')
    span.textContent = task
    return span
}
const createbtn = function(){
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerHTML = '&times';
    return btn
}
const createList = function(item){
    const list = document.createElement('li')
    list.classList.add('list-group-item')
    list.append(createTask(item.task) , createbtn())
    list.addEventListener('click',toggleComplete)
    return list
}

const buildList = function(items){
    list.innerHTML = ''
    const filtered = hide.checked ? items.filter(item=>!item.complete) : items
    for(let item of filtered){
        list.append(createList(item))
    }
}
buildList(items)

// PART 3

const form = document.getElementById('form')
const item = document.getElementById('item')

form.addEventListener('submit', function(e){
    e.preventDefault()
    if(item.value){
        const iteM = {task:item.value , complete: true}
        items.push(iteM)
    }
    item.value = ''
    buildList(items)
})

// PART 4

hide.addEventListener('change',function(){
    buildList(items)
})


