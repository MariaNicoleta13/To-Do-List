var img=$(".add");
img.click(function(){
    $("input[type='text']").fadeToggle();
});

$("input[type='text']").keypress(function(event){
    if(event.which=="13"){
        var text=$(this).val();
        $(this).val('');
        $('ul').append(
            '<li>'+'<span><img class="remove" src="/shield-min.png" ></span>' +text+ '</li>'
        );
    }
});

$("ul").on("click","li",function(){
    $(this).toggleClass("done");
});

$("ul").on("click",'span',function(hide){

    $(this).parent().fadeOut(800,function(){
        $(this).remove();
    });
    hide.stopPropagation();
});


 $('.hover').on("touchstart",function(touch){
        touch.preventDefault();
        $(this).find('.deleteImg').toggleClass("hovereff");
    });
