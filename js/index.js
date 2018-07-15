// icon language

let lang = [
    {
        tagname: "div",
        classname: "langLogo",
        width: "50",
        height: "120",
        images: "images/Azerbaycan.png",
        parent: document.body,
        data: "aze"
    },

    {
        tagname: "div",
        classname: "langLogo",
        width: "50",
        height: "120",
        images: "images/english.png",
        parent: document.body,
        data: "eng"
    },

    {
        tagname: "div",
        classname: "langLogo",
        width: "50",
        height: "120",
        images: "images/rus.png",
        parent: document.body,
        data: "rus"
    }

]

function CreateLang(tagname, classname, width, height, images, data) {
    let language = document.createElement(tagname);
    language.className = classname;
    language.style.width = width + "px";
    language.style.height = height + "px";
    language.style.float = "right";
    language.style.bordeRadius = "10px";
    language.setAttribute("data-langname", data)
    let img = document.createElement("img");
    img.src = images;
    language.appendChild(img);
    return language
}

function runLang() {
    let lang_parent = document.createElement("div");
    lang_parent.className = "lang_parent";
    document.body.appendChild(lang_parent);
    for (let el of lang) {
        let elem = CreateLang(el.tagname, el.classname, el.width, el.height, el.images, el.data);
        lang_parent.appendChild(elem);
        elem.addEventListener("click", function(){
            let lang = this.dataset.langname;
            changeLanguage(lang);
        });
    }
}
runLang();

// Day Hours Month

function writeDate() {
    const month = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"]
    const day = ["Bazar günü", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"]

    let hourParent = document.createElement("div");
    hourParent.className = "hour_parent";

    setInterval(function () {
        let date = new Date();
        hourParent.innerHTML = `
        ${date.getHours()}:${date.getMinutes()} : ${date.getSeconds()}<br/>
        ${date.getDate()}  ${month[date.getMonth()]}<br/>
        ${day[date.getDay()]}
        `
    }, 1000)
    document.body.appendChild(hourParent);
}
writeDate()

// emanat logo

let logo = document.createElement("img");
logo.className = "emanat_logo";
logo.setAttribute("src", "images/emanat.png");
document.body.appendChild(logo);

// info logo

let info_logo = document.createElement("img");
info_logo.className = "info_logo";
info_logo.setAttribute("src", "images/info.png");
document.body.appendChild(info_logo);

// top galary

let items = [

    {
        tagname: "div",
        classname: "topBar",
        width: "150",
        backColor: "#002FFF",
        height: "120",
        images: "images/azerigaz.gif",
        parent: document.body
    },

    {
        tagname: "div",
        classname: "topBar",
        width: "150",
        backColor: "#2084db",
        height: "120",
        images: "images/AZERSU logo.png",
        parent: document.body
    },

    {
        tagname: "div",
        classname: "topBar",
        width: "150",
        backColor: "#630ad1",
        height: "120",
        images: "images/Azercell_logo.png",
        parent: document.body
    },

    {
        tagname: "div",
        classname: "topBar",
        width: "150",
        backColor: "#e00e0b",
        height: "120",
        images: "images/bakcell.png",
        parent: document.body
    },

    {
        tagname: "div",
        classname: "topBar",
        width: "150",
        backColor: "#991212",
        height: "120",
        images: "images/Nar-newlogo.png",
        parent: document.body
    },

    {
        tagname: "div",
        classname: "topBar",
        width: "150",
        backColor: "#d8600a",
        height: "120",
        images: "images/azeriisiq.png",
        parent: document.body
    },

    {
        tagname: "div",
        classname: "topBar",
        width: "150",
        backColor: "",
        height: "120",
        images: "images/meqasigorta.jpg",
        parent: document.body
    }
]

function Create(tagname, classname, width, backColor, height, images, parent) {
    let element = document.createElement(tagname);
    element.className = classname;
    element.style.width = width + "px";
    element.style.height = height + "px";
    element.style.float = "left";
    element.style.padding = "0px 5px";
    element.style.boxSizing = "border-box";
    element.style.backgroundColor = backColor;
    let img = document.createElement("img");
    img.src = images;
    parent.appendChild(element);
    element.appendChild(img)
    return element;
}

let mainParent = document.createElement("div");
mainParent.className = "main_parent";
document.body.appendChild(mainParent);

for (let elem of items) {
    let element = Create(elem.tagname, elem.classname, elem.width, elem.backColor, elem.height, elem.images, mainParent)
    element.addEventListener("click", provider_click)
}


function provider_click() {
    location.href="utility.html";
}

// Main Galary

let galary = [
    {
        tagname: "div",
        classname: "menu",
        width: "200",
        backColor: "#121C69",
        height: "110",
        parent: document.body,
        i:"<i class='icons fas fa-fire'></i><i class='icons fas fa-tint'></i><i class='icons far fa-lightbulb'></i>"
    },

    {
        tagname: "div",
        classname: "menu",
        width: "200",
        backColor: "#E6B919",
        height: "110",
        parent: document.body,
        i:"<i class='icons fas fa-mobile-alt'></i>"
    },

    {
        tagname: "div",
        classname: "menu",
        width: "200",
        backColor: "#000052",
        height: "110",
        parent: document.body,
        i:"<i class='icons fas fa-wallet'></i>"
    },

    {
        tagname: "div",
        classname: "menu",
        width: "200",
        backColor: "grey",
        height: "110",
        parent: document.body,
        i:"<i class='icons fas fa-building'></i>"
    },

    {
        tagname: "div",
        classname: "menu",
        width: "200",
        backColor: "yellow",
        height: "110",
        parent: document.body,
        i:"<i class='icons fas fa-tv'></i>"
    },

    {
        tagname: "div",
        classname: "menu",
        width: "200",
        backColor: "red",
        height: "110",
        parent: document.body,
        i:"<i class='icons fas fa-wifi'></i>"
    },

    {
        tagname: "div",
        classname: "menu",
        width: "200",
        backColor: "#1F0052",
        height: "110",
        parent: document.body,
        i:"<i class='icons fas fa-phone'></i>"
    },

    {
        tagname: "div",
        classname: "menu",
        width: "200",
        backColor: "#520016",
        height: "110",
        parent: document.body,
        i:"<i class='icons fas fa-gamepad'></i>"
    },

    {
        tagname: "div",
        classname: "menu",
        width: "200",
        backColor: "#523A00",
        height: "110",
        parent: document.body,
        i:"<i class='icons fas fa-wallet'></i>"
    },

    {
        tagname: "div",
        classname: "menu",
        width: "200",
        backColor: "#380E00",
        height: "110",
        parent: document.body,
        i:"<i class='icons fas fa-umbrella'></i>"
    },

    {
        tagname: "div",
        classname: "menu",
        width: "200",
        backColor: "#663300",
        height: "110",
        parent: document.body,
        i:"<i class='icons fas fa-percent'></i>"
    },

    {
        tagname: "div",
        classname: "menu",
        width: "200",
        backColor: "#004466",
        height: "110",
        parent: document.body,
        i:"<i class='icons fas fa-hand-holding-heart'></i>"
    },

    {
        tagname: "div",
        classname: "menu",
        width: "200",
        backColor: "#007ECC",
        height: "110",
        parent: document.body,
        i:"<i class='icons fab fa-cc-visa'></i>"
    },

    {
        tagname: "div",
        classname: "menu",
        width: "200",
        backColor: "#EB0014",
        height: "110",
        parent: document.body,
        i:"<i class='icons fab fa-creative-commons-sampling'></i>"
    },

    {
        tagname: "div",
        classname: "menu",
        width: "200",
        backColor: "#26BA53",
        height: "110",
        parent: document.body,
        i:"<i class='icons fas fa-cart-arrow-down'></i>"
    },

    {
        tagname: "div",
        classname: "menu",
        width: "200",
        backColor: "green",
        height: "110",
        parent: document.body,
        i:"<i class=' icons fas fa-graduation-cap'></i>"
    },

    {
        tagname: "div",
        classname: "menu",
        width: "200",
        backColor: "#020269",
        height: "110",
        parent: document.body,
        i:"<i class='icons far fa-list-alt'></i>"
    },

    {
        tagname: "div",
        classname: "menu",
        width: "200",
        backColor: "orange",
        height: "110",
        parent: document.body,
        i:"<i class='icons fas fa-plane'></i>"
    }

]
 
function MainGalary(tagname, classname, width, backColor, height, parent ) {
    let galary = document.createElement(tagname);
    galary.className = classname;
    galary.style.width = width + "px";
    galary.style.height = height + "px";
    galary.style.float = "left";
    galary.style.padding = "0px 5px";
    galary.style.boxSizing = "border-box"; 
    galary.style.backgroundColor = backColor;
    parent.appendChild(galary);
    return galary;
}

let maingalary = document.createElement("div");
let main = document.createElement("div");
let wrapper = document.createElement("div");
wrapper.className= "wrapper";
maingalary.className = "main_galary";
main.className = "main";
wrapper.innerHTML='<i class="right fas fa-chevron-circle-right"></i><i class="left fas fa-chevron-circle-left"></i>'
main.appendChild(maingalary);
wrapper.appendChild(main);
document.body.appendChild(wrapper);

for (let gal of galary) {
    let galary = MainGalary(gal.tagname, gal.classname, gal.width, gal.backColor, gal.height, maingalary)
}

let leftIcon = document.querySelector(".left");
let rightIcon = document.querySelector(".right");

leftIcon.addEventListener("click", function(){
 let main_galary = document.querySelector(".main_galary")
 main_galary.style.marginLeft = "0px";
})
rightIcon.addEventListener("click", function(){
    let main_galary = document.querySelector(".main_galary")
    main_galary.style.marginLeft = "-625px";
})

function changeLanguage(lang) {
    let providers = document.querySelectorAll(".menu"); 
    let index=0;
    for (let p of providers) {
        if (lang == "aze") {
            p.innerHTML =galary[index].i+"<p style='line-height:20px'>"+ azlangguges[index]+"</p>";
            index++; 
        }
        if(lang =="eng"){
            p.innerHTML =galary[index].i+"<p style='line-height:20px'>"+ enlangguges[index]+"</p>";
            index++; 
        }
        if(lang =="rus"){
            p.innerHTML = galary[index].i+"<p style='line-height:20px'>"+ ruslangguges[index]+"</p>";
            index++;
        }
    }
}
changeLanguage("aze")

