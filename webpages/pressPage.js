window.addEventListener("DOMContentLoaded",function(){
    
    const h1=document.getElementById("headingId")
    const c1=document.getElementById("contentId")
    const r1=document.getElementById("readarticleId")
    const prevbtn=document.getElementById("prevId")
    const nextbtn=document.getElementById("nextId")

    let page1=[{news:"Discovery’s newest property in Kaua’i North Shore Preserve",cont:"Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua’i. North Shore Preserve, a one-of-a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings",btn:"Readarticle"}

    ,{news:"James Island <br>Discovery's Newest Property",cont:"Discovery Land Company is excited to announce our 24th private luxury residential community. James Island Golf and Ocean Club, a 780-acre private island in British Columbia with only 76 lots, is Discovery Land Company’s most exclusive community to date and Discovery’s first project in Canada.",btn:"Readarticle"},

    ,{news:"CostaTerra<br>Discovery's 23rd property",cont:"Discovery Land Company, the world’s leading developer of luxury private residential communities, clubs and resorts, has announced its 23rd property and first in Europe.",btn:"Readarticle"}
]
    
count=0
h1.innerHTML=page1[count].news
c1.innerHTML=page1[count].cont
r1.innerHTML=page1[count].btn



prevbtn.addEventListener("click",function(){
 
    console.log("clicked me")
    if(count==0){
        count=3
         
        h1.innerHTML=page1[count].news
        c1.innerHTML=page1[count].cont
        r1.innerHTML=page1[count].btn
        console.log(count)

    }
    if(count>=0){
        count--
         
        h1.innerHTML=page1[count].news
        c1.innerHTML=page1[count].cont
        r1.innerHTML=page1[count].btn
        console.log(count)

        
    }

})

nextbtn.addEventListener("click",function(){

    console.log("Clicked next btn")
    if(count==3){
        count=0
         
        h1.innerHTML=page1[count].news
c1.innerHTML=page1[count].cont
r1.innerHTML=page1[count].btn



    }
    if(count<=3){
        count++
         
        h1.innerHTML=page1[count].news
c1.innerHTML=page1[count].cont
r1.innerHTML=page1[count].btn

    }



})

 })
 
 
