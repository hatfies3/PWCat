$( document ).ready(function() {
    
    // Loop through each nav item
    $('.spinner-container').children('.spinner').each(function(index){
        
        // Turn the index value into a reasonable animation delay
        var delay = index*0.3;
        
        // Apply the animation delay
        // $(this).css("animation-delay", delay + "s")	

    });

  });