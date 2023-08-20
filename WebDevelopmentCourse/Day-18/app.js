let smallImage = document.getElementsByClassName("oldImg");

for(let i=0; i<smallImage.length; i++) {
    console.dir(smallImage[i].src);
}

let img = document.querySelector('img');
console.log(img);
console.log(img.getAttribute('id'));
// console.log(img.setAttribute('id', 'spiderman'));

let links = document.querySelectorAll('.pubInfo a');


for(link of links) {
    link.style.color = "purple";
}
// for(let i=0; i<links.length; i++) {
//     links[i].style.color = "purple";
// }