function Validate(options){
    var text_img = document.querySelector(options.text_img);
    var back_to_top = document.querySelector(options.back_to_top);
    var new_info = document.querySelector(options.new_info);

    setTimeout(function(){
        $(text_img).css("opacity", "1");
        $(text_img).css("transition", "0.5s");
        $(text_img).css("padding-left", "40px")
    },700);
    
    $(back_to_top).on("click",function () { 
        console.log("ok");
        $('html,body').animate({scrollTop: 0},1000);
    });

    $(window).scroll(function (e) { 
        var pos_body = $('html,body').scrollTop();
        console.log(pos_body);
        if(pos_body >= 600 ){
            $(new_info).css("visibility", "visible");
            $(new_info).css("transform", "translateX(35%)");     
        }
        else if(pos_body < 700){
            $(new_info).css("visibility", "hidden");
            $(new_info).css("transform", "translateX(-35%)");  
        }
       
    });
}