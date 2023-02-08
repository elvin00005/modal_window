const open=document.getElementById('myBtn').addEventListener('click',addClass)
const close =document.getElementById('close').addEventListener('click',removeClass)
const modal = document.querySelector('.modal_window')
const myBtn = document.getElementById('add').addEventListener('click', addFullname)
const modalBody = document.querySelector('.modal_window__body')
const inp = document.querySelector('input')

function addClass(){
    modal.classList.add('active')
}
function removeClass(){
    modal.classList.remove('active')
}

function addFullname(){
    const p = document.createElement('p')
    p.classList.add('p')
    p.innerText = inp.value
    modalBody.append(p)
}
inp.addEventListener('focus',(e)=>{
    e.target.style.background ='pink';
})
