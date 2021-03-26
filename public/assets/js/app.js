let ulEl = $(`<ul></ul>`)
ulEl.css("id", "TabletUl")
let navItem = ["Intro", "Portfolio", "About Me", "Contact"]
let hrefContent = ["#top", "#portfolio", "#about", "#contact"]

let index = 0;
navItem.forEach((element) => {
   
        let liEl =  $(`<li><a href=${hrefContent[index]}>${element}</a></li>`)

        ulEl.append(liEl)
        index++
})
$("#top").prepend(ulEl);



let landingPage = document.querySelector("#top")

/* landingPage.style.backgroundImage  = "url('images/code1.jpg')"
 */
imgsArray = ['background1.jpg', 'background2.jpg', 'background3.jpg']


setInterval(function() {
        let randomNu = Math.floor(Math.random() * imgsArray.length) 
        console.log(randomNu)
        landingPage.style.backgroundImage  = 'url("images/' + imgsArray[randomNu] + '")' 

    



} , 2000)
