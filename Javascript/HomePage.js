window.addEventListener("DOMContentLoaded",function(){
    
    const winddiv=document.getElementById("wind")
    const sun=document.querySelector("#sun")
    const compas=document.querySelector("#compas")
    const placediv=document.querySelector("#blackboxtext")
    const prevbtn=document.querySelector("#prevId")
    const nextbtn=document.querySelector("#nextId")
 
   
    let data=[{name:"Newyork",area:"USA",windspeed:'130kmph',direction:36.23,temp:24},
         {name:"wuhan",area:"China",windspeed:'301kmph',direction:69.63,temp:16},
         {name:"Islamabad",area:"Pakistan",windspeed:'24kmph',direction:71.3,temp:30},
         {name:"Delhi",area:"India",windspeed:'104kmph',direction:23.3,temp:50}
       
 
 ]
 let count=0
 
 winddiv.innerHTML=data[count].windspeed
 placediv.innerHTML=data[count].name
 compas.innerHTML=data[count].direction
 sun.innerHTML=data[count].temp
 
 
 
 prevbtn.addEventListener("click",function(){
 
     console.log("clicked me")
     if(count==0){
         count=3
          
 winddiv.innerHTML=data[count].windspeed
 placediv.innerHTML=data[count].name
 compas.innerHTML=data[count].direction
 sun.innerHTML=data[count].temp
 
     }
     if(count>=0){
         count--
          
 winddiv.innerHTML=data[count].windspeed
 placediv.innerHTML=data[count].name
 compas.innerHTML=data[count].direction
 sun.innerHTML=data[count].temp
 
     }
 
 })
 
 nextbtn.addEventListener("click",function(){
 
     console.log("Clicked next btn")
     if(count==3){
         count=0
          
 winddiv.innerHTML=data[count].windspeed
 placediv.innerHTML=data[count].name
 compas.innerHTML=data[count].direction
 sun.innerHTML=data[count].temp
 
 
     }
     if(count<=3){
         count++
          
 winddiv.innerHTML=data[count].windspeed
 placediv.innerHTML=data[count].name
 compas.innerHTML=data[count].direction
 sun.innerHTML=data[count].temp
 
     }
 
 
 
 })
 const titlediv=document.getElementById("title")
  const daydiv=document.getElementById("day")
  const buttondiv=document.getElementById("button")
//   const prevbtn=document.querySelector("#prevId")
//   const nextbtn=document.querySelector("#nextId")

  let pressdetails=[{ptitle:"Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated",pday:"NewYork times|march 23,2021",pbutton:"Read-Article"},
  {ptitle:"Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated",pday:"NewYork times|march 23,2021",pbutton:"Read-Article"},
  {ptitle:"Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated",pday:"NewYork times|march 23,2021",pbutton:"Read-Article"}]
  

  let count=0
 
  titlediv.innerHTML=pressdetails[count].ptitle
  daydiv.innerHTML=pressdetails[count].pday
  buttondiv.innerHTML=pressdetails[count].pbutton
 
 
 } )
