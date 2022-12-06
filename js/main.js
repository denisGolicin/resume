const about = document.getElementById("about"); 
const project = document.getElementById("project");
const mainContent = document.getElementById("main-content");
const projectContent = document.getElementById("project-content");

setTimeout(scrollEnable, 9000);

function scrollEnable() {
    document.getElementById("main-wrapper").style.overflowY = "scroll";
    mainContent.style.height = "initial"; 
    mainContent.style.clear = "both"; 

    // mainContent.style.animation = "animation-main-content 1s forwards";
}

project.addEventListener("click", () => {
    console.log("project");
    if(project.classList.contains("active")){
        console.log("project active");
    }
    else {
        project.classList.add("active");
        about.classList.remove("active");
        mainContent.style.display = "none";
        projectContent.style.display = "block";
        projectContent.style.animation = "animation-main-content 1s forwards";
    }
}); 
about.addEventListener("click", () => {
    console.log("about");
    if(about.classList.contains("active")){
        console.log("about active");
    }
    else {
        project.classList.remove("active");
        about.classList.add("active");
        mainContent.style.display = "block";
        projectContent.style.display = "none";
        mainContent.style.animationDelay = "0s";
    }
}); 
const boxes = Array.from(document.querySelectorAll(".project-accordion")); 

boxes.forEach((box) => {
    box.addEventListener("click", boxHandler); 
    console.log(box);
});

function boxHandler(e) {
    // e.preventDefault(); 
    let currentBox = e.target.closest(".project-accordion"); 
    let currentContent = currentBox.lastElementChild; 
    if(e.target == e.target.closest(".tedt")){
        console.log("No");
        return;
    }
    console.log(e.target);
    currentBox.classList.toggle("project-active"); 
    if (currentBox.classList.contains("project-active")) {
        currentContent.style.maxHeight = currentContent.scrollHeight + "px"; 
    } else {
        currentContent.style.maxHeight = 0; 
    }
}