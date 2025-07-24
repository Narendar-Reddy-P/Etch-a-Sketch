let pixels=16;
createSheet(pixels);
let btn=document.querySelector(".btn");
let input=document.querySelector('input');
btn.addEventListener("click",function(){
   pixels =parseInt(input.value);
   createSheet(pixels);
})

function createSheet(pixels){
      let divSet=document.querySelectorAll('.container');
      divSet.forEach(function(div){
         for(let i=0;i<pixels;i++){
            let element=document.createElement("div");
            element.setAttribute("class","box");
            div.appendChild((element));
         }
      })
      let boxes=document.querySelectorAll('.box');
      boxes.forEach(function(box){
         box.addEventListener("mouseover",function(){
            box.classList.add("hovered");
         });
      })
}