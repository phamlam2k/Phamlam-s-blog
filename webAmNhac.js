function Validate(options){
    var text_vid = document.querySelector(options.text_vid);
    var back_to_top = document.querySelector(options.back_to_top);

    setTimeout(function(){
        $(text_vid).css("opacity", "1");
        $(text_vid).css("transition", "0.5s");
        $(text_vid).css("padding-left", "40px")
    },700);
    
    $(back_to_top).on("click",function (event) { 
        console.log("ok");
        $('html,body').animate({scrollTop: 0},1000);
        
    });
}