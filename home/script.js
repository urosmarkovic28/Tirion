let meni = document.querySelector(".hamburger-menu") ;  

let navbar=document.querySelector(".navbar") ; 
meni.addEventListener("click",() =>{
   // nav baru pripada i hambureg meni gore i ceo meni ispod tako da na klik na hamburger ce da se promeni i on u x i meni ce da izleti sa desne strane
  navbar.classList.toggle("promeni") ; //ovaj toggle znaci na klik dodaje onom hamburgeru klasu promeni koja ga menja u x i ako ga kliknes ponovo ona ga vraca na hamburger i tako u krug 



}) ; 



//odavde vreme app

let lokacija=document.getElementById("lokacija") ; 
let temperatura = document.getElementById("vrednost-temperature") ; 
let opisVremena=document.getElementById("kako-je-napolju") ; 
let ikona = document.getElementById("ikona-temperature") ; 
window.addEventListener("load",()=>{

    let long ;
    let lat ; 
    
    

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(pozicija => {
               long=pozicija.coords.longitude ; 
               lat=pozicija.coords.latitude  ;  

               const pomocnilink = "https://cors-anywhere.herokuapp.com/" ; 
               
               const api = `${pomocnilink}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=fc864c0e49e8cc734e93474d566a2f05&lang=sr` ; 
    
               /*fetch(api) 
                  .then(respone =>{
                      return respone.json(); 
                  })
                  .then(data =>{

                    const {name} = data ; 
                    const {feels_like} = data.main ; 
                    const {description,id} = data.weather[0] ; 

                    lokacija.textContent= name ; 
                    temperatura.textContent=Math.round(feels_like-273) ; 
                    opisVremena.textContent = description ; 

                    ikona.scr = `http://openweathermap.org/img/wn/${id}@2x.png` ; 
                     
                    console.log(data) ; 
                  })
                  */
    
                 async function dohvatiApi(){

                    const responsee = await fetch(api) ;
                    const dataa = await responsee.json() ; 

                    const {name} = dataa ; 
                    const {feels_like} = dataa.main ; 
                    const {description,id} = dataa.weather[0] ; 

                    lokacija.textContent= name ; 
                    temperatura.textContent=Math.round(feels_like-273) ; 
                    opisVremena.textContent = description ; 

                    ikona.scr = `http://openweathermap.org/img/wn/${id}@2x.png` ; 
                     
                    console.log(dataa) ; 
                  }
                   dohvatiApi().catch(nekieror =>{
                       console.error(nekieror) ; 
                   })
    
    
    
            });
    }










});



// odavde BMI // 

var dugme=document.querySelector("#izracunaj") ;

 

dugme.addEventListener("click",() =>{

    var visina = parseInt(document.querySelector("#input-visina").value)  ;
    var tezina= parseInt(document.querySelector("#input-tezina").value)  ; 

var bmi  = (tezina/visina) ; 
bmi=bmi.toFixed(2);

var rezultat = document.querySelector("#rezultat") ; 
rezultat.innerHTML = `Tvoj BMI je : ${bmi}`
}) ; 


var refres=document.querySelector("#obrisi") ;

refres.addEventListener("click",() =>{
    window.location.reload() ; 
}) ; 


let bmiContainer=document.querySelector(".bmi-container") ; 


let x ; 
function prikaziBMI(){
 
  if(x===1){
    bmiContainer.style.display = "none" ; 
    return x = 0  ; 
  }
  else{
    bmiContainer.style.display="inline" ; 
    return x=1 ; 
  }



}