$(document).ready(function(){
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    
    if(isMobile) {
        var height = window.innerHeight;
        var name_margintop = height*0.3;
        var act_height = height*0.4;
    $("#pagetitle").css("height",height);
    $("#pagetitle #nametitle").css("margin-top", name_margintop);
    $(".activitybox").css("margin-top", act_height);
    }
    
    $("#nametitle").slideDown(1500, function(){
        $("#subtitle").fadeIn(1000);
    });
    
    $(window).scroll(function(){
       $("#contents, #activities").each(function(i){
           var bottom_of_object = $(this).offset().top+$(this).outerHeight();
           var bottom_of_window = $(window).scrollTop()+$(this).height();
    
           if(bottom_of_window > bottom_of_object/2) {
               $(this).animate({"opacity":"1","margin-left":"0px"},1000);
           }
           
       })    
    });
    
    $("footer a").hover(function(){
        $(this).css("color","green");
    }, function(){
        $(this).css("background-color","none");
        
    })
    
    $("#sidemenu").hover(function(){
        $("bar #instagram, bar #facebook").fadeIn(500);
    });
    
    $("bar").mouseleave(function(){
        setTimeout(function(){
            $("bar #instagram, bar #facebook").fadeOut(500);
        }, 500);
    })
});