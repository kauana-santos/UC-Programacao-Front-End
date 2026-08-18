let sidebar = document.querySelector('.sidebar')
let alternar = document.querySelector('.toggle')

alternar.addEventListener("click", () =>{
    sidebar.classList.toggle("open")
})