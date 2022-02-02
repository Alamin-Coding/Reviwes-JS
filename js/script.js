const reviwes = [
{
    id: 1,
    author: "Mr Al-Amin",
    job: "Web Developer",
    img: "images/image-1.png",
    info: "montes, nascetur ridiculus mus. Suspendisse ullamcorper auctor felis suscipit cursus. Praesent vestibulum pulvinar lorem quis",
},
{
    id: 2,
    author: "Mr Rony",
    job: "Web Designer",
    img: "images/image-2.png",
    info: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec interdum accumsan mi,",
},
{
    id: 3,
    author: "Mr sajjad",
    job: "Laravel Developer",
    img: "images/image-3.png",
    info: "diam. Vestibulum imperdiet augue dolor, non aliquet tellus dignissim sit amet. Orci varius natoque penatibus et magnis dis",
},
];

const img = document.getElementById("person_img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

//All Button selected
let prev_btn = document.querySelector(".prev_btn");
let next_btn = document.querySelector(".next_btn");
let random_btn = document.querySelector(".random_btn");

//set starting items
var currentItem = 0;

//load intial Item
window.addEventListener("DOMContentLoaded", function(){
    showPerson();
})

function showPerson(){
    let item = reviwes[currentItem];
    img.src = item.img; 
    author.textContent = item.author; 
    job.textContent = item.job; 
    info.textContent = item.info; 
}
prev_btn.addEventListener("click",function(){
    currentItem--
    if(currentItem < 0){
        currentItem = (reviwes.length) -1;
    }
    showPerson();
})
next_btn.addEventListener("click",function(){
    currentItem++
    if(currentItem > (reviwes.length)-1){
        currentItem = 0;
    }
    showPerson();
})

//select Reviwe main div
var div = document.querySelector(".reviwe_main");
var text = document.querySelector(".text");
//Hex coloe random
let colorCode = ["A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"];

random_btn.addEventListener("click",function(){
        currentItem = Math.floor(Math.random() * reviwes.length);
        showPerson();
        let color = "#";
        for(var i=0; i<6; i++){
            let randomBgColor = Math.floor(Math.random() * colorCode.length)
            color += colorCode[randomBgColor];
        }
        div.style.backgroundColor = color;


        let textColor = color.slice(1);
        let colorReserce = textColor.split('').reverse().join('');
        let textColorReverse = "#" + colorReserce;
        info.style.color = textColorReverse;
    })
    
    



// random_btn.addEventListener("click",function(){


// })