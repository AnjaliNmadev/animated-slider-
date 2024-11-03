let next = document.querySelector(".next");
let pre = document.querySelector(".pre");

next.addEventListener('click' , ()=>{
    let items = document.querySelectorAll(".items");
    document.querySelector(".slider").appendChild(items[0]);
})
pre.addEventListener('click' , ()=>{
    let items = document.querySelectorAll(".items");
    document.querySelector(".slider").prepend(items[items.length - 1]);
})

