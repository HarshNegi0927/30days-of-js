document.getElementById("harsh").innerText = "I am a mechanical enginnering student at mnnit allahbad";
document.getElementById("harsh").style.backgroundColor = "red";
document.querySelector(".box").style.backgroundColor = "red";
let body = document.querySelector("body");
let div = document.createElement("div");
div.innerText="this is the new div i have appended to the body"
body.appendChild(div)
let ulList = document.querySelector("ul");
let li = document.createElement("li");
li.innerText = "harsh negi";
ulList.appendChild(li);

// ACtiivity3
// ans/
let ulList2 = document.querySelector("ul");
ulList2.remove();

// task6
// ans/
let toDelete = document.querySelector(".toDelete");
let lastChild = toDelete.lastElementChild;
lastChild.remove();

// Activity4
// ans/
let imgs = document.querySelector(".imgs");
let image1 = imgs.firstElementChild
image1.setAttribute("src","noimage.png")

// task8
// ans/
let cssToBe = document.querySelector(".cssclass")
cssToBe.classList.add("toAdded")
cssToBe.classList.remove("toAdded")

// Activity5
// ans/
let target = document.querySelector(".target")
let toggle = ()=>{
        target.innerText = "it is a toggle functionality onclick"
}

let mouseOver = document.querySelector(".box")
mouseOver.addEventListener('mouseover',()=>{
    this.style.borderRadius = '50%'
})
mouseOver.addEventListener('mouseout',()=>{
    this.style.borderRadius = '0'
})

