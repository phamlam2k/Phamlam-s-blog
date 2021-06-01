function Validate(options){
  
    var back_to_top = document.querySelector(options.back_to_top);
    

    
    
    $(back_to_top).on("click",function () { 
        console.log("ok");
        $('html,body').animate({scrollTop: 0},1000);
        
    });
}