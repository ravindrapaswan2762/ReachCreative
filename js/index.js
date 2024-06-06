// const str = "process one cards ";
// const noSpacesStr = str.replace(/ /g, '');
// console.log(noSpacesStr);


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