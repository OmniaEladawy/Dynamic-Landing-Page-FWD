/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/* add dynamic sections to page */
let num = 0;

function dynamicSection(){
    num ++;
    let section = document.createElement("section");
    section.setAttribute("id",`section${num}`);
    section.setAttribute("data-nav",`section ${num}`);
    section.innerHTML= `<div class="landing__container">
        <h2>Section ${num}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>`;
  document.querySelector("main").appendChild(section);
}




/* add sections to navbar */
function navbarItems() {
    document.querySelector("#navbar__list").innerHTML = "";
    document.querySelectorAll("section").forEach(sec =>
        {
            let li = document.createElement("li");
            li.innerHTML=`<a href="#${sec.id}" data-nav="${sec.id}" class="menu__link"> ${sec.dataset.nav} </a>`;
            document.querySelector("#navbar__list").appendChild(li);
        }  
        );
}

/* detecting scrolling sections to add and remove classes 
onscroll = function (){
    let scrollPosition = document.documentElement.scrollTop;
    document.querySelectorAll("section").forEach(section => {
        if(scrollPosition >= section.offsetTop - section.offsetHeight * 0.25  && scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25){
            let currentID = section.id ;
            console.log(currentID);
            removeClasses();
            addClasses(currentID);
        }  
        
    })
}
function removeClasses(){
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("your-active-class"));
    document.querySelectorAll("nav a").forEach(e => e.classList.remove("active"));
}

function addClasses(id) {
    let navSelector = `nav a[href="#${id}"]`;
    let sectionSelector = `#${id}`;
    document.querySelector(navSelector).classList.add("active");
    document.querySelector(sectionSelector).classList.add("your-active-class");
    location.hash = `#${id}`;
}
*/

/* detecting scrolling sections to add and remove classes */
function observingSections(){
    document.querySelectorAll("section").forEach(activeSec => {
        let activeLin = document.querySelector("#navbar__list").querySelector(`[href="#${activeSec.id}"]`);
        if(activeSec.getBoundingClientRect().top >= -350 && activeSec.getBoundingClientRect().top <= 150){
            activeSec.classList.add("your-active-class");
            activeLin.classList.add("active");
        }else{
            activeSec.classList.remove("your-active-class");
            activeLin.classList.remove("active");
        }
    })
}

/* show and hide up button */
function upBtn(){
    if (window.scrollY > 700) {
        document.querySelector(".up").style.display = "block";
    }else{
        document.querySelector(".up").style.display = "none";
    }
}

/* add sections function */
function addSection(){
    dynamicSection();
    navbarItems();
}

/* scroll to top */
function toTop(){
    window.scrollTo(0,0);
}

/* scroll event */
onscroll = function(){
    observingSections();
    upBtn();
}

/* call functions */
for(let i = 1 ; i <= 4 ; i++){
    dynamicSection();
}

navbarItems();





