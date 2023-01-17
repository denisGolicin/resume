// // window.addEventListener('touchstart', () => { console.log('start') }); // el.ontouchstart = () => { console.log('start') };
// // window.addEventListener('touchend', () => { console.log('end') }); // el.ontouchstart = () => { console.log('start') };
// // window.addEventListener('touchmove', () => { 
// //     document.body.style.display = "none";
// //  }); // el.ontouchstart = () => { console.log('start') };
// // window.addEventListener('touchcancel', () => { console.log('cancel') });
let buttonActive;
let buttonActiveStories;
let buttonActiveTeam;
let buttonActiveWith;
let isMobile = true;
let isComp = false;
let buttonid = 0;
let buttonidStories = 0;
let buttonidTeam = 0;
let buttonidWith = 0;
let buttonidStories2 = 0;
let buttonActiveStories2;

let buttonsYouGet = [];
buttonsYouGet = document.querySelectorAll('.block-youGet-elements-curcle');

let buttonsWith = [];
buttonsWith = document.querySelectorAll('.with-curcle');

let buttonsTeam = [];
buttonsTeam = document.querySelectorAll('.team-curcle');

let buttonsStories = [];
buttonsStories = document.querySelectorAll('.block-stories-curcle');

let buttonsStories2 = [];
buttonsStories2 = document.querySelectorAll('.block-stories-buttons-item');


let buttonsWeDo = [];
buttonsWeDo = document.querySelectorAll('.block-weDo-curcle');
console.log(buttonsWeDo + " " + buttonsWeDo.length)


let blocksYouGet = [];
blocksYouGet = document.querySelectorAll('.block-youGet-container');

let blocksWith = [];
blocksWith = document.querySelectorAll('.block-with-card');

let blocksTeam = [];
blocksTeam = document.querySelectorAll('.block-team-card');

let blocksStories = [];
blocksStories = document.querySelectorAll('.block-stories-border');

let blocksWeDo = [];
blocksWeDo = document.querySelectorAll('.block-weDo-elements');

window.onload = function(){
    loadt = document.querySelector('.load-block');
    loadt.style.display = "none";

    if(window.matchMedia('(max-width: 774px)').matches) {
        isMobile = true;
        isComp = false;
        blocksWeDo[1].classList.add('weDo-hide');
        updateblocksYouGetMobile();
    }
    else{

        isMobile = false;
        isComp = true;
        updateblocksYouGetComp();
        
    }
}


window.addEventListener('resize', function() {
    if(window.matchMedia('(max-width: 774px)').matches) {
        if(!isMobile && isComp){
            updateblocksYouGetMobile();
            isMobile = true;
            isComp = false;
            
        }
    }
    else{
        
        if(isMobile && !isComp){
            updateblocksYouGetComp();
            isMobile = false;
            isComp = true;
        }
    }
}, true);

for(let i = 0; i < buttonsTeam.length; i++){
    
    if(buttonsTeam[i].classList.contains('team-button-active')){
        buttonActiveTeam = buttonsTeam[i];
    }

    if(window.matchMedia('(max-width: 774px)').matches){
        
        blocksTeam[0].classList.remove('team-hide');
    }
    else{
        //ПК
        if(i < 3) {
            blocksTeam[i].classList.remove('team-hide');
        }
    }
    buttonsTeam[i].addEventListener('click', function() {
        if(this.classList.contains('team-button-active')) return;

        changeBlockTeam(i, buttonidTeam);
        this.classList.add('team-button-active');
        buttonActiveTeam.classList.remove('team-button-active');
        buttonActiveTeam = this;
        buttonidTeam = i;

        console.log("click" + i)
    })
}



for(let i = 0; i < buttonsYouGet.length; i++){
    
    if(buttonsYouGet[i].classList.contains('youGet-button-active')){
        buttonActive = buttonsYouGet[i];
    }

    if(window.matchMedia('(max-width: 774px)').matches){
        
        blocksYouGet[0].classList.remove('youGet-hide');
    }
    else{
        //ПК
        if(i < 3) {
            blocksYouGet[i].classList.remove('youGet-hide');
        }
    }
    buttonsYouGet[i].addEventListener('click', function() {
        if(this.classList.contains('youGet-button-active')) return;

        changeBlockYouGet(i, buttonid);
        this.classList.add('youGet-button-active');
        buttonActive.classList.remove('youGet-button-active');
        buttonActive = this;
        buttonid = i;

        console.log("click" + i)
    })
}
//
for(let i = 0; i < buttonsStories.length; i++){
    
    if(buttonsStories[i].classList.contains('stories-button-active')){
        buttonActiveStories = buttonsStories[i];
    }

    buttonsStories[i].addEventListener('click', function() {
        if(this.classList.contains('stories-button-active')) return;

        blocksStories[buttonidStories].classList.add('stories-hide');
        blocksStories[i].classList.remove('stories-hide');

        this.classList.add('stories-button-active');
        buttonActiveStories.classList.remove('stories-button-active');
        buttonActiveStories = this;
        buttonidStories = i;

        console.log("click stories" + i)
    })
}

for(let i = 0; i < buttonsWith.length; i++){
    
    if(buttonsWith[i].classList.contains('with-button-active')){
        buttonActiveWith = buttonsWith[i];
    }

    buttonsWith[i].addEventListener('click', function() {
        if(this.classList.contains('with-button-active')) return;

        blocksWith[buttonidWith].classList.add('with-hide');
        blocksWith[i].classList.remove('with-hide');

        this.classList.add('with-button-active');
        buttonActiveWith.classList.remove('with-button-active');
        buttonActiveWith = this;
        buttonidWith = i;

        console.log("click stories" + i)
    })
}

for(let i = 0; i < buttonsStories2.length; i++){
    
    if(buttonsStories2[i].classList.contains('stories-button-active')){
        buttonActiveStories2 = buttonsStories2[i];
    }

    buttonsStories2[i].addEventListener('click', function() {
        if(this.classList.contains('stories-button-active')) return;

        blocksStories[buttonidStories2].classList.add('stories-hide');
        blocksStories[i].classList.remove('stories-hide');

        this.classList.add('stories-button-active');
        buttonActiveStories2.classList.remove('stories-button-active');
        buttonActiveStories2 = this;
        buttonidStories2 = i;

        console.log("click stories2" + i)
    })
}
//
buttonsWeDo[0].addEventListener('click', function(){
    if(this.classList.contains('weDo-button-active')) return;
    this.classList.add('weDo-button-active');
    blocksWeDo[0].classList.remove('weDo-hide');

    buttonsWeDo[1].classList.remove('weDo-button-active');
    blocksWeDo[1].classList.add('weDo-hide');
})
buttonsWeDo[1].addEventListener('click', function(){
    if(this.classList.contains('weDo-button-active')) return;
    this.classList.add('weDo-button-active');
    blocksWeDo[1].classList.remove('weDo-hide');

    buttonsWeDo[0].classList.remove('weDo-button-active');
    blocksWeDo[0].classList.add('weDo-hide');


})


function changeBlockYouGet(_new, _old){
    console.log(_new + " " + _old)
    if(isMobile){
        blocksYouGet[_old].classList.add('youGet-hide');
        blocksYouGet[_new].classList.remove('youGet-hide');
        return;
        
    }
    else {
        // i == 3
        if(_new == 0){
            if(_old == 1){
                blocksYouGet[3].classList.add('youGet-hide');
                blocksYouGet[4].classList.add('youGet-hide');
                blocksYouGet[5].classList.add('youGet-hide');
            }
            if(_old == 2){
                blocksYouGet[6].classList.add('youGet-hide');
                blocksYouGet[7].classList.add('youGet-hide');
                blocksYouGet[8].classList.add('youGet-hide');
            }
            blocksYouGet[0].classList.remove('youGet-hide');
            blocksYouGet[1].classList.remove('youGet-hide');
            blocksYouGet[2].classList.remove('youGet-hide');
        }
        if(_new === 1){
            if(_old === 0){
                blocksYouGet[0].classList.add('youGet-hide');
                blocksYouGet[1].classList.add('youGet-hide');
                blocksYouGet[2].classList.add('youGet-hide');
            }
            if(_old === 2){
                blocksYouGet[6].classList.add('youGet-hide');
                blocksYouGet[7].classList.add('youGet-hide');
                blocksYouGet[8].classList.add('youGet-hide');
            }
            blocksYouGet[3].classList.remove('youGet-hide');
            blocksYouGet[4].classList.remove('youGet-hide');
            blocksYouGet[5].classList.remove('youGet-hide');
        }
        if(_new === 2){
            if(_old === 0){
                blocksYouGet[0].classList.add('youGet-hide');
                blocksYouGet[1].classList.add('youGet-hide');
                blocksYouGet[2].classList.add('youGet-hide');
            }
            if(_old === 1){
                blocksYouGet[3].classList.add('youGet-hide');
                blocksYouGet[4].classList.add('youGet-hide');
                blocksYouGet[5].classList.add('youGet-hide');
            }
            blocksYouGet[6].classList.remove('youGet-hide');
            blocksYouGet[7].classList.remove('youGet-hide');
            blocksYouGet[8].classList.remove('youGet-hide');
        }
    }
}

function changeBlockTeam(_new, _old){
    console.log(_new + " " + _old)
    if(isMobile){
        blocksTeam[_old].classList.add('team-hide');
        blocksTeam[_new].classList.remove('team-hide');
        return;
        
    }
    else {
        // i == 3
        if(_new == 0){
            if(_old == 1){
                blocksTeam[3].classList.add('team-hide');
                blocksTeam[4].classList.add('team-hide');
                blocksTeam[5].classList.add('team-hide');
            }
            if(_old == 2){
                blocksTeam[6].classList.add('team-hide');
                blocksTeam[7].classList.add('team-hide');
                blocksTeam[8].classList.add('team-hide');
            }
            blocksTeam[0].classList.remove('team-hide');
            blocksTeam[1].classList.remove('team-hide');
            blocksTeam[2].classList.remove('team-hide');
        }
        if(_new === 1){
            if(_old === 0){
                blocksTeam[0].classList.add('team-hide');
                blocksTeam[1].classList.add('team-hide');
                blocksTeam[2].classList.add('team-hide');
            }
            if(_old === 2){
                blocksTeam[6].classList.add('team-hide');
                blocksTeam[7].classList.add('team-hide');
                blocksTeam[8].classList.add('team-hide');
            }
            blocksTeam[3].classList.remove('team-hide');
            blocksTeam[4].classList.remove('team-hide');
            blocksTeam[5].classList.remove('team-hide');
        }
        if(_new === 2){
            if(_old === 0){
                blocksTeam[0].classList.add('team-hide');
                blocksTeam[1].classList.add('team-hide');
                blocksTeam[2].classList.add('team-hide');
            }
            if(_old === 1){
                blocksTeam[3].classList.add('team-hide');
                blocksTeam[4].classList.add('team-hide');
                blocksTeam[5].classList.add('team-hide');
            }
            blocksTeam[6].classList.remove('team-hide');
            blocksTeam[7].classList.remove('team-hide');
            blocksTeam[8].classList.remove('team-hide');
        }
    }
}

function updateblocksYouGetComp(){

    blocksWeDo[0].classList.remove('weDo-hide');
    blocksWeDo[1].classList.remove('weDo-hide');
    console.log("Adaptation of comp");
    for(let i = 0; i < buttonsYouGet.length; i++){
        buttonsYouGet[i].classList.remove("youGet-button-active");
        blocksYouGet[i].classList.add("youGet-hide");
    }
    blocksYouGet[0].classList.remove("youGet-hide");
    blocksYouGet[1].classList.remove("youGet-hide");
    blocksYouGet[2].classList.remove("youGet-hide");
    buttonsYouGet[0].classList.add("youGet-button-active");
    buttonActive = buttonsYouGet[0];
    buttonid = 0;

    for(let i = 0; i < buttonsTeam.length; i++){
        buttonsTeam[i].classList.remove("team-button-active");
        blocksTeam[i].classList.add("team-hide");
    }
    blocksTeam[0].classList.remove("team-hide");
    blocksTeam[1].classList.remove("team-hide");
    blocksTeam[2].classList.remove("team-hide");
    buttonsTeam[0].classList.add("team-button-active");
    buttonActiveTeam = buttonsTeam[0];
    buttonidTeam = 0;

    for(let i = 0; i < buttonsWith.length; i++){
        buttonsWith[i].classList.remove("with-button-active");
        blocksWith[i].classList.remove("with-hide");
    }
    buttonsWith[0].classList.add("with-button-active");
    buttonActiveWith = buttonsWith[0];
}
function updateblocksYouGetMobile(){
    blocksWeDo[0].classList.remove('weDo-hide');
    blocksWeDo[1].classList.add('weDo-hide');

    buttonsWeDo[0].classList.add('weDo-button-active');
    buttonsWeDo[1].classList.remove('weDo-button-active');
    
    console.log("Adaptation of mob");
    for(let i = 0; i < buttonsYouGet.length; i++){
        buttonsYouGet[i].classList.remove("youGet-button-active");
        blocksYouGet[i].classList.add("youGet-hide");
    }
    blocksYouGet[0].classList.remove("youGet-hide");
    buttonsYouGet[0].classList.add("youGet-button-active");
    buttonActive = buttonsYouGet[0];
    buttonid = 0;

    for(let i = 0; i < buttonsWith.length; i++){
        buttonsWith[i].classList.remove("with-button-active");
        blocksWith[i].classList.add("with-hide");
    }
    buttonsWith[0].classList.add("with-button-active");
    blocksWith[0].classList.remove("with-hide");
    buttonActiveWith = buttonsWith[0];

    for(let i = 0; i < buttonsTeam.length; i++){
        buttonsTeam[i].classList.remove("team-button-active");
        blocksTeam[i].classList.add("team-hide");
    }
    blocksTeam[0].classList.remove("team-hide");
    buttonsTeam[0].classList.add("team-button-active");
    buttonActiveTeam = buttonsTeam[0];
    buttonidTeam = 0;

}



// let buttonsYouGet = [];
// buttonsYouGet = document.querySelectorAll('.block-youGet-elements-curcle');

// for(let i = 0; i < buttonsYouGet.length; i++){
//     if(i == 0){
//         buttonActive = buttonsYouGet[i];
//     }
//     buttonsYouGet[i].addEventListener('click', function(){

//         console.log(this);
//         this.classList.add('youGet-button-active');
//         buttonActive.classList.remove('youGet-button-active');
//         buttonActive = this;

//     })


// }





