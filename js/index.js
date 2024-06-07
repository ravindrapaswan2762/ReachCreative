// const str = "process one cards ";
// const noSpacesStr = str.replace(/ /g, '');
// console.log(noSpacesStr);
document.addEventListener('DOMContentLoaded', ()=>{
    var navMenuAnchorTags = document.querySelectorAll('.nav-link');
    for (var i = 0; i < navMenuAnchorTags.length; i++){
        navMenuAnchorTags[i].addEventListener('click', (event)=>{
            event.preventDefault();

            for(let i=0; i < navMenuAnchorTags.length; i++){
                if(navMenuAnchorTags[i] == event.target){
                    event.target.classList.add('active');
                }
                else{
                    event.target.classList.remove('active');
                }
            }
        })
    }

})

// ------------------------------------------------------------------------ scrolling down through nav link
document.addEventListener('DOMContentLoaded', ()=>{
    var navMenuAnchorTags = document.querySelectorAll('.nav-link a');
    console.log(navMenuAnchorTags);

    for (var i = 0; i < navMenuAnchorTags.length; i++) {

        navMenuAnchorTags[i].addEventListener('click', function(event) {
            event.preventDefault();
            
            var targetSectionID = this.textContent.trim().replace(/ /g, '');
            console.log("targetSectionID", targetSectionID);
            
            var targetSection = document.getElementById(targetSectionID);
            console.log("targetSection", targetSection);
        
            var interval = setInterval(function() {
              // Gives section position as an object
              var targetSectionCoordinates = targetSection.getBoundingClientRect();
              console.log("targetSectionCoordinates", targetSectionCoordinates)
        
              if (targetSectionCoordinates.top <= 0 || targetSectionCoordinates.top==90) {
                clearInterval(interval);
                return;
              }
              window.scrollBy(0, 50);
            }, 20);
        });

    }

})
//// ---------------------------------------------------- show <=> hide of up button
document.addEventListener('DOMContentLoaded', () => {
    const homeID = document.getElementById('home');
    const backTotop = document.querySelector('.backTotop');

    window.addEventListener('scroll', () => {
        var homeCoordinates = homeID.getBoundingClientRect();
        console.log('homeSec coordinates ', homeCoordinates);

        if (homeCoordinates.bottom <= 0 || homeCoordinates.top >= window.innerHeight) {
            backTotop.classList.remove('hide');
            backTotop.classList.add('show');
        } else {
            backTotop.classList.remove('show');
            backTotop.classList.add('hide');
        }
    });
    // ------------------------------------------------- scrolling up through up button
    backTotop.addEventListener('click', ()=>{
        console.log('backTotop btn', backTotop);
        var interval = setInterval( ()=>{
            var homeCoordinates = homeID.getBoundingClientRect();

            if (homeCoordinates.top == 0 || homeCoordinates.top==90) {
                clearInterval(interval);
                return;
              }
            
            window.scrollBy(0, -50);
        }, 20)

    })
    // -----------------------------------------------------
    
});

