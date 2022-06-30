"use strict";
const plats = [ // plats inject json
    {
        imgSrc: "./assets/img/img-01.jpg",
        title:"UN SUPER TITRE",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolor dolore error excepturi exercitationem in molestias nam, odit sequi similique dolor dolore error excepturi exercitationem in molestias nam, odit sequi"
    },
    {
        imgSrc: "./assets/img/img-02.jpg",
        title:"UN SUPER TITRE",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolor dolore error excepturi exercitationem in molestias nam, odit sequi similique dolor dolore error excepturi exercitatione"
    }, {
        imgSrc: "./assets/img/img-03.jpg",
        title:"UN SUPER TITRE",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolor dolore error excepturi exercitationem in molestias nam, odit sequi similique dolor dolore error excepturi exercitationem in molestias nam, odit sequi?"
    },
    {
        imgSrc: "./assets/img/img-04.jpg",
        title:"UN SUPER TITRE",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolor dolore error excepturi exercitationem in molestias nam, odit sequi similique dolor dolore error excepturi exercitationem in molestias nam, odit sequi"
    },
    {
        imgSrc: "./assets/img/img-05.jpg",
        title:"UN SUPER TITRE",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolor dolore error excepturi exercitationem in molestias nam, odit sequi similique dolor dolore error excepturi exercitationem in molestias nam, odit sequi"
    },
];
let menu = document.getElementById('all-plats'); /* start of dom */
for (const element of plats){ // I chose as a loop a for of because i think it is more convenient
    menu.innerHTML += `<article>
        <div class="container">
            <img src ="${element.imgSrc}" alt="plats">  <!--template literals-->
        </div>
        <div id="text">
            <h3>${element.title}</h3>
            <p>${element.text}</p>
        </div>
    </article>`;
}
let dark = document.getElementById("dark"); //declaration of variable
let body = document.querySelector("body");
let containerFluid = document.getElementById('container-fluid');
let h4 = document.createElement('h4');
function darkMode (){// function to display none the div container and to put the message of th joke
    body.appendChild(h4);
    h4.innerHTML= "C'EST UNE BLAGUE ... RECHARGEZ LA PAGE";
    body.classList.toggle("joke");
    containerFluid.classList.toggle('none');
}
dark.addEventListener("click", darkMode);// event to put the function darkMode