const links=document.querySelectorAll('.navlist')

links.forEach((link=>{
    link.addEventListener("click",()=>{
        if(link.classList.contains('active')){link.classList.remove('active')}
        else{ 
        link.classList.add('active') }},{once:false})
}))

// when i click on one icon it should become active and then remove other active icons