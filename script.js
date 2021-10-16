const Home=document.querySelector('.navlist')

Home.addEventListener("click",()=>{
   Home.classList.toggle('active')
})
Home.addEventListener('hover',()=>{
    Home.classList.toggle('show')
})