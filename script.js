const initLikes = 302
const initDislikes = 25
let likesCount = initLikes
let dislikeCount = initDislikes

let likesBtn= document.getElementById("likebtn")
let dislikeBtn = document.getElementById("dislikebtn")

likesBtn.innerText= "👍" + initLikes

dislikeBtn.innerText= "👎" + dislikeCount

function doLike(){
likesCount++;
likesBtn.innerText= "👍" + likesCount
disableButtons();
setCookie()
}
function dodisLike(){
    dislikeCount++;
    dislikeBtn.innerText= "👎" + dislikeCount
    disableButtons();
    }

    function disableButtons(){
        likesBtn.disabled= true
        dislikeBtn.disabled= true

    }

 function setCookie(){
document.cookie= "voted=true; SameSite=Strict; Max-Age="+60 

 }   

 window.onload = function(){
    if(document.cookie && document.cookie.indexOf("voted" )>-1){
        disableButtons()


    }


 }