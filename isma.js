et slide=document.querySelectorAll(".patientReview");
let card=document.querySelectorAll(".patientReview");
let connectBtn=document.getElementById("connectBtn");
let count=0;
slide.forEach(function(slide, index){
    slide.style.left='${index*100}%'
});
function myFun(){
    slide.forEach(function(curVa1){
        curVa1.style.transform='translatex(-${count*100}%)'
    })
}
setInterval(function(){
    count++;
    if (count==slide.length){
        count=0;
    }
},2000)
card.forEach(function(cards){
    cards.addEventListener("click",function(){
        console.log(cards);
        document.queryselector(".detail").stlye.display="block"
        document.queryselector(".content").innerHTML=
        
                <img src=${catds.firstElementchild.src} alt="">
                <div class="contentText">
                    <h1>Erickford</h1>
                    <p>                       lorem ipsum,elit.officia</p>
                </div>
        closeBtn.addEventlistener("click",function(){
            document.queryselector(".detail").style.display="none"
        })
    })
})
connectBtn.addEventlistener("click",function(){
    let email=document.getElementById("email");
    let pass=document.getElementById("pass");
    
    if(email.value==""$$ pass.value==){
        alert("Enter Details")
    }else {
        alert("You logged IN")
    }
})