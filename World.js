function Validate(options){
    var slider1 = document.querySelector(options.slider1);
    var title_slide1 = document.querySelector(options.title_slide1);     
    var text_slide1 = document.querySelector(options.text_slide1);

    setTimeout(function(){
        $(title_slide1).css("transform", "translateX(25%)");
        $(title_slide1).css("visibility" , "visible");

    },1000);

    setTimeout(function(){
        $(text_slide1).css("transform", "translateY(-50%)");
        $(text_slide1).css("visibility" , "visible");

    },1500);

    


}