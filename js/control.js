const backImage = document.querySelector(".container-image")
const elContent = document.querySelector(".content")
const nextBtn = document.querySelector(".content-control-icon")
const elTime = document.querySelector(".time-title")
const extraTime = document.querySelector(".time-add-span")
const answerEl = document.querySelector(".imgBox-img")
const showHideIcon = document.querySelector(".show-hide-icon")
console.log(showHideIcon);


const elTitle = document.createElement("h2")
elContent.appendChild(elTitle)
elTitle.textContent = "Click the next button";
let showIcon = 1;
elTitle.className = "content-word"
function showHideAnswerFunc (dataAll){
    showHideIcon.addEventListener("click", (e) =>{
        showIcon++
        console.log(showIcon);
        if(showIcon % 2 === 0){
            answerEl.classList.add("imgBox-img-active")
            showHideIcon.src = "./images/show.png"    
        }
        else{
            answerEl.className = "imgBox-img"
            showHideIcon.src = "./images/hide.png"    
        }
    })
}

showHideAnswerFunc(allData)

// change words function
let countInterval = ""
function changeWords(data){
    nextBtn.addEventListener("click", (e) => {
        let nextWord = Math.abs(Math.trunc(Math.random() * allData.length-1))
        localStorage.setItem("oneWord", JSON.stringify(data[Math.abs(Math.trunc(Math.random() * data.length-1))]))  

        let word = JSON.parse(localStorage.getItem("oneWord"))
        console.log(word);
        
        elTitle.textContent = word.uz;
        elTime.textContent = word.time
        clearInterval(countInterval)
        answerEl.src = word.src
        answerEl.alt = "answer image"

        // console.log(data[nextWord]);
        
        countInterval = setInterval(function(){            
            elTime.textContent = elTime.textContent - 1;
            if(elTime.textContent == 0){
                localStorage.setItem("oneWord", JSON.stringify(data[Math.abs(Math.trunc(Math.random() * data.length-1))]))
                elTime.textContent = word.time

                elTitle.textContent = JSON.parse(localStorage.getItem("oneWord")).uz
                answerEl.src = JSON.parse(localStorage.getItem("oneWord")).src
                
            }
        }, 1000)
    })
}
changeWords(allData)

function addExtraTimeFunc(allInformation){
    extraTime.addEventListener("click", (e) => {
        elTime.textContent = (elTime.textContent*1) + 5
        
    })
    
}
addExtraTimeFunc(allData)



// change background image 
let counter = 0;
setInterval(function(){    
    counter++
    backImage.src = backgroundImages[counter];
    
    if(counter == backgroundImages.length - 1){
        counter = 0
    }
}, 7000)



