(function() {
    "use strict"
    //--------
    //* Clipboard
    //--------
    var btns = document.querySelectorAll('button');
    var clipboard = new Clipboard(btns);
    clipboard.on('success', function(e) {
        console.log(e);
    });
    clipboard.on('error', function(e) {
        console.log(e);
    });
})
 
jQuery(document).ready(function(){
    "use strict"; 
 
InitAccordion(); 

// end redy function
});

//------------------
//    Accordion Main BLocks
//-------------------
function InitAccordion(){
    "use strict";
    if(jQuery('.accordion.main-block').length){
        jQuery('.accordion.main-block').find('li h2').click(function(){
               jQuery(this).next().stop().slideToggle();
               jQuery(this).toggleClass("accordion-open-main-blocks");
        }).next().stop().hide();        
    }
}