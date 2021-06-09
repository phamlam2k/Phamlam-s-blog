function Validate(options){
    
    var button_click = document.querySelector(options.button_click);
    var input_name = document.querySelector(options.inputName);
    var mk = document.querySelector(options.mk);

    $(button_click).on('click', function(e){
        if($(input_name).val() == $(mk).val()){
            location.href = "Tinhyeu.html";
        }
        else{
            alert("Trang cấm bạn ơi đố bạn vào được :)")
        }

    })




}