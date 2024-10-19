const bookTitle = document.getElementById("book-title");
const bookInfo = document.getElementById("book-info");
const bookImg = document.getElementById("image");
const imgBox = document.querySelector("img-box");

function changeBook(){
    bookTitle.innerHTML = "New Eden: Live To Play, Play To Live";
    bookInfo.innerHTML = "In a world of constant competition, one man aims for the top. In this new genre VRMMORPG, he plans on becoming the strongest at all costs";
    bookImg.setAttribute("src", "images/img 2.jpeg");
    bookTitle.style.maxWidth = "140px";
}

function initialPage(){
    bookTitle.innerHTML = "Strongest Necromancer Of Heaven's Gate";
    bookInfo.innerHTML = "Lucien was more than ready to embark on his new adventure to save a dying world from destruction as part of Heaven's Gate Project";
    bookImg.setAttribute("src", "images/img 1.jpeg");
    bookTitle.style.maxWidth = "200px";
}

function thirdBook(){
    bookTitle.innerHTML = "I Just Inherited The Arcane Emperor's Legacy";
    bookInfo.innerHTML = "In the Solarian Empire, people were divided by their blood. The nobles enjoyed their life in wealth with fine wine and amazing food. They reigned supreme over the commoners...";
    bookImg.setAttribute("src", "images/img 3.jpeg");
    bookTitle.style.maxWidth = "170px";
    bookInfo.style.marginTop = "-20px";
} 

setInterval(() => {
    setTimeout(() => {
        changeBook();
    }, 1000);
    
    setTimeout(() => {
        thirdBook();
    }, 4000);
    setTimeout(() => {
        initialPage();
    }, 7000);
}, 10000);