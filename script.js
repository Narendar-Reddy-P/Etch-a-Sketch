let pixels=16;
let container=document.querySelector(".container");
createSheet(pixels);
let btn=document.querySelector(".btn");
let input=document.querySelector('input');

btn.addEventListener("click",function(e){
   e.preventDefault();
   container.innerHTML="";
   pixels =parseInt(input.value);
   if(pixels>100){
      pixels=100;
   }else if(pixels<=0){
      pixels=16;
   }
   createSheet(pixels);
})

function createSheet(pixels){
      for(let i=0;i<pixels;i++){
         let row=document.createElement("div");
         row.setAttribute("class",`row`);
         container.appendChild(row);
         for(let j=0;j<pixels;j++){
            let box=document.createElement("div");
            box.setAttribute("class","box");
            row.appendChild(box);
            box.addEventListener("mouseover",function(){
               box.classList.add("hovered");
            })
            box.addEventListener("touchstart",function(){
               box.classList.add("hovered");
            })
         }
      }
}