function selectedLink(clickedLink){
    const navLink = document.getElementsByClassName("nav-link");

    for(let i =0 ; i<navLink.length ; i++){
        navLink[i].classList.remove("active")
    }

    clickedLink.classList.add("active")
}


// const relativeMore = document.querySelectorAll(".relative-more")
const absoluteMore = document.getElementsByClassName("absolute-more")
const hiddenMore = document.getElementsByClassName("hidden")


function moreSelectedLink(){
   
    for(var i=0;i<absoluteMore.length;i++){
        if(absoluteMore[i].style.display === 'none'){
            return absoluteMore[i].style.display = 'block'
        } else {
            return absoluteMore[i].style.display = 'none'
        }

       
    }
    if(hiddenMore.style.backgroundColor === ''){
        hiddenMore.style.backgroundColor = "black"
    }else{
        hiddenMore.style.backgroundColor = ''
    }
}






