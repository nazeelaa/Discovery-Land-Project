window.addEventListener("DOMContentLoaded", function(){
  const titlediv=document.getElementById("title")
  const titlediv1=document.getElementById("title1")
  const titlediv2=document.getElementById("title2")
  const titlediv3=document.getElementById("title3")
  const daydiv=document.getElementById("day")
  const daydiv1=document.getElementById("day1")
  const daydiv2=document.getElementById("day2")
  const daydiv3=document.getElementById("day3")
//   const buttondiv=document.getElementById("button1")
//   const buttondiv=document.getElementById("button2")
//   const buttondiv=document.getElementById("button3")
 const prevbtn=document.querySelector("#prevId")
const nextbtn=document.querySelector("#nextId")

  let pressdetails=[{ptitle:"Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated",pday:"NewYork times|march 23,2021",pbutton:"Read-Article"},
  {ptitle:"Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated",pday:"NewYork times|march 23,2021",pbutton:"Read-Article"},
  {ptitle:"Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated",pday:"NewYork times|march 23,2021",pbutton:"Read-Article"}]

  let pressdetails1=[{ptitle1:"Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated",pday1:"NewYork times|march 23,2021",pbutton1:"Read-Article"},
  {ptitle1:"Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated",pday1:"NewYork times|march 23,2021",pbutton1:"Read-Article"},
  {ptitle1:"Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated",pday1:"NewYork times|march 23,2021",pbutton1:"Read-Article"}]

  let pressdetails2=[{ptitle2:"Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated",pday2:"NewYork times|march 23,2021",pbutton2:"Read-Article"},
  {ptitle2:"Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated",pday2:"NewYork times|march 23,2021",pbutton2:"Read-Article"},
  {ptitle2:"Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated",pday2:"NewYork times|march 23,2021",pbutton2:"Read-Article"}]

  let pressdetails3=[{ptitle3:"Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated",pday3:"NewYork times|march 23,2021",pbutton3:"Read-Article"},
  {ptitle3:"Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated",pday3:"NewYork times|march 23,2021",pbutton3:"Read-Article"},
  {ptitle3:"Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated",pday3:"NewYork times|march 23,2021",pbutton3:"Read-Article"}]


 

  let count=0
  titlediv.innerHTML=pressdetails[count].ptitle
  daydiv.innerHTML=pressdetails[count].pday
  titlediv1.innerHTML=pressdetails1[count].ptitle1
  daydiv1.innerHTML=pressdetails1[count].pday1
  titlediv2.innerHTML=pressdetails2[count].ptitle2
  daydiv2.innerHTML=pressdetails2[count].pday2
  titlediv3.innerHTML=pressdetails3[count].ptitle3
  daydiv3.innerHTML=pressdetails3[count].pday3



  prevbtn.addEventListener("click",function(){
 
    console.log("clicked me")
    if(count==0){
        count=3
         
        titlediv.innerHTML=pressdetails[count].ptitle
        titlediv1.innerHTML=pressdetails1[count].ptitle1
        titlediv2.innerHTML=pressdetails2[count].ptitle2
        titlediv3.innerHTML=pressdetails3[count].ptitle3
        daydiv.innerHTML=pressdetails[count].pday
        daydiv1.innerHTML=pressdetails1[count].pday1
        daydiv2.innerHTML=pressdetails2[count].pday2
        daydiv3.innerHTML=pressdetails3[count].pday3
    }
    if(count>=0){
        count--
         
        titlediv.innerHTML=pressdetails[count].ptitle
        titlediv1.innerHTML=pressdetails1[count].ptitle1
        titlediv2.innerHTML=pressdetails2[count].ptitle2
        titlediv3.innerHTML=pressdetails3[count].ptitle3
        daydiv.innerHTML=pressdetails[count].pday
        daydiv1.innerHTML=pressdetails1[count].pday1
        daydiv2.innerHTML=pressdetails2[count].pday2
        daydiv3.innerHTML=pressdetails3[count].pday3
    }

})

nextbtn.addEventListener("click",function(){

    console.log("Clicked next btn")
    if(count==3){
        count=0
         
        titlediv.innerHTML=pressdetails[count].ptitle
        titlediv1.innerHTML=pressdetails1[count].ptitle1
        titlediv2.innerHTML=pressdetails2[count].ptitle2
        titlediv3.innerHTML=pressdetails3[count].ptitle3
        daydiv.innerHTML=pressdetails[count].pday
        daydiv1.innerHTML=pressdetails1[count].pday1
        daydiv2.innerHTML=pressdetails2[count].pday2
        daydiv3.innerHTML=pressdetails3[count].pday3
    }
    if(count<=3){
        count++
         
        titlediv.innerHTML=pressdetails[count].ptitle
        titlediv1.innerHTML=pressdetails1[count].ptitle1
        titlediv2.innerHTML=pressdetails2[count].ptitle2
        titlediv3.innerHTML=pressdetails3[count].ptitle3
        daydiv.innerHTML=pressdetails[count].pday
        daydiv1.innerHTML=pressdetails1[count].pday1
        daydiv2.innerHTML=pressdetails2[count].pday2
        daydiv3.innerHTML=pressdetails3[count].pday3
    }
    
    
    
    })

})
 
