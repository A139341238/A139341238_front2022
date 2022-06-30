"use strict";
const plats = [ // plats inject json
    {
        imgSrc: "./assets/img/img-01.jpg",
        title:"UN SUPER TITRE",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolor dolore error excepturi exercitationem in molestias nam, odit sequi similique"
    },
    {
        imgSrc: "./assets/img/img-02.jpg",
        title:"UN SUPER TITRE",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolor dolore error excepturi exercitationem in molestias nam, odit sequi similique"
    }, {
        imgSrc: "./assets/img/img-03.jpg",
        title:"UN SUPER TITRE",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolor dolore error excepturi exercitationem in molestias nam, odit sequi similique?"
    },
    {
        imgSrc: "./assets/img/img-04.jpg",
        title:"UN SUPER TITRE",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolor dolore error excepturi exercitationem in molestias nam, odit sequi similique?"
    },
    {
        imgSrc: "./assets/img/img-05.jpg",
        title:"UN SUPER TITRE",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolor dolore error excepturi exercitationem in molestias nam, odit sequi similique "
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