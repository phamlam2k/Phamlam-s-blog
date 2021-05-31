function Validate(options){
    var text_img = document.querySelector(options.text_img);
    var back_to_top = document.querySelector(options.back_to_top);

    setTimeout(function(){
        $(text_img).css("opacity", "1");
        $(text_img).css("transition", "0.5s");
        $(text_img).css("padding-left", "40px")
    },700);
    
    $(back_to_top).on("click",function () { 
        console.log("ok");
        $('html,body').animate({scrollTop: 0},1000);
        
    });
}