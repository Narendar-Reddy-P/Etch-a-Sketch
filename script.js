let pixels=16;
createSheet(pixels);
let btn=document.querySelector(".btn");
let input=document.querySelector('input');
btn.addEventListener("click",function(){
   pixels =parseInt(input.value);
   createSheet(pixels);
})

function createSheet(pixels){
   let container=document.querySelector(".container");
      for(let i=0;i<pixels;i++){
         let row=document.createElement("div");
         row.setAttribute("class",`row`);
         container.appendChild(row);
         for(let j=0;j<pixels;j++){
            let box=document.createElement("div");
            box.setAttribute("class","box");
            row.appendChild(box);
            box.addEventListener("mouseover",function(){
               box.classList.add(".hovered");
            })
         }
      }
}