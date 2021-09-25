let bottoms=document.querySelectorAll(".bottom");
for(i of bottoms){
    i.addEventListener("click", function(){
    if(i.classList.contains(".active")){
        i.classList.remove(".active")
    } else{i.classList.add('.active')}  
})}
   