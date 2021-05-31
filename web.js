function Validate(options){

    var header = document.querySelector(options.header);
    var name_brand = document.querySelectorAll(options.name_brand);
    var back_to_top = document.querySelector(options.back_to_top);
    
    $(window).scroll(function (e) { 
        var pos_body = $('html,body').scrollTop();
        
        if(pos_body > 20){
            $(header).css("background-color", "#eaedee");
            $(name_brand).css("color", "black");
            

        }
        else if(pos_body == 0){
            $(header).css("background-color", "rgb(108, 149, 202)");
            $(name_brand).css("color", "white");
        }
    });

    $(back_to_top).on("click",function (event) { 
        console.log("ok");
        $('html,body').animate({scrollTop: 0},1000);
        
    });



}

    
