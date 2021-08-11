'use strict';

let cats = [{ name: "Mizi", img: 'cat.jpg', clicks:0 },
            { name: "Pizi", img: 'cat2.jpg', clicks:0 },
            { name: "Chuck & Berry", img: 'cat3.jpg', clicks:0 },
            { name: "Bob", img: 'cat4.jpg', clicks:0 },
            { name: "Kitty", img: 'cat5.jpg', clicks:0 },]

const list=document.getElementById('catlist');
const display=document.getElementById('display');


for (let index = 0; index < cats.length; index++) {
    const element = cats[index];
    const li = document.createElement('li');
    li.textContent=element.name;
    li.addEventListener('click', function(){
      display.innerHTML = `
                            <div>${cats[index].name}</div>
                            <img src="${cats[index].img}" onclick="test(${index})">
                            <div>clicks:${cats[index].clicks}</div>
                            
                            `
    })
    list.appendChild(li);
    
}
function test(index){
   cats[index].clicks++;
   display.innerHTML = `
   <div>${cats[index].name}</div>
   <img src="${cats[index].img}" onclick="test(${index})">
   <div>clicks:${cats[index].clicks}</div>
   
   `
}