let meni = document.querySelector(".hamburger-menu") ;  

let navbar=document.querySelector(".navbar") ; 
meni.addEventListener("click",() =>{
   // nav baru pripada i hambureg meni gore i ceo meni ispod tako da na klik na hamburger ce da se promeni i on u x i meni ce da izleti sa desne strane
  navbar.classList.toggle("promeni") ; //ovaj toggle znaci na klik dodaje onom hamburgeru klasu promeni koja ga menja u x i ako ga kliknes ponovo ona ga vraca na hamburger i tako u krug 



}) ; 